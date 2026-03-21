const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector("#nav-menu");

if (navToggle && navMenu) {
  const navLinks = Array.from(navMenu.querySelectorAll("a"));
  const mobileNav = window.matchMedia("(max-width: 767px)");

  const closeMenu = ({ restoreFocus = false } = {}) => {
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
    navToggle.setAttribute("aria-expanded", "false");
    navToggle.setAttribute("aria-label", "Open menu");

    if (restoreFocus) {
      navToggle.focus();
    }
  };

  navToggle.addEventListener("click", () => {
    if (!mobileNav.matches) {
      return;
    }

    const isActive = navMenu.classList.toggle("active");
    navToggle.classList.toggle("active", isActive);
    navToggle.setAttribute("aria-expanded", String(isActive));
    navToggle.setAttribute("aria-label", isActive ? "Close menu" : "Open menu");

    if (isActive && navLinks.length > 0) {
      navLinks[0].focus();
    }
  });

  navMenu.addEventListener("click", event => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && navMenu.classList.contains("active") && mobileNav.matches) {
      closeMenu({ restoreFocus: true });
      return;
    }

    if (event.key === "Tab" && navMenu.classList.contains("active") && navLinks.length > 0 && mobileNav.matches) {
      const first = navLinks[0];
      const last = navLinks[navLinks.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  const handleViewportChange = event => {
    if (!event.matches) {
      closeMenu();
    }
  };

  if (typeof mobileNav.addEventListener === "function") {
    mobileNav.addEventListener("change", handleViewportChange);
  } else if (typeof mobileNav.addListener === "function") {
    mobileNav.addListener(handleViewportChange);
  }
}

document.querySelectorAll(".contact-form").forEach(form => {
  const status = form.querySelector(".form-status");
  const honeypot = form.querySelector('input[name="_gotcha"]');

  form.addEventListener("submit", event => {
    if (honeypot instanceof HTMLInputElement && honeypot.value.trim() !== "") {
      event.preventDefault();

      if (status) {
        status.textContent = "We could not submit your message. Please email security@defenseacademy.eu if the problem continues.";
        status.dataset.state = "error";
      }

      return;
    }

    if (!form.checkValidity()) {
      event.preventDefault();

      if (status) {
        status.textContent = "Check the highlighted fields and try again.";
        status.dataset.state = "error";
      }

      form.reportValidity();
      return;
    }

    if (status) {
      status.textContent = "";
      delete status.dataset.state;
    }
  });
});
