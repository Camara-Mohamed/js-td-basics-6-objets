/*****************************
 * 030 - OBJETS + BOUCLES + TESTS + FONCTIONS - CODING CHALLENGE 5
 */

/*
Vous vous souvenez du challenge du calculateur de pourboire ?
Créons une version plus avancée en utilisant tout ce que nous avons appris !

Cette fois, John et sa famille sont allés dans 5 restaurants différents.
Les factures ont été de $124, $48, $268, $180 et $42.
John aime laisser un pourboire de 20% quand la facture est inférieure à $50,
15% quand la facture est entre $50 et $200, et 10% si la facture est plus de $200.

Implémente un calculateur de pourboire en utilisant les objets et les boucles.
1. Crée un objet avec un tableau pour les montants des factures
2. Ajoute une méthode pour calculer le pourboire
3. Cette méthode devrait inclure une boucle pour itérer à travers toutes les factures payées
    et faire le calcul du pourboire
4. En sortie, crée
    1°) un nouveau tableau qui contient toutes les factures
    2°) un tableau qui contient les montants finaux payés (facture + pourboire).
AIDE : Commence avec deux tableaux vides en tant que propriétés
        et remplis-les dans la boucle

BONUS (EXTRA) APRÈS AVOIR FINI :

La famille de Mark est aussi partie en vacances, et est allée dans 4 restaurants différents.
Les factures ont été de $77, $375, $110, et $45.
Mark aime laisser un pourboire de 20% quand la facture est moins de $100,
10% pour une facture entre $100 et $300, et 25% pour une facture de plus de $300
(différent de John).

5. Implémente les mêmes fonctionnalités qu'avant, cette fois avec les règles de pourboire de Mark.
6. Crée une fonction (pas une méthode) pour calculer la moyenne d'un tableau de pourboires donné.
INDICE : Boucle sur le tableau et, à chaque itération, stocke la somme courante dans une variable
(en commençant à 0). Une fois que tu as la somme du tableau, divise-la par le nombre d'éléments
du tableau (c'est comme cela qu'on calcule une moyenne).
7. Calcule le pourboire moyen pour chaque famille
8. Affiche qui a payé le pourboire le plus élevé en moyenne.

BONNE CHANCE 😀
*/

const john = {
    factures: [124, 48, 268, 180, 42],
    pourboires: [],
    montantsFinaux: [],
    calculerPourboires: function () {
        for (let i = 0; i < this.factures.length; i++) {
            let pourboire;
            const montant = this.factures[i];
            if (montant < 50) pourboire = montant * 0.2;
            else if (montant >= 50 && montant <= 200) pourboire = montant * 0.15;
            else pourboire = montant * 0.1;
            this.pourboires.push(pourboire);
            this.montantsFinaux.push(montant + pourboire);
        }
    }
};

john.calculerPourboires();
console.log("Pourboires de John : ", john.pourboires);
console.log("Montants finaux de John : ", john.montantsFinaux);

const mark = {
    factures: [77, 375, 110, 45],
    pourboires: [],
    montantsFinaux: [],
    calculerPourboires: function () {
        for (let i = 0; i < this.factures.length; i++) {
            let pourboire;
            const montant = this.factures[i];
            if (montant < 100) pourboire = montant * 0.2;
            else if (montant >= 100 && montant <= 300) pourboire = montant * 0.1;
            else pourboire = montant * 0.25;
            this.pourboires.push(pourboire);
            this.montantsFinaux.push(montant + pourboire);
        }
    }
};

mark.calculerPourboires();
console.log("Pourboires de Mark : ", mark.pourboires);
console.log("Montants finaux de Mark : ", mark.montantsFinaux);

function calculerMoyennePourboires(pourboires) {
    let somme = 0;
    for (let i = 0; i < pourboires.length; i++) somme += pourboires[i];
    return somme / pourboires.length;
}

const moyennePourboireJohn = calculerMoyennePourboires(john.pourboires);
const moyennePourboireMark = calculerMoyennePourboires(mark.pourboires);

console.log("Moyenne des pourboires de John : ", moyennePourboireJohn);
console.log("Moyenne des pourboires de Mark : ", moyennePourboireMark);

if (moyennePourboireJohn > moyennePourboireMark) {
    console.log(`John a payé le pourboire moyen le plus élevé (${moyennePourboireJohn.toFixed(2)})`);
} else if (moyennePourboireMark > moyennePourboireJohn) {
    console.log(`Mark a payé le pourboire moyen le plus élevé (${moyennePourboireMark.toFixed(2)})`);
} else {
    console.log("Les deux familles ont payé le même pourboire moyen.");
}
