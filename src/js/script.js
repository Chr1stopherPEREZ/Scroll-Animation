/* ROTATING */

const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

// Événement pour le bouton <Open>
open.addEventListener("click", () => {
  container.classList.add("show-navbar"); // Ajoute la classe "show-navbar" à l'élément container pour afficher le menu
});

// Événement pour le bouton <Close>
close.addEventListener("click", () => {
  container.classList.remove("show-navbar"); // Supprime la classe "show-navbar" de l'élément container pour masquer le menu
});

/* SEARCH */

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

// Événement pour le bouton de <Recherche>
btn.addEventListener("click", () => {
  search.classList.toggle("active"); // Ajoute ou supprime la classe "active" pour afficher ou masquer le champ de recherche
  input.focus();
});

/* LOADING */

let load = 0;
document.body.style.pointerEvents = "none"; // Désactive les interactions au chargement de la page

const loadingInterval = setInterval(() => {
  load++;
  document.querySelector(".loading-text").innerText = `${load}%`; // Met à jour le pourcentage affiché
  document.querySelector(".loading-text").style.opacity = 1 - load / 100; // Ajuste l'opacité
  document.getElementById("loading-overlay").style.filter = `blur(${
    30 - load * 0.3
  }px)`; // Réduit le flou

  if (load > 99) {
    clearInterval(loadingInterval);
    document.body.style.pointerEvents = "auto"; // Réactive les interactions une fois le chargement terminé
    document.getElementById("loading-overlay").classList.add("hidden"); // Cache l'overlay une fois le chargement terminé
    document.querySelector(".loading-text").classList.add("hidden"); // Cache le texte une fois le chargement terminé
  }
}, 30);

/* SCROLL ANIMATION */

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

// Vérifie la position des boîtes au chargement
checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    // Ajoute <show> si la boîte est visible, sinon la supprime
    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

/* Script.js */
