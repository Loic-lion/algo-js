/**
 * Calcule un chiffre/nombre aléatoire entre deux chiffres/nombres donnés.
 * @param { Number } a valeur maximum.
 * @param { Number } b valeur minimum.
 * @return { Number }  donne le chiffre/nombre aléatoire.
 */

function rand10(a, b) {
  return Math.floor(Math.random() * a + b);
}
let max = 10;
let min = 1;
alert("voici un chiffre random entre 1 et 10: " + rand10(max, min));

