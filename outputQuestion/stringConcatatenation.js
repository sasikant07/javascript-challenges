/* Q1. */

var abc = 4 + "3" + 2 + 6;
console.log(abc);   // 4326

var def = 4 + 3 + "2" + 6
console.log(def); // 726

var ghi = 4 + 3 + 2 + "6";
console.log(ghi);   // 96


console.log("=================================================================================")

console.log(4 - "2");       // => 2
console.log("2" - 4);       // => -2
console.log("2" + 4);       // => 24
console.log(7 + "2" - 2);   // => 70
console.log("5" - "2");     // => 3
console.log("5" - "2" + 3);     // => 6
console.log("5" - "2" + "1");   // => 31
console.log("7" - "2" + "-1");  // => 5 -1
console.log("7" + "2" + "-1");  // => 72 -1
console.log("7" + "2" - "-1");  // => 73
console.log("7" + "2" - "1");  // => 71
console.log(2 + "2"); // 22
console.log(3 + +"3"); // 6