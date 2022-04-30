let arr = [
    [1, 2],
    [3, 4],
    [5, 6, [7, 8], 9],
    [10, 11, 12]
];

// 1 level of flattened array
let flattened = [].concat(...arr);
console.log(flattened); // [ 1, 2, 3, 4, 5, 6, [ 7, 8 ], 9, 10, 11, 12 ]

// Array.flat method
console.log(arr.flat(2)); // 2 --> is the depth because the array have another array inside to it.
// Output  ---> [1, 2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12]


// custom array flat function
function customFlat(arr, depth = 1){
    let result = [];

    arr.forEach(ar => {
        if (Array.isArray(ar) && depth > 0) {
            result.push(...customFlat(ar, depth - 1));
        } else {
            result.push(ar)
        }
    });

    return result;
}

console.log(customFlat(arr, 2));    // Output  ---> [1, 2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12]
console.log(customFlat(arr));   // [ 1, 2, 3, 4, 5, 6, [ 7, 8 ], 9, 10, 11, 12 ]