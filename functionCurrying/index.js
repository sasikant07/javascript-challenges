// Currying is a functional programming technique that transforms a function with multiple arguments
//  into a sequence of functions that each take a single argument. It allows you to create new functions
//  by partially applying arguments to an existing function. This can be useful for creating more flexible
//  and reusable code.

let sum = function(a) {
    return function(b) {
        if (b) {
            return sum(a + b);
        }
        return a;
    }
}

console.log(sum(1)(2)(3)(4)); // => 10

//===================================================================================================

// Another example of currying function
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

//===================================================================================================

// Another way to write curry function
let currying = a => b => b ? currying(a + b): a;
console.log(currying(1)(2)(3)(4)); // => 10

//===================================================================================================

// Another example of currying function
function sumParam(a, b) {
    if (a && b) {
        return a + b;
    } else {
        return function(b) {
            if (b) {
                return sumParam(a, b);
            } else {
                return a;
            }
        }
    }
}

console.log(sumParam(1)(2)); // => 3  
console.log(sumParam(1, 2));    // => 3

//===================================================================================================

// Example of Infinite currying
function infiniteCurrying(a) {
    return function(b) {
        if (b) {
            return infiniteCurrying(a + b);
        }
        return a;
    }
}

console.log(infiniteCurrying(1)(2)(3)(4)()); // => 10

// Currying is a functional programming technique where a function with multiple arguments is transformed 
// into a sequence of functions that each take a single argument. 
// It allows you to create new functions by partially applying arguments to an existing function. 
// This can be useful for creating more flexible and reusable code.