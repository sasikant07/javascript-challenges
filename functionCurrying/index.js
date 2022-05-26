let sum = function(a) {
    return function(b) {
        if (b) {
            return sum(a + b);
        }
        return a;
    }
}

let surry = a => b => b ? curry(a + b): a;

console.log(sum(1)(2)(3)(4));

function add(a, b, c) {
    return a + b + c;
}

function currySum(f) {
    return function(a) {
        return function(b) {
            return function(c) {
                return f (a,b,c);
            }
        }
    }
}

let sumCurry = currySum(add);
let result = sumCurry(1)(2)(3);     // => 6

console.log(result);