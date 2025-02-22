document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    hamburger.addEventListener("click", function () {
        navLinks.classList.toggle("active"); // Toggle menu visibility
        hamburger.classList.toggle("active"); // Toggle 'X' icon
    });
});

// Select all elements you want to animate
const hiddenElements = document.querySelectorAll(".hidden");

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // If element is in viewport, add "show" class
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      // Optional: Stop observing once shown
      observer.unobserve(entry.target);
    }
  });
}, {
  // Optional options
  root: null,          // viewport
  threshold: 0.1,      // how much of the element is visible to trigger
});

// Attach the observer to each .hidden element
hiddenElements.forEach((el) => observer.observe(el));
