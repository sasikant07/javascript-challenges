// Polyfill for array.apply()

// Polyfill for Array.call()

function printName(city, country) {
    console.log(`${this.firstName} ${this.lastName}, ${city}, ${country}`);
}


let someName = {
    firstName: 'John',
    lastName: 'Doe'
};

Function.prototype.customApply = function(context, args) {
    let currContext = context || globalThis;
    let randomProp = Math.random();

    while (currContext[randomProp] !== undefined) {
        randomProp = Math.random();
    }

    currContext[randomProp] = this;
    let result = currContext[randomProp](...args);
    delete currContext[randomProp];

    return result;
}

printName.customApply(someName, ["Melbourne", "Australia"]);     // "John Doe, Melbourne, Australia"