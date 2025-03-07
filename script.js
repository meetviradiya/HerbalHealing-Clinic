document.addEventListener("DOMContentLoaded", () => {

    //  1. Hamburger Menu

  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", () => {
      // Toggle .active on both hamburger icon and navLinks
      hamburger.classList.toggle("active");
      navLinks.classList.toggle("active");
    });
  }


    //  2. Intersection Observer for .hidden Elements

  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); // Stop observing once shown
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
    }
  );

  hiddenElements.forEach((el) => observer.observe(el));

    //  3. Accordion

  const accordionButtons = document.querySelectorAll(".accordion-btn");

  accordionButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
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


    //  4. Collapse Nav on Link Click

  const navLinksItems = document.querySelectorAll('#navLinks li a');
  navLinksItems.forEach(link => {
    link.addEventListener('click', () => {
      // Collapse the mobile menu after clicking a nav link
      navLinks.classList.remove('active');
      hamburger.classList.remove('active');
    });
  });
});
