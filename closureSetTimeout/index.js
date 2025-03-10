function mySolution () {
    for (var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(() => {
                console.log(i)  // 1 2  3 4 5
            }, i * 1000)
        }
        close(i);
    }
}

// mySolution();


// OR

function solution() {
    for (var i = 1; i <= 5; i ++) {
        (function (i) {
            setTimeout(() => {
                console.log(i); // 1 2 3 4 5
            }, i * 1000);
        })(i);
    }
}

// solution();

for (var i = 1; i <= 5; i++) {
        setTimeout(() => {
            // console.log(i)      // 6 6 6 6 6 6
        }, i * 1000)
}

/*

The reason you see the same message after 6 seconds is that the callback passed to the setTimeout() a closure. 
It remembers the value of i from the last iteration of the loop, which is 6.

In addition, all three closures created by the for-loop share the same global scope access the same value of i.

To fix this issue, you need to create a new closure scope in each iteration of the loop.

There are two popular solutions: IIFE & let keyword.

    // IIFE
    for (var index = 1; index <= 3; index++) {
        (function (index) {
            setTimeout(function () {
                console.log(index);
            }, index * 1000);
        })(index);
    }

    In this solution, you use an immediately invoked function expression (a.k.a IIFE) 
    because an IIFE creates a new scope by declaring a function and immediately executing it.

    // Using let
    for (let index = 1; index <= 3; index++) {
        setTimeout(function () {
            console.log(index);
        }, index * 1000);
    }

    If you use the let keyword in the for-loop, it will create a new lexical scope in each iteration. 
    In other words, you will have a new index variable in each iteration.

    In addition, the new lexical scope is chained up to the previous scope so that the previous value 
    of the index is copied from the previous scope to the new one.

*/



for (var i = 1; i < 5; i++) {
    setTimeout(() => {
        // console.log(i)      // 5 5 5 5 5
    }, i * 1000)
}

// using let also can be solved
// using let will create a new scope in each iteration
// also the new value is chained or stored in the memory with the previous value so 
// because of this the value is copied from the previous one.


for (var i = 0; i < 5; i++) {

    function add () {
        console.log(i);
    }
    setTimeout(add, i * 1000);  // 5 5 5 5 5
}

