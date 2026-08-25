/* =========================================
   BRIDGE AI
   JAVASCRIPT
========================================= */


/* =========================================
   MOBILE NAVIGATION
========================================= */

const mobileButton = document.querySelector(".mobile-menu-button");
const navLinks = document.querySelector(".nav-links");

if (mobileButton && navLinks) {

  mobileButton.addEventListener("click", () => {

    navLinks.classList.toggle("mobile-open");

    if (navLinks.classList.contains("mobile-open")) {
      mobileButton.textContent = "✕";
    } else {
      mobileButton.textContent = "☰";
    }

  });

}


/* =========================================
   CLOSE MOBILE MENU WHEN LINK IS CLICKED
========================================= */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

  link.addEventListener("click", () => {

    navLinks.classList.remove("mobile-open");

    if (mobileButton) {
      mobileButton.textContent = "☰";
    }

  });

});


/* =========================================
   SMOOTH SCROLL
========================================= */

document.querySelectorAll('a[href^="#"]').forEach((link) => {

  link.addEventListener("click", function (event) {

    const targetId = this.getAttribute("href");

    if (!targetId || targetId === "#") {
      return;
    }

    const target = document.querySelector(targetId);

    if (!target) {
      return;
    }

    event.preventDefault();

    const navbarHeight = 76;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth"
    });

  });

});


/* =========================================
   NAVBAR SCROLL EFFECT
========================================= */

const navbar = document.querySelector(".navbar");

function updateNavbar() {

  if (!navbar) {
    return;
  }

  if (window.scrollY > 30) {

    navbar.style.boxShadow =
      "0 8px 30px rgba(16, 35, 63, 0.08)";

  } else {

    navbar.style.boxShadow = "none";

  }

}

window.addEventListener("scroll", updateNavbar);

updateNavbar();


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */

const revealElements = document.querySelectorAll(
  ".problem-card, .step-card, .access-feature, .impact-dashboard, .mission-statement"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const revealObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        observer.unobserve(entry.target);

      }

    });

  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});


/* =========================================
   HERO MOCKUP INTERACTION
========================================= */

const mockButton = document.querySelector(".mock-button");

if (mockButton) {

  mockButton.addEventListener("click", () => {

    const originalText = mockButton.innerHTML;

    mockButton.innerHTML = "✓ Match found!";

    mockButton.style.background = "#28a66a";

    setTimeout(() => {

      mockButton.innerHTML = originalText;
      mockButton.style.background = "";

    }, 2200);

  });

}


/* =========================================
   IMPACT DASHBOARD ANIMATION
========================================= */

const progressBars = document.querySelectorAll(".progress-bar span");

const progressObserver = new IntersectionObserver(
  (entries, observer) => {

    entries.forEach((entry) => {

      if (entry.isIntersecting) {

        const bar = entry.target;
        const targetWidth = bar.style.width;

        bar.style.width = "0%";

        requestAnimationFrame(() => {

          setTimeout(() => {
            bar.style.transition = "width 1.2s ease";
            bar.style.width = targetWidth;
          }, 150);

        });

        observer.unobserve(bar);

      }

    });

  },
  {
    threshold: 0.5
  }
);

progressBars.forEach((bar) => {
  progressObserver.observe(bar);
});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections = document.querySelectorAll("main section[id]");
const navItems = document.querySelectorAll(".nav-links a");

function updateActiveNav() {

  let currentSection = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 130;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }

  });

  navItems.forEach((item) => {

    const href = item.getAttribute("href");

    item.classList.remove("active");

    if (href === `#${currentSection}`) {
      item.classList.add("active");
    }

  });

}

window.addEventListener("scroll", updateActiveNav);


/* =========================================
   CONSOLE MESSAGE
========================================= */

console.log(
  "%cBridge AI",
  "font-size: 24px; font-weight: bold; color: #246BFE;"
);

console.log(
  "Education without barriers."
);
