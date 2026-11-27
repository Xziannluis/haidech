// Personalize these values and add your own photos, videos, and music to the named folders.
const HER_NAME = "My Love";
const LOVE_MESSAGE =
  "A 1 AM message, your 4 AM reply, and one long conversation led to our first date. It already felt like forever—and with you, I never have to pretend. Your laugh still makes me blush.";
const BPM = 100;
const BEAT_GAP_MS = 300;
const PHOTO_CHANGE_MS = 1500;
const CROSSFADE_MS = 420;
const PHOTO_FILES = [
  "photos/photo-01.jpg",
  "photos/photo-02.jpg",
  "photos/photo-03.jpg",
  "photos/photo-04.jpg",
  "photos/photo-05.jpg",
  "photos/photo-06.jpg",
  "photos/photo-07.jpg",
  "photos/photo-08.jpg",
  "photos/photo-09.jpg",
  "photos/photo-10.jpg",
  "photos/photo-11.jpg",
  "photos/photo-12.jpg",
  "photos/photo-13.jpg",
  "photos/photo-14.jpg",
  "photos/photo-15.jpg",
  "photos/photo-16.jpg",
  "photos/photo-17.jpg",
  "photos/photo-18.jpg",
  "photos/photo-19.jpg",
  "photos/photo-20.jpg",
  "photos/photo-21.jpg",
  "photos/photo-22.jpg",
  "photos/photo-23.jpg",
  "photos/photo-24.jpg",
  "photos/photo-25.jpg",
  "photos/photo-26.jpg",
  "photos/photo-27.jpg",
  "photos/photo-28.jpg",
  "photos/photo-29.jpg",
  "photos/photo-30.jpg",
  "photos/photo-31.jpg",
  "photos/photo-32.jpg",
  "photos/photo-33.jpg",
  "photos/photo-34.jpg",
  "photos/photo-35.jpg",
  "photos/photo-36.jpg",
  "photos/photo-37.jpg",
  "photos/photo-38.jpg",
  "photos/photo-39.jpg",
  "photos/photo-40.jpg",
  "photos/photo-41.jpg",
  "photos/photo-42.jpg",
  "photos/photo-43.jpg",
  "photos/photo-44.jpg",
  "photos/photo-45.jpg",
  "photos/photo-46.jpg",
  "photos/photo-47.jpg",
  "photos/photo-48.jpg",
  "photos/photo-49.jpg",
  "photos/photo-50.jpg",
  "photos/photo-51.jpg",
];
// Clips join photos in the animated stage; add or remove MP4 paths as needed.
const VIDEO_FILES = [
  "videos/video-01.mp4",
  "videos/video-02.mp4",
  "videos/video-03.mp4",
  "videos/video-04.mp4",
  "videos/video-05.mp4",
  "videos/video-06.mp4",
  "videos/video-07.mp4",
  "videos/video-08.mp4",
  "videos/video-09.mp4",
  "videos/video-10.mp4",
  "videos/video-11.mp4",
  "videos/video-12.mp4",
  "videos/video-13.mp4",
  "videos/video-14.mp4",
  "videos/video-15.mp4",
  "videos/video-16.mp4",
  "videos/video-17.mp4",
  "videos/video-18.mp4",
  "videos/video-19.mp4",
  "videos/video-20.mp4",
];
const PLACEHOLDER_FILES = [
  "photos/placeholder-01.svg",
  "photos/placeholder-02.svg",
  "photos/placeholder-03.svg",
  "photos/placeholder-04.svg",
  "photos/placeholder-05.svg",
  "photos/placeholder-06.svg",
  "photos/placeholder-07.svg",
  "photos/placeholder-08.svg",
  "photos/placeholder-09.svg",
  "photos/placeholder-10.svg",
  "photos/placeholder-11.svg",
  "photos/placeholder-12.svg",
  "photos/placeholder-13.svg",
  "photos/placeholder-14.svg",
  "photos/placeholder-15.svg",
  "photos/placeholder-16.svg",
  "photos/placeholder-17.svg",
  "photos/placeholder-18.svg",
  "photos/placeholder-19.svg",
  "photos/placeholder-20.svg",
  "photos/placeholder-21.svg",
  "photos/placeholder-22.svg",
  "photos/placeholder-23.svg",
  "photos/placeholder-24.svg",
];

const slotLayouts = {
  desktop: [
    [2, 0.015, 18], [74, 0.025, 17], [38, 0.075, 14], [87, 0.12, 11],
    [9, 0.16, 16], [59, 0.205, 18], [27, 0.25, 14], [77, 0.295, 15],
    [1, 0.34, 18], [63, 0.385, 15], [41, 0.43, 13], [85, 0.475, 12],
    [13, 0.52, 15], [71, 0.565, 17], [32, 0.61, 16], [3, 0.655, 18],
    [54, 0.70, 16], [83, 0.745, 14], [20, 0.79, 17], [64, 0.835, 18],
    [6, 0.88, 16], [43, 0.925, 15], [78, 0.97, 17], [29, 1.01, 15],
  ],
  mobile: [
    [1, 0.01, 38], [60, 0.035, 36], [29, 0.075, 31], [4, 0.12, 34],
    [64, 0.16, 34], [34, 0.205, 30], [2, 0.25, 37], [58, 0.295, 38],
    [25, 0.34, 33], [65, 0.385, 32], [5, 0.43, 36], [39, 0.475, 32],
    [67, 0.52, 31], [12, 0.565, 36], [48, 0.61, 39], [1, 0.655, 33],
    [60, 0.70, 36], [29, 0.745, 32], [5, 0.79, 38], [62, 0.835, 34],
    [24, 0.88, 35], [55, 0.925, 38], [2, 0.97, 37], [43, 1.01, 34],
  ],
};

const photoStage = document.querySelector("#photo-stage");
const backdrop = document.querySelector(".backdrop");
const audio = document.querySelector("#love-song");
const startMusicButton = document.querySelector("#start-music");
const muteMusicButton = document.querySelector("#mute-music");
const musicLabel = document.querySelector("#music-label");
const audioStatus = document.querySelector("#audio-status");
const audioHelpLink = document.querySelector("#audio-help-link");
const yesButton = document.querySelector("#yes-button");
const loveModal = document.querySelector("#love-modal");
const closeLoveModalButton = document.querySelector("#close-love-modal");
const loginForm = document.querySelector("#login-form");
const passwordInput = document.querySelector("#site-password");
const loginError = document.querySelector("#login-error");
const loveSite = document.querySelector("#love-site");
const SITE_PASSWORD = "haidechmylove";

document.querySelector("#her-name")?.replaceChildren(document.createTextNode(HER_NAME));
document.querySelector("#love-message")?.replaceChildren(document.createTextNode(LOVE_MESSAGE));

const slots = [];
const desktopLayout = window.matchMedia("(min-width: 761px)").matches;
const layouts = desktopLayout ? slotLayouts.desktop : slotLayouts.mobile;
const minimumPhotoCount = layouts.length;
let photoChangeInProgress = false;
let pendingPhotoChangeCount = 0;

function makeSlot(index, layout) {
  const [left, pageProgress, width] = layout;
  const slot = document.createElement("div");
  slot.className = `photo-slot${index % 4 === 1 ? " photo-slot--gold" : ""}`;
  slot.style.left = `${left}%`;
  slot.dataset.pageProgress = String(pageProgress);
  slot.style.width = `${width}vw`;
  slot.dataset.media = "";
  photoStage.append(slot);
  slots.push(slot);
}

if (photoStage) {
  layouts.forEach((layout, index) => makeSlot(index, layout));
}

function positionPhotoStage() {
  const pageHeight = Math.max(document.documentElement.scrollHeight, window.innerHeight);
  if (backdrop) backdrop.style.height = `${pageHeight}px`;
  slots.forEach((slot) => {
    slot.style.top = `${Math.round(pageHeight * Number(slot.dataset.pageProgress))}px`;
  });
}

positionPhotoStage();
window.addEventListener("resize", positionPhotoStage, { passive: true });
if ("ResizeObserver" in window) {
  new ResizeObserver(positionPhotoStage).observe(document.body);
}

function loadImage(source) {
  return new Promise((resolve) => {
    const image = new Image();
    image.onload = () => resolve(source);
    image.onerror = () => resolve(null);
    image.src = source;
  });
}

function loadVideo(source) {
  return new Promise((resolve) => {
    const video = document.createElement("video");
    video.muted = true;
    video.playsInline = true;
    video.preload = "metadata";
    video.onloadeddata = () => resolve({ source, type: "video" });
    video.onerror = () => {
      const message =
        `Background video unavailable. Check for a supported MP4 at love-site/${source}.`;
      if (audioStatus) audioStatus.textContent = message;
      console.warn(message);
      resolve(null);
    };
    video.src = source;
  });
}

const mediaPoolReady = Promise.all([
  ...PHOTO_FILES.map(async (source) => (
    await loadImage(source) ? { source, type: "image" } : null
  )),
  ...VIDEO_FILES.map(loadVideo),
]).then(async (results) => {
  const availableMedia = results.filter(Boolean);
  const availablePhotos = availableMedia.filter((media) => media.type === "image");
  if (availablePhotos.length >= minimumPhotoCount) return availableMedia;

  const placeholders = await Promise.all(PLACEHOLDER_FILES.map(loadImage));
  const availablePlaceholders = placeholders
    .filter(Boolean)
    .map((source) => ({ source, type: "image" }));
  const neededPlaceholders = minimumPhotoCount - availablePhotos.length;
  return [...availableMedia, ...availablePlaceholders.slice(0, neededPlaceholders)];
});

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[target]] = [shuffled[target], shuffled[index]];
  }
  return shuffled;
}

function makeDoodle() {
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "photo-doodle");
  svg.setAttribute("viewBox", "0 0 100 100");
  svg.setAttribute("aria-hidden", "true");

  if (Math.random() < 0.5) {
    const ellipse = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    ellipse.setAttribute("cx", "50");
    ellipse.setAttribute("cy", "50");
    ellipse.setAttribute("rx", "42");
    ellipse.setAttribute("ry", "34");
    ellipse.setAttribute("transform", "rotate(-12 50 50)");
    ellipse.setAttribute("pathLength", "1");
    svg.append(ellipse);
  } else {
    const heart = document.createElementNS("http://www.w3.org/2000/svg", "path");
    heart.setAttribute(
      "d",
      "M50 84 C42 72 16 54 18 34 C20 15 43 14 50 34 C60 13 83 18 83 38 C83 58 61 74 50 84Z",
    );
    heart.setAttribute("pathLength", "1");
    svg.append(heart);
  }
  return svg;
}

async function changePhotos(count = 1) {
  if (!photoStage) return;
  if (photoChangeInProgress) {
    pendingPhotoChangeCount = Math.max(pendingPhotoChangeCount, count);
    return;
  }

  photoChangeInProgress = true;
  try {
    const mediaPool = await mediaPoolReady;
    if (mediaPool.length === 0) {
      audioStatus.textContent = "Add photos to love-site/photos to fill the stage.";
      return;
    }

    const activeSlots = slots.filter((slot) => slot.dataset.media);
    const emptySlots = slots.filter((slot) => !slot.dataset.media);
    const slotsToFill = Math.min(count, emptySlots.length, mediaPool.length - activeSlots.length);
    const slotsToRefresh = Math.min(count - slotsToFill, activeSlots.length);
    const nearbyFirst = (items) => {
      const currentTop = window.scrollY;
      const currentBottom = currentTop + window.innerHeight * 1.6;
      const visible = items.filter((slot) => {
        const top = Number.parseFloat(slot.style.top);
        const bottom = top + slot.offsetHeight;
        return bottom >= currentTop && top <= currentBottom;
      });
      const elsewhere = items.filter((slot) => !visible.includes(slot));
      return [...shuffle(visible), ...shuffle(elsewhere)];
    };
    const selected = [
      ...nearbyFirst(emptySlots).slice(0, slotsToFill),
      ...nearbyFirst(activeSlots).slice(0, slotsToRefresh),
    ];
    if (selected.length === 0) return;
    const oldMedia = new Map(selected.map((slot) => [slot, slot.dataset.media]));

    selected.forEach((slot) => {
      slot.querySelectorAll(".photo-slot__image").forEach((image) => {
        image.classList.remove("is-visible");
        image.classList.add("is-leaving");
      });
      slot.querySelector(".photo-doodle")?.remove();
    });

    await new Promise((resolve) => window.setTimeout(resolve, CROSSFADE_MS));

    selected.forEach((slot) => {
      slot.querySelectorAll("video.photo-slot__image").forEach((video) => video.pause());
      slot.replaceChildren();
      slot.dataset.media = "";
    });

    const usedMedia = new Set(
      slots
        .filter((slot) => !selected.includes(slot))
        .map((slot) => slot.dataset.media)
        .filter(Boolean),
    );

    selected.forEach((slot) => {
      let choices = shuffle(mediaPool.filter((media) => !usedMedia.has(media.source)));
      const previousMedia = oldMedia.get(slot);
      if (choices.length > 1) {
        choices = choices.filter((media) => media.source !== previousMedia);
      }
      const media = choices[0];
      if (!media) return;

      usedMedia.add(media.source);
      slot.dataset.media = media.source;
      const mediaElement = document.createElement(media.type === "video" ? "video" : "img");
      mediaElement.className = "photo-slot__image";
      if (media.type === "video") {
        mediaElement.muted = true;
        mediaElement.loop = true;
        mediaElement.autoplay = true;
        mediaElement.playsInline = true;
        mediaElement.preload = "metadata";
        mediaElement.src = media.source;
      } else {
        mediaElement.alt = "";
        mediaElement.draggable = false;
        mediaElement.src = media.source;
      }
      slot.append(mediaElement);

      if (Math.random() < 0.25) {
        slot.append(makeDoodle());
      }
      requestAnimationFrame(() => mediaElement.classList.add("is-visible"));
      if (media.type === "video") {
        mediaElement.play().catch((error) => {
          console.warn(`Background video could not autoplay: ${error.message}`);
        });
      }
    });
  } finally {
    photoChangeInProgress = false;
    if (pendingPhotoChangeCount > 0) {
      const pendingCount = pendingPhotoChangeCount;
      pendingPhotoChangeCount = 0;
      window.setTimeout(() => changePhotos(pendingCount), 0);
    }
  }
}

let changeTimer = 0;
let analyserFrame = 0;
let audioContext;
let analyser;
let musicGain;
let frequencyData;
let bassAverage = 0;
let lastDetectedBeat = 0;
let detectorStartedAt = 0;
let detectorHasBeat = false;

function stopChangeTimer() {
  if (changeTimer) {
    window.clearInterval(changeTimer);
    changeTimer = 0;
  }
}

function startSlowPhotoTimer() {
  stopChangeTimer();
  changeTimer = window.setInterval(() => changePhotos(2), PHOTO_CHANGE_MS);
}

function startBpmFallback() {
  stopChangeTimer();
  changeTimer = window.setInterval(() => changePhotos(2 + Math.floor(Math.random() * 2)), 60000 / BPM);
}

function detectBassBeats(now) {
  if (!analyser || !frequencyData) return;
  analyser.getByteFrequencyData(frequencyData);

  const binWidth = audioContext.sampleRate / analyser.fftSize;
  const firstBin = Math.ceil(60 / binWidth);
  const lastBin = Math.floor(150 / binWidth);
  let bassEnergy = 0;
  for (let bin = firstBin; bin <= lastBin; bin += 1) {
    bassEnergy += frequencyData[bin];
  }
  bassEnergy /= Math.max(1, lastBin - firstBin + 1);

  if (now - detectorStartedAt > 1000 && bassEnergy > Math.max(18, bassAverage * 1.45)
      && now - lastDetectedBeat >= BEAT_GAP_MS) {
    lastDetectedBeat = now;
    detectorHasBeat = true;
    stopChangeTimer();
    changePhotos(2 + Math.floor(Math.random() * 2));
  }

  bassAverage = bassAverage === 0 ? bassEnergy : bassAverage * 0.92 + bassEnergy * 0.08;

  if (detectorHasBeat && now - lastDetectedBeat > 5000) {
    detectorHasBeat = false;
    startBpmFallback();
  }

  analyserFrame = window.requestAnimationFrame(detectBassBeats);
}

async function startMusic() {
  try {
    if (audio.paused) {
      await audio.play();
      if (!audioContext) {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) throw new Error("Web Audio is not supported in this browser.");
        audioContext = new AudioContextClass();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 4096;
        analyser.smoothingTimeConstant = 0.72;
        musicGain = audioContext.createGain();
        musicGain.gain.value = 1.7;
        const source = audioContext.createMediaElementSource(audio);
        source.connect(analyser);
        analyser.connect(musicGain);
        musicGain.connect(audioContext.destination);
        frequencyData = new Uint8Array(analyser.frequencyBinCount);
      }
      await audioContext.resume();
      stopChangeTimer();
      detectorStartedAt = performance.now();
      detectorHasBeat = false;
      lastDetectedBeat = 0;
      bassAverage = 0;
      if (analyserFrame) window.cancelAnimationFrame(analyserFrame);
      startBpmFallback();
      analyserFrame = window.requestAnimationFrame(detectBassBeats);
      musicLabel.textContent = "Pause music";
      audioStatus.textContent = "Listening for the beat";
    } else {
      audio.pause();
      musicLabel.textContent = "Resume music";
      audioStatus.textContent = "Photos will keep changing slowly";
      if (analyserFrame) window.cancelAnimationFrame(analyserFrame);
      analyserFrame = 0;

      changePhotos(3);
      startSlowPhotoTimer();
    }
  } catch (error) {
    audio.pause();
    musicLabel.textContent = "Tap to start";
    if (window.location.protocol === "file:") {
      audioStatus.textContent = "Local files cannot play music in this browser.";
      if (audioHelpLink) audioHelpLink.hidden = false;
    } else {
      audioStatus.textContent = "Music could not start. Photos will continue changing.";
    }
    startSlowPhotoTimer();
    console.warn("Music could not be started:", error.message);
  }
}

startMusicButton?.addEventListener("click", startMusic);
muteMusicButton?.addEventListener("click", () => {
  audio.muted = !audio.muted;
  if (musicGain && audioContext) {
    musicGain.gain.setTargetAtTime(audio.muted ? 0 : 1.7, audioContext.currentTime, 0.03);
  }
  muteMusicButton.setAttribute("aria-pressed", String(audio.muted));
  muteMusicButton.setAttribute("aria-label", audio.muted ? "Unmute music" : "Mute music");
  audioStatus.textContent = audio.muted ? "Music muted" : "Music unmuted";
});

if (window.location.protocol === "file:") {
  audioStatus.textContent = "For music, open this page through XAMPP.";
  if (audioHelpLink) audioHelpLink.hidden = false;
}

loginForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!passwordInput || !loginError || !loveSite) return;

  if (passwordInput.value !== SITE_PASSWORD) {
    loginError.textContent = "That isn't our secret. Try again, my love.";
    passwordInput.value = "";
    passwordInput.focus();
    return;
  }

  loginError.textContent = "";
  document.querySelector("#login-screen")?.setAttribute("hidden", "");
  loveSite.hidden = false;
  document.querySelector("#hero-title")?.focus();
  positionPhotoStage();
  changePhotos(3);
  startSlowPhotoTimer();
});

// Fade content in as it enters view; keep it visible on older browsers.
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.13 });

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

yesButton?.addEventListener("click", () => {
  yesButton.innerHTML = "<span>Always, together</span><span aria-hidden=\"true\">♡</span>";
  loveModal?.showModal();
});

closeLoveModalButton?.addEventListener("click", () => loveModal?.close());
