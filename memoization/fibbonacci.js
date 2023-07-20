function fibbonaciNumber (n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }
    return fibbonaciNumber(n - 1) + fibbonaciNumber(n - 2);
}

// memmoized 
function fibbMemo (n, memo = {0: 0, 1: 1}) {
    if (n in memo) {
        return memo[n];
    }

    const result = fibbMemo(n - 1, memo) + fibbMemo(n - 2, memo);
    memo[n] = result;
    return result;
}

console.log(fibbonaciNumber(10));   // 55
console.log(fibbMemo(50));  //12586269025

// The idea of memoization is to dtore the result of previous value
// ====================================================================================================

// SImple solution
function fib(n, prevValue = []) {
    let result;

    if (prevValue[n] != null) {
        return prevValue[n];
    }

    // This also works as above
    // if (n in prevValue) {
    //     return prevValue[n];
    // }

    if (n <= 2) {
        result = 1;
    } else {
        result = fib(n - 1, prevValue) + fib(n - 2, prevValue);
    }

    prevValue[n] = result;      // every time we call, it will store the previous value
    return result;
}

console.log(fib(50));   // 12586269025