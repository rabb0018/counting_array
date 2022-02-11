"use strict";

const array = [];
let i;


initLoop();

function initLoop() {
  i = 0;
  loop();
}

function loop() {
  console.log(array);
  let result = array.unshift(i);
  if (result === 10) {
    result = array.pop();
  }
  i++;
  setTimeout(loop, 1000);
}

// Teachers solutuion:

// "use strict";
// // set the iterator
// let i = 0;
// // create the array
// let arr = [];
// // init the loop
// initLoop();
// function initLoop() {
//   loop();
// }
// function loop() {
//   // iterate
//   i++;
//   // add the iterator to the beginning of the array
//   arr.unshift(i);
//   // fix the length of the array to 9 by slicing it, and set the original arry to the slice
//   arr = arr.slice(0, 9);
//   // console log
//   console.log(arr);
//   // recursive
//   setTimeout(loop, 1000);
// }