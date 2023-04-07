/**
 * Retourne un chiffre/nombre aléatoire entre deux chiffres/nombres donnés.
 * @param { number } a valeur maximum.
 * @param { number } b valeur minimum.
 * @return { number }  donne le chiffre/nombre aléatoire.
 */

function rand10(a, b) {
  return Math.floor(Math.random() * a + b);
}

/**
 * Retourne une tableau de n nombres entre 1 and 10.
 * @param {number} n le nombre de nombres à généré aléatoirement.
 * @return {number[]} un tableau de n nombres entre 1 and 10.
 */

function multiRand(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(rand10(max, min));
  }
  return arr;
}

////////////////////////////////////////////////////////
let max = 10;
let min = 1;

let n = new Number(
  prompt("entrez le nombre de chiffre à générer aléatoirement")
);

let resultat = multiRand(n);
alert(resultat);
