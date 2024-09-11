const getResponseWithToken = (event) => {
  const token = "<<<<<FAKE TOKEN>>>>";

  const headers = {
    ...Object.fromEntries(event.request.headers),
    Authorization: `Bearer ${token}`,
  };

  const updatedRequest = new Request(event.request, {
    method: event.request.method,
    headers,
    mode: "cors",
    credentials: "same-origin",
  });

  return fetch(updatedRequest);
};

// custom code
self.addEventListener("fetch", (event) => {
  if (event.request.destination === "video" && event.request.method === "GET") {
    // Intercept request coming from the video tag to append the authorization token
    event.respondWith(getResponseWithToken(event));
  }
});
