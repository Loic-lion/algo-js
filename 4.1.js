/**
 * Calcule une surface sur base d'une longeur et d'une largeur d'un rectangle.
 * @param { Number } a largeur de la surface à calculer.
 * @param { Number } b longeur de la surface à calculer.
 * @return { Number }  la surface du rectangle.
 */

function calcSurface(a, b) {
  return a * b;
}
let largeur = new Number(prompt("insérez la largeur du rectangle"));
let longueur = new Number(prompt("insérez la longueur du rectangle"));
alert("Surface du rectangle: " + calcSurface(largeur, longueur));
