// ===============================
// ENGAGEMENT INVITATION SETTINGS
// ===============================

// Change this to the real engagement date/time.
// Format: YYYY-MM-DDTHH:MM:SS
const EVENT_DATE = "2026-09-18T19:00:00";

// Optional: add your Google Maps link here.
const MAP_URL = "https://maps.app.goo.gl/ndDRdejCdWqgdTgTA?g_st=iw";

// Optional: drop an audio file in assets/ and put its path here.
// Leave as null to keep the music button as a silent decoration.
const MUSIC_FILE = "audio.mp3"; // e.g. "assets/music.mp3"

const REDUCED_MOTION = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");

  // ---------------------------------------------------------
  // Cinematic opening sequence
  // ---------------------------------------------------------
  const openButton = document.getElementById("openInvitation");
  let opened = false;

  const openCurtains = () => {
    if (opened) return;
    opened = true;
    document.body.classList.add("open");
  };

  // The curtains open ONLY when the button is clicked (or immediately
  // if the visitor has reduced-motion set, since there's no point
  // showing a "cinematic" trigger they've asked not to see).
  if (REDUCED_MOTION) {
    openCurtains();
  } else if (openButton) {
    openButton.addEventListener("click", openCurtains);
  }

  setTimeout(() => loader.classList.add("hide"), REDUCED_MOTION ? 200 : 1900);

  // ---------------------------------------------------------
  // Map buttons
  // ---------------------------------------------------------
  ["mapLink", "mapLink2"].forEach(id => {
    const link = document.getElementById(id);
    if (!link) return;
    link.href = MAP_URL;
    link.target = "_blank";
    link.rel = "noopener";
  });

  // ---------------------------------------------------------
  // Scroll reveal — staggered so groups arrive in sequence
  // ---------------------------------------------------------
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry, i) => {
        if (!entry.isIntersecting) return;
        entry.target.style.transitionDelay = `${Math.min(i, 4) * 110}ms`;
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
  );

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // ---------------------------------------------------------
  // Hanging bulb garland — bulbs are positioned along the SVG
  // swag curve so they hang naturally instead of sitting in a row.
  // ---------------------------------------------------------
  const NS = "http://www.w3.org/2000/svg";

  document.querySelectorAll(".garland-row").forEach(svg => {
    const swag = svg.querySelector(".swag");
    const group = svg.querySelector(".bulbs");
    if (!swag || !group) return;

    const length = swag.getTotalLength();
    const count = 9;

    for (let i = 1; i <= count; i++) {
      const point = swag.getPointAtLength((length * i) / (count + 1));

      const wire = document.createElementNS(NS, "line");
      wire.setAttribute("x1", point.x);
      wire.setAttribute("y1", point.y);
      wire.setAttribute("x2", point.x);
      wire.setAttribute("y2", point.y + 9);
      wire.setAttribute("stroke", "currentColor");
      wire.setAttribute("stroke-width", ".8");

      const cap = document.createElementNS(NS, "rect");
      cap.setAttribute("class", "bulb-cap");
      cap.setAttribute("x", point.x - 2.4);
      cap.setAttribute("y", point.y + 8);
      cap.setAttribute("width", 4.8);
      cap.setAttribute("height", 4);
      cap.setAttribute("rx", 1);

      const glass = document.createElementNS(NS, "circle");
      glass.setAttribute("class", "bulb-glass");
      glass.setAttribute("cx", point.x);
      glass.setAttribute("cy", point.y + 17);
      glass.setAttribute("r", 6);

      const shine = document.createElementNS(NS, "circle");
      shine.setAttribute("class", "bulb-shine");
      shine.setAttribute("cx", point.x - 2);
      shine.setAttribute("cy", point.y + 15);
      shine.setAttribute("r", 1.8);

      group.append(wire, cap, glass, shine);
    }
  });

  // ---------------------------------------------------------
  // Countdown
  // ---------------------------------------------------------
  const countdownTimer = setInterval(updateCountdown, 1000);
  updateCountdown();

  function updateCountdown() {
    const target = new Date(EVENT_DATE).getTime();
    const difference = target - Date.now();

    if (difference <= 0) {
      clearInterval(countdownTimer);
      setCountdown(0, 0, 0, 0);
      return;
    }

    setCountdown(
      Math.floor(difference / 86400000),
      Math.floor((difference / 3600000) % 24),
      Math.floor((difference / 60000) % 60),
      Math.floor((difference / 1000) % 60)
    );
  }

  function setCountdown(days, hours, minutes, seconds) {
    const pad = value => String(value).padStart(2, "0");
    document.getElementById("days").textContent = pad(days);
    document.getElementById("hours").textContent = pad(hours);
    document.getElementById("minutes").textContent = pad(minutes);
    document.getElementById("seconds").textContent = pad(seconds);
  }

  // ---------------------------------------------------------
  // Music
  // Autoplay stays off — the visitor starts it. If MUSIC_FILE is
  // null the button just toggles its icon, exactly as before.
  // ---------------------------------------------------------
const musicBtn = document.getElementById("musicBtn");
let audio = null;

if (MUSIC_FILE) {
    audio = new Audio(MUSIC_FILE);
    audio.loop = true;
    audio.volume = 0.35;

    // Try to autoplay when the webpage opens
    audio.play()
        .then(() => {
            setPressed(true);
        })
        .catch(() => {
            // Browser blocked autoplay.
            // Start music on the first user interaction.
            const startMusic = () => {
                audio.play()
                    .then(() => {
                        setPressed(true);
                    })
                    .catch(() => {});

                document.removeEventListener("click", startMusic);
                document.removeEventListener("touchstart", startMusic);
            };

            document.addEventListener("click", startMusic, { once: true });
            document.addEventListener("touchstart", startMusic, { once: true });
        });
}

musicBtn.addEventListener("click", () => {
    if (!audio) return;

    const playing = musicBtn.getAttribute("aria-pressed") === "true";
    const next = !playing;

    if (next) {
        audio.play().catch(() => setPressed(false));
    } else {
        audio.pause();
    }

    setPressed(next);
});

function setPressed(state) {
    musicBtn.setAttribute("aria-pressed", String(state));
    musicBtn.setAttribute(
        "aria-label",
        state ? "Pause music" : "Play music"
    );
  }
});
