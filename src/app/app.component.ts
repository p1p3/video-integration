import { Component, inject, model } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { VlcPlayerComponent } from "./vlcjs/vlc-player.component";
import { DomSanitizer } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [RouterOutlet, VlcPlayerComponent, FormsModule],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "vlcjs-dedalus";

  useVLC = model(false);

  private sanitizer = inject(DomSanitizer);

  videoSources = [
    this.sanitizer.bypassSecurityTrustResourceUrl("/sample-5s.mp4"),
    this.sanitizer.bypassSecurityTrustResourceUrl("/sample-10s.mp4"),
    this.sanitizer.bypassSecurityTrustResourceUrl("/sample-15s.mp4"),
    this.sanitizer.bypassSecurityTrustResourceUrl("/sample-20s.mp4"),
  ];
}
