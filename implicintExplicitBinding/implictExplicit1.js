var obj = {
    name: "Piyush",
    display: function () {
        console.log(this.name);
    }
}

// var obj = {
//     name: "Piyush",
//     display: () => {             // --> this will print the global window object
//         console.log(this);
//     }
// }

var obj1 = {
    name: "Ayush"
}

obj.display();  // Piyush

// take the context from obj1 not obj
// Explicit Binding (call, bind & apply)
obj.display.call(obj1);     // Ayush