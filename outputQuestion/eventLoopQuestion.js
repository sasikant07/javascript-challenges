console.log("First");
setTimeout(() => console.log("Second"), 0);
Promise.resolve(() => console.log("Third")).then(res => res);
console.log("Fourth");

// Output
// First
// Fourth
// Third
// Second


//================
console.log("1");


setTimeout(() => {
 console.log("2")
}, 1000)

setTimeout(() => {
  console.log("3")
}, 0)

console.log("4");
console.log("5")

// output:
// 1
// 4
// 5
// 3
// 2

//=========================