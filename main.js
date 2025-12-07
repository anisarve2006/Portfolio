/**
 * Set a random CSS --primary-color from `colors` (and persist in localStorage).
 * @param {string[]} colors - array of CSS color strings (hex, rgb, hsl, named).
 * @returns {string} the color applied.
 */
function setRandomPrimary(colors) {
  if (!Array.isArray(colors) || colors.length === 0) throw new Error('Provide a non-empty colors array');
  const color = colors[Math.floor(Math.random() * colors.length)];
  document.documentElement.style.setProperty('--primary-color', color);
  return color;
}

const COLORS = [
  '#ef4444',
  '#8b5cf6', '#14b8a6', '#f97316'
];

document.addEventListener('DOMContentLoaded', () => {
  setRandomPrimary(COLORS);
});

function startColorRotation(colors, intervalMs = 5000) {
  let id = setInterval(() => setRandomPrimary(colors), Math.max(1000, intervalMs));
  return {
    stop: () => clearInterval(id),
    restart: (newIntervalMs = intervalMs) => {
      clearInterval(id);
      id = setInterval(() => setRandomPrimary(colors), Math.max(1000, newIntervalMs));
    }
  };
}

// const rot = startColorRotation(COLORS, 8000);



// Marque
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".marquee-track");
  const viewport = document.querySelector(".marquee-viewport");

  if (track && viewport) {
    // duplicate content for seamless loop
    const originalItems = Array.from(track.children);
    originalItems.forEach(item => {
      const clone = item.cloneNode(true);
      track.appendChild(clone);
    });

    let offset = 0;
    const speed = 0.6; // px per frame

    function animate() {
      offset -= speed;
      const resetWidth = track.scrollWidth / 2;
      if (Math.abs(offset) >= resetWidth) offset = 0;
      track.style.transform = `translateX(${offset}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  }
});




// About
document.addEventListener("DOMContentLoaded", () => {
  const aboutCards = document.querySelectorAll(".about-item");

  aboutCards.forEach(card => {
    card.addEventListener("mousemove", e => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      card.style.setProperty("--mx", `${x}%`);
      card.style.setProperty("--my", `${y}%`);
    });

    card.addEventListener("mouseleave", () => {
      card.style.setProperty("--mx", "50%");
      card.style.setProperty("--my", "50%");
    });
  });
});





// testimonals
document.addEventListener("DOMContentLoaded", () => {
  // ...your existing code above

  const track = document.querySelector(".testimonials-track");
  const viewport = document.querySelector(".testimonials-viewport");
  const prevBtn = document.querySelector(".testimonials-arrow.prev");
  const nextBtn = document.querySelector(".testimonials-arrow.next");

  if (track && viewport) {
    let cards = Array.from(track.children);

    // duplicate cards to make loop seamless
    cards.forEach(card => {
      const clone = card.cloneNode(true);
      track.appendChild(clone);
    });

    let offset = 0;
    const speed = 0.3; // px per frame, increase for faster
    let isPaused = false;

    function loop() {
      if (!isPaused) {
        offset -= speed;
        const totalWidth = track.scrollWidth / 2; // width of original set
        if (Math.abs(offset) >= totalWidth) {
          offset = 0;
        }
        track.style.transform = `translateX(${offset}px)`;
      }
      requestAnimationFrame(loop);
    }

    // pause on hover
    viewport.addEventListener("mouseenter", () => (isPaused = true));
    viewport.addEventListener("mouseleave", () => (isPaused = false));

    // optional manual nudge left/right
    prevBtn &&
      prevBtn.addEventListener("click", () => {
        offset += 120;
      });
    nextBtn &&
      nextBtn.addEventListener("click", () => {
        offset -= 120;
      });

    loop();
  }
});





// Projects
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll(".project-filter");
  const cards = document.querySelectorAll(".project-card");

  if (!filterButtons.length || !cards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filter = btn.dataset.filter;

      // active state
      filterButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      cards.forEach(card => {
        const tags = card.dataset.tags.split(" ");
        if (filter === "all" || tags.includes(filter)) {
          card.hidden = false;
        } else {
          card.hidden = true;
        }
      });
    });
  });
});
