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

