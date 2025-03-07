import Formulaire from "./formulaire.js";

// Création du formulaire
const formulaire = new Formulaire("formulaire");

formulaire.maskChamp("company");

// addEventListener pour changer le comportement en fonction du radio coché
formulaire.getElement("part").addEventListener("change", ()=>{formulaire.hideChamp("company")});
formulaire.getElement("prof").addEventListener("change", ()=>{formulaire.showChamp("company")});

// addEventListener pour récupérer les données du formulaire
formulaire.formulaireHtml.addEventListener("submit",
  (event) => {
    event.preventDefault();
    formulaire.affAnswers();
  }
)
