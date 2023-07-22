// Memoization is a process of storing result of previous value

const previousValue = [];

const square = (n) => {
    if (previousValue[n] != null) {
        return previousValue[n];
    }
    let result = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            result += 1;
        }
    }

    previousValue[n] = result;
    return result;
}

console.log(square(30000)); // 900000000
console.log(square(30000)); // 900000000
console.log(square(30000)); // 900000000
console.log(square(30000)); // 900000000
console.log(square(30000)); // 900000000


// Memoization is atechnique used in programming to optimize the execution time of functions by caching their result. 
// It involves stpring the results of expensive function calls and reusing those results when the same inputs 
// occurs again.