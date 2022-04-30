const computer = {
    name: "JavaScript",
    greetings: function (msg) {
        console.log(this.name + ' says ' + msg);
    }
}

const person = {
    name: "Sasikant Biswal"
}

computer.greetings("Hello World");

// call
computer.greetings.call(person, 'Hello world');

// apply
computer.greetings.apply(person, ['hello world']);

// bind --> it returns a completely new function with another context i.e person
const greet = computer.greetings.bind(person);

greet('hello world');