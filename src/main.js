// const { default: Lenis } = require("lenis");
import Lenis from "lenis";
import AOS from "aos";
import { Navigation } from "swiper/modules";
import Swiper from "swiper";
import "swiper/css";

AOS.init({
  once: true,
});

const navbar = document.getElementById("navbar");
const navContent = document.getElementById("nav-content");
navbar.style.position = "fixed";
navbar.style.top = 0;

// Initialize Lenis
const lenis = new Lenis({
  autoRaf: true,
});

// Listen for the scroll event and log the event data
lenis.on("scroll", (e) => {
  console.log(e);
});

function createScrollDirectionTracker() {
  let scrollDirection = "up";
  let lastScrollY = 0;

  function handleScroll() {
    const currentScrollY = Lenis.scroll || window.pageYOffset; // Using Lenis scroll

    if (currentScrollY > lastScrollY) {
      scrollDirection = "down";
    } else {
      scrollDirection = "up";
    }

    lastScrollY = currentScrollY;
    // console.log(scrollDirection);
    // Hide navbar on scroll down
    if (scrollDirection === "down") {
      navbar.style.top = "-10rem";
      navbar.style.transition = "all 0.5s ease";
    } else {
      if (currentScrollY > 0) {
        navbar.style.top = "0";
      } else {
        navbar.style.top = `${0}px`;
        navbar.style.transition = "all 0.5s ease";
      }
    }

    // Box shadow and fixed position on scroll
    if (currentScrollY > 0) {
      navContent.style.boxShadow = "0 0 20px 0 #2B245D21";
      navContent.style.position = "fixed";
    } else {
      navContent.style.boxShadow = "none";
    }
  }

  // Listen to scroll events
  window.addEventListener("scroll", handleScroll);

  return {
    getScrollDirection: () => scrollDirection,
    cleanup: () => {
      window.removeEventListener("scroll", handleScroll);
    },
  };
}

createScrollDirectionTracker();

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const menu = document.querySelector("#menu ul");

  menuToggle.addEventListener("click", () => {
    // Toggle the 'open' class on the menu for transitions
    menu.classList.toggle("open");
  });
});

// Select elements
const playIcon = document.getElementById("playIcon");
const videoModal = document.getElementById("videoModal");
const closeModal = document.getElementById("closeModal");
const videoFrame = document.getElementById("videoFrame");

// YouTube Video URL
const videoURL =
  "https://www.youtube.com/embed/5QhZPCg8ocQ?si=4PIEcs6NSFZDNU9h";

// Show modal on play icon click
playIcon.addEventListener("click", () => {
  videoFrame.src = videoURL; // Set the video source
  videoModal.classList.remove("hidden");
  videoModal.classList.add("flex");
});

// Close modal on close button click
closeModal.addEventListener("click", () => {
  videoFrame.src = ""; // Stop the video
  videoModal.classList.add("hidden");
  videoModal.classList.remove("flex");
});

// Close modal on background click
videoModal.addEventListener("click", (event) => {
  if (event.target === videoModal) {
    videoFrame.src = ""; // Stop the video
    videoModal.classList.add("hidden");
    videoModal.classList.remove("flex");
  }
});

document.querySelectorAll("#accordion button").forEach((button) => {
  button.addEventListener("click", () => toggleAccordion(button));
});

// Function to toggle accordion
function toggleAccordion(button) {
  const content = button.nextElementSibling; // Get the content div
  const icon = button.querySelector(".icon"); // Get the icon element

  // Close all other accordions and reset icons
  document.querySelectorAll(".accordion-content").forEach((item) => {
    const otherIcon = item.previousElementSibling.querySelector(".icon");
    if (otherIcon) {
      otherIcon.classList.remove("-rotate-180", "bg-primary", "text-white");
      otherIcon.classList.add("-rotate-90");
    }
    item.classList.add("h-0", "py-0");
    item.classList.remove("py-4");
  });

  // Toggle the current accordion
  if (content.classList.contains("h-0")) {
    content.classList.remove("h-0", "py-0");
    content.classList.add("py-4");
    icon.classList.remove("-rotate-90");
    icon.classList.add("-rotate-180", "bg-primary", "text-white");
  } else {
    content.classList.add("h-0", "py-0");
    content.classList.remove("py-4");
    icon.classList.remove("-rotate-180", "bg-primary", "text-white");
    icon.classList.add("-rotate-90");
  }
}

// Attach click events to all accordion buttons
document
  .querySelectorAll("#accordion button")
  .forEach((item) =>
    item.addEventListener("click", () => toggleAccordion(item)),
  );

// Initialize the first accordion item as open
function initializeFirstAccordion() {
  const firstButton = document.querySelector("#accordion button");
  const firstContent = firstButton.nextElementSibling;
  const firstIcon = firstButton.querySelector(".icon");

  if (firstContent) {
    firstContent.classList.remove("h-0", "py-0");
    firstContent.classList.add("py-4");
  }

  if (firstIcon) {
    firstIcon.classList.remove("-rotate-90");
    firstIcon.classList.add("-rotate-180", "bg-primary", "text-white");
  }
}

// Run the initialization function
initializeFirstAccordion();

// document.addEventListener("DOMContentLoaded", () => {
const swiper = new Swiper(".swiper", {
  modules: [Navigation],
  navigation: {
    nextEl: "#testimonial-next",
    prevEl: "#testimonial-prev",
  },
  loop: true,
});

// Debugging buttons
console.log("Next button:", document.querySelector(".swiper-button-next"));
console.log("Previous button:", document.querySelector(".swiper-button-prev"));
// });

document.getElementById("year").innerText = new Date().getFullYear();

// Select all anchor tags within the navigation menu
document.querySelectorAll("#menu a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // Prevent the default action of the link
    e.preventDefault();

    // Get the target section's ID from the href attribute
    const targetId = this.getAttribute("href").slice(1); // Remove the # symbol
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Select all anchor tags within the navigation menu
document.querySelectorAll("#menu a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // Prevent the default action of the link
    e.preventDefault();

    // Get the target section's ID from the href attribute
    const targetId = this.getAttribute("href").slice(1); // Remove the # symbol
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Close the menu
      if (window.innerWidth < 1024) {
        const menu = document.querySelector("#menu ul");
        menu.classList.remove("open");
      }

      // Scroll to the target section smoothly
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

document
  .getElementById("download-button")
  .addEventListener("click", () =>
    window.open(
      "https://www.stgeorges.nhs.uk/wp-content/uploads/2013/11/Pregnancy_Book_comp.pdf",
    ),
  );
