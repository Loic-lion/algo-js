let arr = [1, 2, 3, 4];
let emptyarr = [];

for (i = 0; i < arr.length; i++) {
  emptyarr[i] = arr[i];
}

alert(emptyarr);
///////////////////BONUS//////////

for (let i of arr) {
  emptyarr.push(i);
}

alert(emptyarr);

///////////////////////

emptyarr.push(...arr);
alert(emptyarr);
