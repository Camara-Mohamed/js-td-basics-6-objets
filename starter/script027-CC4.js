/*****************************
 * 027 - OBJETS - CODING CHALLENGE 4
 */

/*
Souvenons-nous du premier challenge de code où Mark et John comparaient leurs BMIs.
Implémentons à présent la même fonctionnalité avec des objets, des propriétés et des méthodes.
1. Pour chacun, crée un objet avec
    - les propriétés pour leur nom complet, leur poids et leur taille
    - une méthode qui calcule le BMI
        (enregistre le BMI dans l'objet et, en plus, le retourne à partir de la méthode)
2. Affiche dans la console qui a le BMI le plus élevé avec le nom complet et le BMI.
    N'oublie pas qu'il pourrait y avoir un ex æquo.

Rappel: BMI = poids / taille^2 = poids / (taille * taille). (poids en kg and taille en mètres).

BONNE CHANCE 😀
*/

const mark = {
    nomComplet: 'Mark Miller',
    poids: 78,
    taille: 1.69,
    calculeBMI: function () {
        this.bmi = this.poids / (this.taille ** 2);
        return this.bmi;
    }
};

const john = {
    nomComplet: 'John Smith',
    poids: 92,
    taille: 1.95,
    calculeBMI: function () {
        this.bmi = this.poids / (this.taille ** 2);
        return this.bmi;
    }
};

mark.calculeBMI();
john.calculeBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.nomComplet} a un BMI plus élevé (${mark.bmi.toFixed(2)}) que ${john.nomComplet} (${john.bmi.toFixed(2)})`);
} else if (john.bmi > mark.bmi) {
    console.log(`${john.nomComplet} a un BMI plus élevé (${john.bmi.toFixed(2)}) que ${mark.nomComplet} (${mark.bmi.toFixed(2)})`);
} else {
    console.log(`${mark.nomComplet} et ${john.nomComplet} ont le même BMI (${mark.bmi.toFixed(2)})`);
}