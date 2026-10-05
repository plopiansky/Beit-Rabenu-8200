const toggle = document.querySelector(".menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    menu.classList.remove("open");
    toggle.setAttribute("aria-expanded", false);
  }
});

document.getElementById("year").textContent = new Date().getFullYear();

// Placeholder handler: replace with a real backend / form service (e.g. Formspree) when ready.
document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("form-msg").textContent = "תודה! קיבלנו את הפנייה ונחזור אליכם בהקדם.";
  e.target.reset();
});
