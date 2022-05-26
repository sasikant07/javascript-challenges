let person = {
    name: "Akshay",
    greet: function (msg) {
        console.log(this.name + " says " + msg)
    }
}

let human = {
    name: "Vinod"
}

person.greet.call(human, 'Hello World');
person.greet.apply(human, ["Hello Universe"]);

let result = person.greet.bind(person);
result("Hello Star")

Function.prototype.customBind = function(...args) {
    let obj = this;
    let params = args.splice(1)
    return function (...value) {
        obj.apply(args[0], [...params, ...value])
    }
}

let customResult = person.greet.customBind(person);
customResult("Hello Custom Star")