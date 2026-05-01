// TEWA Education Consultancy - Main JavaScript
let index = 0;
const slider = document.getElementById("slider");
const totalSlides = slider.children.length;

function moveSlide(step) {
    index += step;

    if (index < 0) index = 0;
    if (index > totalSlides - 1) index = totalSlides - 1;

    slider.style.transform = "translateX(" + (-index * 320) + "px)";
}

/* Auto Slide */
let auto = setInterval(() => {
    index++;
    if (index > totalSlides - 3) index = 0;
    slider.style.transform = "translateX(" + (-index * 320) + "px)";
}, 3000);

/* Pause on Hover */
const container = document.getElementById("sliderContainer");

container.addEventListener("mouseenter", () => {
    clearInterval(auto);
});

container.addEventListener("mouseleave", () => {
    auto = setInterval(() => {
        index++;
        if (index > totalSlides - 3) index = 0;
        slider.style.transform = "translateX(" + (-index * 320) + "px)";
    }, 3000);
});
// ==========================================
// Intake Selection Functions
// ==========================================

function selectIntake(type) {
  scrollToForm(type);
}

function scrollToForm(type) {
  document.getElementById("apply").scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    selectFormIntake(type);
  }, 500);
}

function selectFormIntake(type) {
  const aprilOption = document.getElementById("aprilOption");
  const octoberOption = document.getElementById("octoberOption");
  const hiddenInput = document.getElementById("selectedIntake");

  if (type === "april") {
    aprilOption.classList.add("selected");
    aprilOption.classList.remove("october-option");
    octoberOption.classList.remove("selected");
    hiddenInput.value = "April 2026";
  } else {
    octoberOption.classList.add("selected");
    aprilOption.classList.remove("selected");
    hiddenInput.value = "October 2026";
  }
}

// ==========================================
// Form Submission Handler
// ==========================================

async function handleSubmit(e) {
  e.preventDefault();

  const btn = document.getElementById("submitBtn");
  const status = document.getElementById("formStatus");
  const form = e.target;

  btn.classList.add("loading");
  btn.disabled = true;
  status.style.display = "none";

  const formData = new FormData(form);
  const data = {
    timestamp: new Date().toISOString(),
    fullName: formData.get("fullName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    age: formData.get("age"),
    intake: formData.get("intake"),
    interest: formData.get("interest"),
    education: formData.get("education"),
    message: formData.get("message"),
    source: "TEWA Website",
    status: "New Lead",
  };

  try {
    // Google Apps Script Integration
    // IMPORTANT: Replace with your actual Google Apps Script URL
    const GOOGLE_SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbxKXlvKka663EcgpGKLaC4SvVcIqqwJoBot1_xb7A6qi3ioV_tREYTLjElICOrysLcj/exec";

    // Simulate API call (remove this when connecting to real endpoint)
    // await new Promise(resolve => setTimeout(resolve, 1500));

    // Uncomment below to send data to Google Sheets
    /*
        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        */
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "no-cors",
      body: JSON.stringify(data),
    });

    status.innerHTML = `
            <strong>✅ Application Submitted!</strong><br>
            Thank you ${data.fullName} for applying for ${data.intake}.<br>
            Our team will contact you within 24 hours.
        `;
    status.className = "form-status success";
    status.style.display = "block";

    form.reset();
    selectFormIntake("april");
  } catch (error) {
    status.innerHTML = `
            <strong>❌ Error submitting form.</strong><br>
            Please call us directly at +977-9767474000
        `;
    status.className = "form-status error";
    status.style.display = "block";
  } finally {
    btn.classList.remove("loading");
    btn.disabled = false;
  }
}

// ==========================================
// Mobile Menu Toggle
// ==========================================

function toggleMobileMenu() {
  const navLinks = document.querySelector(".nav-links");
  const navContact = document.querySelector(".nav-contact-info");
  const isOpen = navLinks.style.display === "flex";

  if (isOpen) {
    navLinks.style.display = "none";
    navContact.style.display = "none";
  } else {
    navContact.style.display = "flex";
    navContact.style.flexDirection = "column";
    navContact.style.position = "absolute";
    navContact.style.top = "100%";
    navContact.style.left = "0";
    navContact.style.right = "0";
    navContact.style.background = "white";
    navContact.style.padding = "20px";
    navContact.style.boxShadow = "0 10px 30px rgba(0,0,0,0.1)";
    navContact.style.gap = "15px";

    navLinks.style.display = "flex";
    navLinks.style.flexDirection = "column";
    navLinks.style.width = "100%";
  }
}

// ==========================================
// Smooth Scroll for Navigation Links
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// ==========================================
// Navbar Scroll Effect
// ==========================================

window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  if (window.scrollY > 100) {
    nav.style.boxShadow = "0 4px 30px rgba(0,0,0,0.15)";
  } else {
    nav.style.boxShadow = "0 2px 20px rgba(0,0,0,0.08)";
  }
});

// ==========================================
// Intersection Observer for Animations
// ==========================================

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 },
);

// Observe elements for scroll animations
document
  .querySelectorAll(
    ".service-card, .testimonial-card, .feature-box, .intake-card-large",
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.6s ease";
    observer.observe(el);
  });

// ==========================================
// Page Load Initialization
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  console.log("TEWA Education Consultancy Website Loaded Successfully");

  // Initialize default intake selection
  selectFormIntake("april");
});



