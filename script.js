const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuToggle?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("quoteForm");
const success = document.getElementById("formSuccess");

form?.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const subject = `Demande de devis - ${data.get("nom")}`;
  const body = [
    `Nom : ${data.get("nom")}`,
    `Téléphone : ${data.get("telephone")}`,
    `E-mail : ${data.get("email")}`,
    `Type de projet : ${data.get("projet")}`,
    "",
    "Message :",
    data.get("message")
  ].join("\n");

  // Adresse volontairement laissée sous forme éditable :
  // remplacez EMAIL_ICI par l'adresse e-mail professionnelle exacte.
  const email = "EMAIL_ICI";
  if (email !== "EMAIL_ICI") {
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return;
  }

  success.textContent = "Formulaire prêt : ajoutez l’adresse e-mail professionnelle exacte dans script.js pour activer l’envoi par messagerie.";
});
