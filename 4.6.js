function factorial(a) {
  if (a < 0) return -1;
  else if (a == 0) return 1;
  else {
    return a * factorial(a - 1);
  }
}

let numb = new Number(prompt("entrez un chiffre supérieur à 1"));

alert(factorial(numb));
