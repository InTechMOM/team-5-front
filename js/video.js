const playButton = document.getElementById("play-button");
const youtubeLinkInput = document.getElementById("youtube-link");
const videoContainer = document.getElementById("video-container");

playButton.addEventListener("click", () => {
  const youtubeLink = youtubeLinkInput.value;
  const videoId = getYoutubeVideoId(youtubeLink);
  const iframe = createYoutubeIframe(videoId);
  videoContainer.appendChild(iframe);
  videoContainer.style.display = "block";
});

function getYoutubeVideoId(link) {
  const url = new URL(link);
  const searchParams = new URLSearchParams(url.search);
  return searchParams.get("v");
}

function createYoutubeIframe(videoId) {
  const iframe = document.createElement("iframe");
  iframe.width = "600";
  iframe.height = "315";
  iframe.src = `https://www.youtube.com/embed/${videoId}`;
  iframe.frameborder = "0";
  iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  iframe.allowfullscreen = true;
  return iframe;
}