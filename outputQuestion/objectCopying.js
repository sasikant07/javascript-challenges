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