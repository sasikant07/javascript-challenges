let a = {
    name: "test"
}

let b = {...a}

b.name = "test2";

console.log(a.name);    // => test
console.log(b.name);    // => test2

console.log("=====================================================")

let obj = {
    name: "test",
    add: {
        code: 1
    }
}

let objCopy = {...obj};
objCopy.add.code = 2;

console.log(obj.add.code);  // => 2
console.log(objCopy.add.code);  // => 2

//=========================================================================================
let orig = { a: 1, b: { c: 1 } }
let copy = { ...orig }

copy.a = 2;
copy.b.c = 2;

console.log(orig); // ? { a: 1, b: { c: 2 } }
console.log(copy); // ? { a: 2, b: { c: 2 } }

let deepCopy = structuredClone(orig);

deepCopy.a = 3;
deepCopy.b.c = 3;

console.log(orig); // output: { a: 1, b: { c: 2 } }
console.log(deepCopy); // output: { a: 3, b: { c: 3 } }