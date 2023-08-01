(function () {
    var a = b = 123;
})();

console.log(typeof a === 'undefined');  // => false
console.log(typeof b === 'undefined');  // => false


console.log("****************************************************************")

function a () {
    if (true) {
        var b = 123;
    }
    console.log(b); // => 123   for let it will be undefind
}

a();

function c () {
    if (false) {
        var b = 123;
    }

    console.log(b); // => undefined
}

c();


console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
// function d () {
//     if (true) {
//         let b = 123;
//     }
//     console.log(b); // => ReferenceError: b is not defined
// }

// d();

console.log("+++++++++++++++++++++++++++++++++++++++++++++++++");
var a = b = 10;

a = 20;

console.log(a); // => 20
console.log(b); // => 10

console.log("##################################################")

console.log(null == undefined);     // true
console.log(null === undefined);    // false


console.log(NaN / 2);         // NaN
console.log(NaN / 'a');         // NaN
console.log('two' / 2);         // NaN
console.log(NaN == NaN);    // false
console.log(NaN == 1);      // false
console.log(NaN != 1);      // true
console.log(NaN != NaN);    // true


console.log("===================================================");

let result = (10, 10 + 20);
console.log(result);        // 30

console.log("===================================================");

