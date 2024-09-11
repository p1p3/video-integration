# Angular Project: VLC Emulation

This Angular project emulates specific conditions that might exist in our real application. It provides a basic structure to test and develop functionalities such as Service Worker integration and VLC.js implementation.

## Run the project

1. `npm install`
2. `ng serve` || `ng serve --configuration production`

## Project Overview

- **Base URL**: The project is served from `http://localhost:4200/viewer` instead of the root `http://localhost:4200`.
- **Service Worker**: A Service Worker intercepts requests and adds a fake authorization header. Although this header doesn't impact the requests in this demo (as the video is not protected), it is essential to mimic our real application where VLC requires these headers for authorization.
- **Multiple Viewports**: The application supports multiple video viewports. It is not necessary to play videos simultaneously, but it is important that videos can be paused and resumed interchangeably.

## How to Add VLC.js

To integrate VLC.js into this project, follow these steps:

1. **Modify VLC.js Code**:
   - Navigate to `src/app/vlcjs/vlc.ts`.
   - Modify the `VLCPlayer` function as needed. This function is called from `src/app/vlcjs/vlc-player.component.ts`.

2. **Add Service Worker**:
   - Include all relevant Service Worker files under the `vendor` directory.
   - The Service Worker will be served from the following URL: `http://localhost:4200/viewer/vlcjs/service.worker.js`.
   - For reference, a dummy file is provided at `http://localhost:4200/viewer/vlcjs/dummy.txt`.

## Additional Notes

- Ensure that the VLCPlayer function and Service Worker are correctly configured to test the emulation conditions.
- The structure and code provided should closely resemble the processes used in our real application, making it a suitable testing ground.

Feel free to explore and modify the project as needed to fit your development needs.
