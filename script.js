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
document.addEventListener("DOMContentLoaded", function () {
  const accordionButtons = document.querySelectorAll(".accordion-btn");

  accordionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Toggle active class on the parent .accordion-item
      const accordionItem = btn.parentElement;
      const content = accordionItem.querySelector(".accordion-content");
      const icon = btn.querySelector(".icon");

      // If it's already open, close it
      if (accordionItem.classList.contains("active")) {
        accordionItem.classList.remove("active");
        content.style.maxHeight = 0;
        icon.style.transform = "rotate(0deg)";
      } else {
        // Close any other open accordion
        document.querySelectorAll(".accordion-item.active").forEach((openItem) => {
          openItem.classList.remove("active");
          openItem.querySelector(".accordion-content").style.maxHeight = 0;
          openItem.querySelector(".icon").style.transform = "rotate(0deg)";
        });

        // Open this one
        accordionItem.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
        icon.style.transform = "rotate(180deg)";
      }
    });
  });
});
