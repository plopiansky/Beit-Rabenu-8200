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

// Sends the form to FormSubmit (https://formsubmit.co). Without JS the form posts normally to the same endpoint.
const form = document.getElementById("contact-form");
const msg = document.getElementById("form-msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = form.querySelector("button");
  btn.disabled = true;
  msg.style.color = "";
  msg.textContent = "שולח...";
  try {
    const res = await fetch("https://formsubmit.co/ajax/xowomu", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    });
    const data = await res.json();
    if (!res.ok || data.success === "false" || data.success === false) throw new Error(data.message);
    msg.textContent = "תודה! קיבלנו את הפנייה ונחזור אליכם בהקדם.";
    form.reset();
  } catch (err) {
    msg.style.color = "#c0392b";
    msg.textContent = "אירעה שגיאה בשליחה. נסו שוב או פנו אלינו ישירות.";
  } finally {
    btn.disabled = false;
  }
});
