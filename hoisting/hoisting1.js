// hoisting

//Hoisting is JavaScript’s behavior where variable and function declarations are moved to the top of their scope 
// during the compilation phase, before code execution.

function abc () {
    console.log(a,b,c);

    var a = 10;
    let b = 20;
    const c = 30;
}

abc(); // => undefined, ReferenceError: Cannot access 'b' before initialization, ReferenceError: Cannot access 'c' before initialization


//=============================================================================================
var x = 1;

function test() {
  console.log(x);
  var x = 2;
}

test(); // => undefined

//=============================================================================================
var x = 1;
function test() {
  var x;
  console.log(x); // => undefined
  x = 2;
}

test(); // => undefined

//=============================================================================================
var x = 1;

function test() {
  console.log(x);
  x = 2;
}

test();// => 1
//=============================================================================================
console.log(a); // function a() {}

var a = 10;

function a() {}
//==============================================================================================
var x = 1;

{
  console.log(x); //ReferenceError: Cannot access 'x' before initialization
  let x = 2;
}

//==============================================================================================
function test() {
  console.log(a);

  var a = 10;

  function a() {}
}

test();// => function a() {}
//==============================================================================================
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}// => 3, 3, 3
//==============================================================================================
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}// => 0, 1, 2
//==============================================================================================
console.log(a);

setTimeout(() => {
  console.log(a);
}, 0);

var a = 10;
// => undefined, 10
//==============================================================================================
function test() {
  console.log(a);

  setTimeout(() => {
    console.log(a);
  }, 0);

  var a = 5;
}

test();// => undefined, 5
//==============================================================================================
setTimeout(() => {
  console.log(a);
}, 0);

let a = 10;
// => ReferenceError: Cannot access 'a' before initialization
//==============================================================================================
var a = 1;

function test() {
  console.log(a);

  function a() {}

  var a = 2;

  console.log(a);
}

test();// => function a() {}, 2
//==============================================================================================
console.log(a); // ? //undefined
var a = 10;

console.log(b); // ?
let b = 20; // Reference error: cannot access 'b' before initialization

foo();
function foo() {
  console.log("Hello from foo!"); // Hello from foo!
}

bar();
var bar = function() {
  console.log("Hello from bar!"); // TypeError: bar is not a function
};

//==============================================================================================
var x = 23;
(function(){
  var x = 43;
  (function random(){
    x++;
    console.log(x); // NaN (i.e undefinded + 1 = NaN)
    var x = 21
  })();
})();
//===============================================================================================

var x = 23;
(function(){
  var x = 43;
  (function random(){
    x++;
    console.log(x); // 44
    x = 21
  })();
})();

//===============================================================================================