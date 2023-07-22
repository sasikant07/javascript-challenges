async function test () {
    for (let i = 0; i < 2; i++) {
        console.log("Before await for ", i);
        let result = await Promise.resolve(i);
        console.log("After await. Value is ", result);
    }
}

test().then(_ => console.log("After test() resolved"));

console.log("After calling test");

// Before await for  0
// After calling test
// After await. Value is  0
// Before await for  1
// After await. Value is  1
// After test() resolved