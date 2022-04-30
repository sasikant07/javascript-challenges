function addFive(a) {
    return a + 5;
}

function subtractTwo(b) {
    return b - 2;
}

function multiplyFour(c) {
    return c * 4;
}

const compose = (...functions) => {
    return args => {
        return functions.reduceRight((arg, fn) => fn(arg), args);   // <--- right to left
    };
}

const evaluate = compose(addFive, subtractTwo, multiplyFour);

console.log(evaluate(5));   // 23   --> 5 * 4 = 20, 20 - 2 = 18, 18 + 5 = 23


// implement with the pipe as well i.e not reduceRight method