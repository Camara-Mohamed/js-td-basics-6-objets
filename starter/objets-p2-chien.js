/*
OBJETS - PRÉPA 2 : Modélisation d'un chien
Écris un programme qui :
1. Crée un objet chien contenant
   - les propriétés nom ("Tobby"), race ("Border Collie") et couleur ("bleu merle tricolore") ;
   - la méthode grogner() qui retourne "Grrr ! Grrr !"
     et la méthode aboyer() qui retourne "Wah ! Wah !"
2. Affiche dans la console le message "… est un … de couleur …"
3. Affiche dans la console le message "Tiens, un chat ! … aboie : …"
   (où … est le nom du chien et … utilise la méthode aboyer du chien pour le faire aboyer)
*/

const chien = {
    nom: "Tobby",
    race: "Border Collie",
    couleur: "bleu merle tricolore",

    grogner() {
        return "Grrr ! Grrr !";
    },

    aboyer() {
        return "Wah ! Wah !";
    }
};

console.log(`${chien.nom} est un ${chien.race} de couleur ${chien.couleur}`);

console.log(`Tiens, un chat ! ${chien.nom} aboie : ${chien.aboyer()}`);