/* =========================================================
   PARIS-AFRICANA INTERNATIONAL SCHOOL — SITE SCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");

  if (toggle && links) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("open");
    });

    /* close menu when a link is tapped (mobile) */
    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        links.classList.remove("open");
      });
    });
  }

  /* ---- Highlight the current page in the nav ---- */
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === currentPage) {
      link.classList.add("active");
    }
  });

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---- Contact form (front-end only for now) ----
     There is no backend yet, so this just validates the
     fields and shows a success message. Once the Node/Express
     backend is added, replace the code inside the submit
     handler with a fetch() POST request to your API. */
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var successBox = document.getElementById("form-success");
      var name = document.getElementById("name").value.trim();
      var email = document.getElementById("email").value.trim();
      var message = document.getElementById("message").value.trim();

      if (!name || !email || !message) {
        alert("Please fill in your name, email, and message before sending.");
        return;
      }

      /* --- Placeholder behavior until the backend exists ---
         When the backend is ready, swap this block for:

         fetch("/api/contact", {
           method: "POST",
           headers: { "Content-Type": "application/json" },
           body: JSON.stringify({ name, email, message })
         })
         .then(res => res.json())
         .then(() => { contactForm.reset(); successBox.style.display = "block"; })
         .catch(() => alert("Something went wrong. Please try again."));
      */
      contactForm.reset();
      if (successBox) {
        successBox.style.display = "block";
        successBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }

});
