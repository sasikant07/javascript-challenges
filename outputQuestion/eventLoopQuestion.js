console.log("First");
setTimeout(() => console.log("Second"), 0);
Promise.resolve(() => console.log("Third")).then(res => res);
console.log("Fourth");

// Output
// First
// Fourth
// Third
// Second