function mySolution () {
    for (var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(() => {
                console.log(i)
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
                console.log(i);
            }, i * 1000);
        })(i);
    }
}

solution();


// using let also can be solved
// using let will create a new scope in each iteration
// also the new value is chained or stored in the memory with the previous value so 
// because eof this the value is copied from the previous one.