let min = prompt("enter min number");
let max = prompt("enter max number");
let current = prompt("enter current number");
if (current > min && current < max) {
  alert(current + " is between " + min + " and " + max);
}
if (min > max) {
  alert("sorry but you dont understand anything");
  close();
}
