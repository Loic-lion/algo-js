function askTvSerie() {
  let name = prompt("Quelle est ta série préférée?");
  let year = prompt("En quelle année a-t-elle été produite?");
  let cast = [];
  let acteurs = "";
  while (acteurs !== "fin") {
    actor = prompt("Entrez le nom d'un membre du cating (ou écrivez le mot 'fin'):");
    if (acteurs !== "fin") {
      cast.push(acteurs);
    }
  }
  let tvSerie = {
    name: name,
    year: year,
    cast: cast
  };
  return tvSerie;
}

let tvSerie = askTvSerie();
let tvSerieJson = JSON.stringify(tvSerie, null, 4);
alert(tvSerieJson);
