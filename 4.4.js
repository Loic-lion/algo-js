let arr = [
  "Abel",
  "Alexendra",
  "Anthony",
  "Benjamin",
  "Bruno",
  "Delphine",
  "Emilien",
  "Ethan",
  "Ismael",
  "Jodie",
  "Julien",
  "Louka",
  "Loïc",
  "Luciano",
  "Marine",
  "Nikko",
  "Noa",
  "Steve",
  "Sylvain",
  "Willy",
];

function pickLearner(inputAr, n) {
  let randomar = [];
  for (let i = 0; i < n; i++) {
    let randomlearner = inputAr[Math.floor(Math.random() * inputAr.length)];
    randomar.push(randomlearner);
  }
  return randomar;
}
alert(pickLearner(arr, 4));
