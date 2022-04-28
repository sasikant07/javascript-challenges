// hoisting

function abc () {
    console.log(a,b,c);

    var a = 10;
    let b = 20;
    const c = 30;
}

abc();