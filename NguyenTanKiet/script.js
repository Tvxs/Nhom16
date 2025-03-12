// Scroll reveal animation
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("active");
    }
  }
}

// Add reveal class to all section content
document.addEventListener("DOMContentLoaded", function () {
  const sections = [
    "about",
    "skills",
    "experience",
    "projects",
    "education",
    "contact",
  ];

  sections.forEach((section) => {
    const elements =
      document.querySelectorAll(`#${section} .section-header, #${section} .about-content, 
        #${section} .skills-category, #${section} .timeline-item, #${section} .project-card, 
        #${section} .education-card, #${section} .contact-info, #${section} .contact-form`);

    elements.forEach((el, index) => {
      el.classList.add("reveal");
      el.style.transitionDelay = `${index * 0.1}s`;
    });
  });

  // Initialize on page load
  setTimeout(revealOnScroll, 100);
});

// Sticky navigation on scroll
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.style.padding = "10px 0";
    navbar.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)";
  } else {
    navbar.style.padding = "15px 0";
    navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
  }
});

// Mobile navigation toggle
document.querySelector(".hamburger").addEventListener("click", function () {
  document.querySelector(".nav-links").classList.toggle("active");
  this.classList.toggle("active");
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });

    // Close mobile menu after clicking a link
    document.querySelector(".nav-links").classList.remove("active");
    document.querySelector(".hamburger").classList.remove("active");
  });
});

// Form submission handler with validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Simple form validation
  let isValid = true;
  const inputs = this.querySelectorAll("input, textarea");

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      isValid = false;
      input.classList.add("error");
    } else {
      input.classList.remove("error");
    }
  });

  // Email validation
  const emailInput = document.getElementById("email");
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(emailInput.value)) {
    isValid = false;
    emailInput.classList.add("error");
  }

  if (isValid) {
    // In a real application, you would send the form data to a server here
    alert("Thank you for your message! I will get back to you soon.");
    this.reset();
  } else {
    alert("Please fill out all fields correctly.");
  }
});

// Add active state to current section in navigation
window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").substring(1) === current) {
      link.classList.add("active");
    }
  });
});
