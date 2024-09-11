import {
  Component,
  viewChild,
  ElementRef,
  input,
  computed,
  effect,
  inject,
  SecurityContext,
} from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";

@Component({
  selector: "vlc-player",
  standalone: true,
  template: `
    <div class="container">
      <canvas style="background-color: gray" #canvas></canvas>
      <div>
        <button id="play">Play</button>
        <button id="pause">Stop</button>
        <meter id="seekbar" max="100" style="width: 500px" value="0"></meter>
        <meter id="volume" max="100" style="width: 100px" value="80"></meter>
      </div>
    </div>
  `,
  styles: `
    .container > canvas {
      height: 360px;
      width: 720px;
    }
  `,
})
export class VlcPlayerComponent {
  private sanitizer = inject(DomSanitizer);

  canvasElement = viewChild<ElementRef>("canvas");
  src = input<SafeResourceUrl>();

  sanitizedSrc = computed(() =>
    this.sanitizer.sanitize(SecurityContext.RESOURCE_URL, this.src() || ""),
  );

  videoData = computed(() => ({
    url: this.sanitizedSrc(),
    canvas: this.canvasElement()?.nativeElement,
  }));

  constructor() {
    effect(() => {
      const data = this.videoData();

      if (data.canvas && data.url) {
        this.playFromVlc({
          url: data.url,
          canvas: data.canvas,
        });
      }
    });
  }

  async playFromVlc({
    url,
    canvas,
  }: {
    url: string;
    canvas: HTMLCanvasElement;
  }) {
    const { VLCPlayer } = await import("./vlc");

    const video = {
      source: url,
      element: canvas,
      options:
        "--codec=webcodec --aout=emworklet_audio -vv --input-repeat=10000",
      size: {
        width: "700px",
        height: "",
      },
    };

    await VLCPlayer(video).catch((err) => console.error(`error felja: ${err}`));
  }
}
