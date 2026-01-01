function playAnime(videoUrl) {
  const player = document.getElementById("videoPlayer");
  player.src = videoUrl;
}

function searchAnime() {
  const input = document.getElementById("search").value.toLowerCase();
  const cards = document.getElementsByClassName("anime-card");

  for (let card of cards) {
    const title = card.getAttribute("data-title");
    card.style.display = title.includes(input) ? "block" : "none";
  }
}
