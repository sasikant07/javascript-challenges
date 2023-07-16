let obj = {
    name: 'John',

    greet: function () {
        console.log(`Hi I am ${this.name}`);
    },

    hello: () => {
        console.log(`Hello this is ${this.name}`);
    }
}

obj.greet();    // => Hi I am John
obj.hello();    // => Hello this is undefined


// within object method it will be undefined but in regular function inside which there is 
// an arrow function, there this will show the proper value


// this keyword will not work within the arrow functions such as event handlers, object method, 
// prototype methods, function that use arguments object.


// No.2
const data = {
    name: "Neeraj",
    age: 25,
    greet: function() {
      setTimeout(function() {
        console.log("hello " + this.name);      // hello undefined   --> change this.name to data.name
      })
    }
  }
  
  data.greet();