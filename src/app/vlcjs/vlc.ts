interface Video {
  options: string;
  source: string;
  size: {
    width: string;
    height: string;
  };
  element: HTMLCanvasElement;
}

export async function VLCPlayer(video: Video): Promise<void> {
  console.log("TODO, configuration provided", video);
}
