const projects = [
  {
    title: "MailMyWork – Instant Mailing & Data Transfer Service",
    image_url: "./project_images/18.png",
    text: "A fast and lightweight mailing platform designed for instant file and data transfer. Built to simplify sharing work across devices with quick uploads, secure links, and seamless email delivery.",
    tags: ["mini", "web", "utility"],
    gradient: "project-gradient-18",
    github: null,
    live: "https://mailmywork.onrender.com/"
  },

  {
    title: "eYRC CropDrop Bot – Autonomous Agriculture Robot",
    image_url: "./project_images/17.png",
    text: "A hardware robotics project built for the e-Yantra competition. The CropDrop Bot automates crop collection and precise dropping using sensors, motor control, and autonomous navigation. Designed to streamline agricultural workflows through robotics and embedded systems.",
    tags: ["major", "hardware", "robotics"],
    gradient: "project-gradient-17",
    github: null,
    live: null
  }, {
    title: "VClub – College Committee Website",
    image_url: "./project_images/16.png",
    text: "A dedicated platform built for our college’s committee to manage events, announcements, team profiles, and student engagement. Includes event listings, registrations, media gallery, and a clean committee dashboard.",
    tags: ["major", "web"],
    gradient: "project-gradient-16",
    github: null,
    live: null
  },
  {
    title: "NextChapter – Luxury Fashion E-commerce",
    image_url: "./project_images/14.png",
    text: "A premium fashion e-commerce experience showcasing luxury collections with a refined UI. Includes dynamic product pages, seamless cart flow, and elegant brand-focused visuals.",
    tags: ["major", "web", "live"],
    gradient: "project-gradient-14",
    github: null,
    live: null
  }, {
    title: "Stockly – Inventory Management System",
    image_url: "./project_images/15.png",
    text: "A streamlined inventory management platform that tracks stock levels, supplier data, low-stock alerts, and real-time product movement. Designed for small businesses to manage inventory with clarity and accuracy.",
    tags: ["major", "web"],
    gradient: "project-gradient-15",
    github: null,
    live: null
  },
  {
    title: "AMAR – Multi-Agent Research Assistant",
    image_url: "./project_images/13.png",
    text: "A multi-agent system that automates early-stage research. It discovers research papers, performs RAG-based ingestion, synthesizes insights, and offers a conversational chat-with-research interface.",
    tags: ["startup", "major", "ai"],
    gradient: "project-gradient-1",
    github: "https://github.com/yourname/amar",
    live: null
  },

  {
    title: "Grabzi – Hyperlocal 10-Minute Delivery App",
    image_url: "./project_images/12.png",
    text: "A hyperlocal instant delivery platform built as a college project to demonstrate SQL-driven inventory, order, and logistics workflows.",
    tags: ["major"],
    gradient: "project-gradient-2",
    github: null,
    live: "https://grabzi.onrender.com/"
  },

  {
    title: "RoomieConnect – Hostel & PG Finder Platform",
    image_url: "./project_images/11.png",
    text: "A subscription-based platform that simplifies finding hostels, PGs, and roommates. Users can list rooms, browse options, and access verified contacts with a streamlined UI/UX.",
    tags: ["startup", "live", "major"],
    gradient: "project-gradient-3",
    github: null,
    live: "https://roomies-vg26.onrender.com/"
  },

  {
    title: "YOLO Object Detection System",
    image_url: "./project_images/10.png",
    text: "A robust object detection pipeline built using YOLO and OpenCV. Used for experimentation and later integrated into several hardware-based automation projects.",
    tags: ["mini", "ai", "cv"],
    gradient: "project-gradient-4",
    github: null,
    live: null
  },

  {
    title: "Human Pose Estimation System",
    image_url: "./project_images/9.png",
    text: "A pose estimation module capable of detecting human posture, counting push-ups, pull-ups, and tracking movement accuracy for fitness applications.",
    tags: ["mini", "ai", "cv"],
    gradient: "project-gradient-5",
    github: null,
    live: null
  },

  {
    title: "Hand-Gesture Voice Control",
    image_url: "./project_images/8.png",
    text: "A gesture-recognition system that lets users control system volume from a distance through hand motions using computer vision techniques.",
    tags: ["mini", "cv"],
    gradient: "project-gradient-6",
    github: null,
    live: null
  },

  {
    title: "Leaflet Map System Integration",
    image_url: "./project_images/7.png",
    text: "Developed an interactive map using Leaflet.js to display room locations, nearby facilities, and navigation routes. Later integrated into RoomieConnect.",
    tags: ["mini", "maps"],
    gradient: "project-gradient-7",
    github: null,
    live: null
  },

  {
    title: "Lyra – Personal AI Assistant",
    image_url: "./project_images/6.png",
    text: "A custom AI assistant built using Python and Mistral LLM with OpenAI refinements. Capable of camera-based recognition, module detection, hardware guidance, and conversational explanations for academic tasks.",
    tags: ["major", "ai"],
    gradient: "project-gradient-8",
    github: null,
    live: null
  },

  {
    title: "Mood Analysis Engine",
    image_url: "./project_images/5.png",
    text: "A sentiment-analysis powered mood detection system that analyzes user text and voice. Planned for integration into recommendation engines and mental-health oriented ML features.",
    tags: ["mini", "ai", "nlp"],
    gradient: "project-gradient-9",
    github: null,
    live: null
  },

  {
    title: "Student Expense Tracker",
    image_url: "./project_images/4.png",
    text: "A hackathon-built expense management tool designed for students. Tracks spending, categorizes transactions, and provides budgeting insights.",
    tags: ["mini", "web"],
    gradient: "project-gradient-10",
    github: null,
    live: null
  },

  {
    title: "Educationora – Learning Resource Platform",
    image_url: "./project_images/3.png",
    text: "A collaborative platform enabling students to share notes, guides, textbooks, and chat during exam periods. Helped many students access study material easily.",
    tags: ["major", "web"],
    gradient: "project-gradient-11",
    github: null,
    live: "https://sites.google.com/view/educationora/dashboard"
  },

  {
    title: "X-O Game",
    image_url: "./project_images/2.png",
    text: "A simple tic-tac-toe game built for practicing fundamental programming and UI logic concepts.",
    tags: ["mini"],
    gradient: "project-gradient-12",
    github: null,
    live: null
  },

  {
    title: "Brick Breaker Game",
    image_url: "./project_images/1.png",
    text: "A classic brick-breaker arcade game built to strengthen programming concepts, collision detection, and game loop logic.",
    tags: ["mini"],
    gradient: "project-gradient-13",
    github: null,
    live: null
  }
];





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
  '#000000ff',
  '#640ab9ff',
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


function renderProjects(projectList) {
  const container = document.querySelector(".projects-grid");
  container.innerHTML = ""; // clear old cards if any

  projectList.forEach(project => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.setAttribute("data-tags", project.tags.join(" "));

    card.innerHTML = `
      <div class="project-media ${project.gradient}">
          <img src=${project.image_url}>
      </div>
      <div class="project-body">
          <div class="project-meta">
              ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
          </div>

          <h3 class="project-title">${project.title}</h3>

          <p class="project-text">${project.text}</p>

          <div class="project-links">
              <a href="${project.github}" target="_blank" aria-label="GitHub">
                  <svg viewBox="0 0 24 24" class="icon-github">
                      <path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5..."></path>
                  </svg>
              </a>

              ${project.live ? `<a href="${project.live}" target="_blank" class="project-live-link">Live ↗</a>` : ""}
          </div>
      </div>
    `;

    container.appendChild(card);
  });
}
renderProjects(projects);









gsap.registerPlugin(ScrollTrigger);

// Fade-up + scale cards
function fadeUpCards(selector, trigger) {
  gsap.fromTo(
    selector,
    {
      opacity: 0,
      y: 30,
      scale: 0.96
    },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: trigger || selector,
        start: "top 85%",
        end: "bottom 60%",
        toggleActions: "play reverse play reverse"
      }
    }
  );
}

fadeUpCards(".skill-card", ".skills-grid");
fadeUpCards(".project-card", ".projects-grid");
fadeUpCards(".testimonial-card", ".testimonials-track");

// Side fade-in sections (no extra fade-out tween)
const leftSections = [".about", ".testimonials"];
const rightSections = [".skills", ".projects", ".tech-stack", ".contact-footer"];

leftSections.forEach((sel) => {
  gsap.fromTo(
    sel,
    { opacity: 0 },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sel,
        start: "top 85%",
        end: "bottom 70%",
        toggleActions: "play reverse play reverse"
      }
    }
  );
});

rightSections.forEach((sel) => {
  gsap.fromTo(
    sel,
    { opacity: 0 },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sel,
        start: "top 85%",
        end: "bottom 70%",
        toggleActions: "play reverse play reverse"
      }
    }
  );
});
















