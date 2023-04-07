/**
 * Permet de calculer la distance entre 2 points via leur coordonnées X et Y.
 * @param { number } x1 valeur X du premier point.
 * @param { number } y1 valeur Y du premier point.
 * @param { number } x2 valeur X du second point.
 * @param { number } y2 valeur Y du second point.
 * @return { number }  donne la distance entre les 2 points.
 */

function calcDistance(x1, y1, x2, y2) {
  return Math.hypot(x2 - x1, y2 - y1);
}

let cx1 = new Number(prompt("entrez les coordonnées X du premier point"));
let cy1 = new Number(prompt("entrez les coordonnées Y du premier point"));
let cx2 = new Number(prompt("entrez les coordonnées X du deuxième point"));
let cy2 = new Number(prompt("entrez les coordonnées Y du deuxième point"));

alert(calcDistance(cx1, cy1, cx2, cy2));
