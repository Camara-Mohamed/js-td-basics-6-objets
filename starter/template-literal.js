/*
LE TEMPLATE LITÉRAL 
Une méthode plus simple que la concaténation de chaînes pour l'affichage d'une chaîne
*/

/*
Le langage JavaScript permet d'inclure des expressions dans une chaîne de caractères
lorsque cette chaîne est délimitée par une paire d'accents graves seuls ou backticks ( `...` ).
Une telle chaîne est appelée un modèle de libellé ou template literal.
A l'intérieur, les expressions sont indiquées par la syntaxe ${expression}.
*/
/*
On utilise souvent cette possibilité pour créer des chaînes intégrant des valeurs de variables.
*/

const country = "France";
console.log(`Je vis en ${country}`); // "Je vis en France"
console.log('Je vis en ' + country); // solution équivalente avec des concaténations

const x = 3;
const y = 7;
console.log(`${x} + ${y} = ${x + y}`); // "3 + 7 = 10"
