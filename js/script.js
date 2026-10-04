/* =========================================================
   PARIS-AFRICANA INTERNATIONAL SCHOOL — SITE SCRIPT
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ---- Mobile nav toggle ---- */
  var toggle = document.querySelector(".nav-toggle");
  var links = document.querySelector(".nav-links");
  var navbar = document.querySelector(".navbar");

  if (toggle && links) {
    var setMenuState = function (open) {
      links.classList.toggle("open", open);
      links.setAttribute("aria-hidden", String(window.innerWidth <= 720 && !open));
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close navigation menu" : "Open navigation menu");
      document.body.classList.toggle("menu-open", open);
    };

    setMenuState(false);

    toggle.addEventListener("click", function () {
      setMenuState(!links.classList.contains("open"));
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setMenuState(false);
      });
    });

    document.addEventListener("click", function (event) {
      if (links.classList.contains("open") &&
          navbar &&
          !navbar.contains(event.target)) {
        setMenuState(false);
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && links.classList.contains("open")) {
        setMenuState(false);
        toggle.focus();
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 720 && links.classList.contains("open")) {
        setMenuState(false);
      } else {
        links.setAttribute("aria-hidden", String(window.innerWidth <= 720 && !links.classList.contains("open")));
      }
    });
  }

  /* ---- Highlight the current page in the nav ----
     Works both on normal hosting and GitHub Pages repository URLs. */
  var path = window.location.pathname;
  var currentPage = path.endsWith("/") ? "index.html" : path.split("/").pop();
  if (!currentPage || currentPage === "") currentPage = "index.html";

  document.querySelectorAll(".nav-links a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href && href.split("/").pop() === currentPage && !link.classList.contains("btn")) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  /* ---- Footer year ---- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  /* ---- Contact form ----
     No backend is connected yet. Instead of falsely reporting a
     successful server submission, prepare a mailto draft for the
     school's published email address. */
  var contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      var successBox = document.getElementById("form-success");
      var nameEl = document.getElementById("name");
      var emailEl = document.getElementById("email");
      var phoneEl = document.getElementById("phone");
      var subjectEl = document.getElementById("subject");
      var messageEl = document.getElementById("message");

      if (!nameEl || !emailEl || !messageEl) return;

      var name = nameEl.value.trim();
      var email = emailEl.value.trim();
      var phone = phoneEl ? phoneEl.value.trim() : "";
      var subject = subjectEl ? subjectEl.value.trim() : "General Inquiry";
      var message = messageEl.value.trim();

      if (!name || !email || !message) {
        alert("Please fill in your name, email, and message before continuing.");
        return;
      }

      if (!emailEl.checkValidity()) {
        emailEl.reportValidity();
        return;
      }

      var body = [
        "Name: " + name,
        "Email: " + email,
        phone ? "Phone: " + phone : "",
        "",
        message
      ].filter(Boolean).join("\n");

      var mailto = "mailto:parisafrica.edu.ng@yahoo.com"
        + "?subject=" + encodeURIComponent(subject)
        + "&body=" + encodeURIComponent(body);

      window.location.href = mailto;

      if (successBox) {
        successBox.style.display = "block";
        successBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });
  }

});
