// Polyfill for Array.flat()

const arr = [1, 2, 3, [4, 5, 6], [7, 8, 9, [10, 11, 12]]];

// depth

function customFlat(arr, depth) {
    arr.forEach((item) => {
        if (depth !== 0 && Array.isArray(item)) {
            customFlat(item, depth - 1);
        } else {
            output.push(item);
        }
    });
}

let output = [];
let depth = 1;
customFlat(arr, depth);
console.log(output);    // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 10, 11, 12 ] ]
