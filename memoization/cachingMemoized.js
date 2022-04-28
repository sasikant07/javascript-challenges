function myMemoize(fn, context) {
    const res = {};

    return function (...args) {
        var argsCache = JSON.stringify(args);
        if (!res[argsCache]) {
            res[argsCache] = fn.call(context || this, ...args);
        }
        return res[argsCache];
    }
}

const clumpsyProduct = (num1, num2) => {
    for( let i = 0 ; i < 10000000; i++) {};

    return num1 * num2;
}

const memoizedClumzyProduct = myMemoize(clumpsyProduct);

// first time it will take more time to calaculate and stored in the cache memory
console.time("Fist Call");
console.log(memoizedClumzyProduct(9467, 7649));
console.timeEnd("Fist Call");

// second time it will remember the result from the cache memory and will take very less time
console.time("Second Call");
console.log(memoizedClumzyProduct(9467, 7649));
console.timeEnd("Second Call");