/*
OBJETS - PRÉPA 1 : Création d'un personnage
Aurora est représentée par un objet aurora ayant quatre propriétés : nom, sante, force et xp (expérience).
Elles ont chacune une valeur et, ensemble, définissent l'état de notre personnage à un instant donné.
Aurora s'apprête à vivre une longue série d'aventures, dont certaines pourront modifier ses caractéristiques.
1. Crée un objet nommé aurora contenant les propriétés nom, sante, force et xp
   avec les valeurs "Aurora", 150, 25 et 0
2. Ajoute à cet objet une méthode decrire()
   qui retourne "… a … points de vie, … en force et … points d'expérience"
   en complétant les … par les valeurs d'aurora
3. Utilise cette méthode pour afficher la description d'aurora
4. Affiche dans la console "Aurora apprend une nouvelle compétence"
5. Ajoute 15 points d'expérience à aurora
6. Réaffiche la description d'aurora
7. Affiche dans la console "Aurora est blessée par une flèche"
8. Retire 20 points de santé à aurora
9. Affiche "Aurora trouve un bracelet de force"
10. Ajoute 10 points de force à Aurora
11. Réaffiche la description d'aurora
*/

const aurora = {
    nom: "Aurora",
    sante: 150,
    force: 25,
    xp: 0,
    decrire() {
        return `${this.nom} a ${this.sante} points de vie, ${this.force} en force et ${this.xp} points d'expérience.`;
    }
}

console.log(aurora.decrire());

console.log(`Aurora apprend une nouvelle compétence !`);

aurora.xp = aurora.xp + 15;
console.log(aurora.decrire());

console.log(`Aurora est blessée par une flèche !`);
aurora.sante -= 20;

console.log(`Aurora trouve un bracelet de force !`);
aurora.force += 10;

console.log(aurora.decrire());


