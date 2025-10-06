export default class Formulaire {
  // Définition du constructeur
  constructor(id){
    this.id = id;
    this.formulaireHtml = document.getElementById(this.id);
    this.formdata = new FormData(this.formulaireHtml);
    this.answers = new Array();
  }

  // Methode pour récupérer le div parent
  getDiv(id) {
    return document.getElementById(id).parentNode;
  }

  // Methode pour récupérer un élément
  getElement(id) {
    return document.getElementById(id);
  }

  // Methode permettant de masquer un élément sans animation
  maskChamp(id) {
    this.getDiv(id).classList.add("masque");
    this.getElement(id).required = false;
  }

  // Methode permettant d'afficher le champ
  showChamp(id) {
    this.getDiv(id).classList.remove("disp");
    this.getDiv(id).classList.add("app");
    this.getElement(id).required = true;
  }

  // Methode permettant de masquer le champ avec animation
  hideChamp(id) {
    this.getDiv(id).classList.remove("app");
    this.getDiv(id).classList.add("disp");
    this.getElement(id).required = false;
  }

  // Méthode pour nettoyer les données saisies
  cleanHTML(unsafe){
    return unsafe 
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

  // Méthode pour récupérer les éléments de chaque input (et les ajouter à answer)
  getAnswers() {
    this.formdata = new FormData(this.formulaireHtml);
    this.formdata.forEach(
      (value, key) => {
        if(value != "" && value !="on"){
          this.answers.push([key, this.cleanHTML(value)]);
        }
      }
    )
    return this.answers;
  }

  // Méthode pour afficher les données envoyées dans une alerte
  affAnswers(){
    let chaine = "Récapitulatif\n\n";
    for(let ligne of this.getAnswers()){
      chaine += `${ligne [0]} : ${ligne [1]}\n`;
    }
    alert(chaine);
  }

}