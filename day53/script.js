const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const progress = document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
const volumeSlider = document.getElementById("volume");

// Songs list
const songs = [
  { name: "song1.mp3", title: "Another one bites the dust", artist: "Queens" },
  { name: "song2.mp3", title: "Killer queen", artist: "Queens" },
  { name: "song3.mp3", title: "We are the champions", artist: "Queens" }
];

let songIndex = 0;

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = `music/${song.name}`;
}

loadSong(songs[songIndex]);

function playSong() {
  audio.play();
  playBtn.textContent = "⏸️";
}

function pauseSong() {
  audio.pause();
  playBtn.textContent = "▶️";
}

let isPlaying = false;
playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
  isPlaying = !isPlaying;
});

nextBtn.addEventListener("click", () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
  isPlaying = true;
});

prevBtn.addEventListener("click", () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playSong();
  isPlaying = true;
});

audio.addEventListener("timeupdate", () => {
  const { duration, currentTime } = audio;
  progress.value = (currentTime / duration) * 100;

  currentTimeEl.textContent = formatTime(currentTime);
  durationEl.textContent = formatTime(duration);
});

progress.addEventListener("input", () => {
  const { duration } = audio;
  audio.currentTime = (progress.value / 100) * duration;
});

volumeSlider.addEventListener("input", () => {
  audio.volume = volumeSlider.value;
});

function formatTime(sec) {
  if (isNaN(sec)) return "0:00";
  const minutes = Math.floor(sec / 60);
  const seconds = Math.floor(sec % 60).toString().padStart(2, "0");
  return `${minutes}:${seconds}`;
}
