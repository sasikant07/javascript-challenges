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
  //=========================================================================================================
  const obj = {
  name: "John",
  getName() {
    console.log(this.name);
  }
};

obj.getName(); // => John
//=========================================================================================================
const obj = {
  name: "John",
  getName() {
    console.log(this.name);
  }
};

const fn = obj.getName;
fn(); // => undefined
//=========================================================================================================
const obj = {
  name: "John",
  getName: () => {
    console.log(this.name);
  }
};

obj.getName(); // => undefined
//=========================================================================================================
const obj = {
  name: "John",
  getName() {
    const inner = () => {
      console.log(this.name);
    };
    inner();
  }
};

obj.getName(); // => John
//=========================================================================================================
const obj = {
  name: "John",
  getName() {
    function inner() {
      console.log(this.name);
    }
    inner();
  }
};

obj.getName(); // => undefined
//=========================================================================================================
const obj = {
  name: "John",
  getName() {
    function inner() {
      console.log(this.name);
    }
    inner.bind(this)();
  }
};

obj.getName(); // => John
//=========================================================================================================
const obj = {
  name: "John",
  getName() {
    return () => {
      console.log(this.name);
    };
  }
};

const fn = obj.getName();
fn(); // => John
//=========================================================================================================
const obj = {
  name: "John",
  getName() {
    return () => console.log(this.name);
  }
};

const fn = obj.getName;
fn()(); // => John
//=========================================================================================================
const obj = {
  name: "John",
  getName() {
    setTimeout(function () {
      console.log(this.name);
    }, 0);
  }
};

obj.getName();// => undefined
//=========================================================================================================
const obj = {
  name: "John",
  getName() {
    setTimeout(() => {
      console.log(this.name);
    }, 0);
  }
};

obj.getName();// => John
//=========================================================================================================
function Person(name) {
  this.name = name;

  this.getName = () => {
    console.log(this.name);
  };
}

const p = new Person("John");

p.getName(); // => John
//=========================================================================================================
const obj = {
  name: "John",
  child: {
    name: "Doe",
    getName() {
      console.log(this.name);
    }
  }
};

obj.child.getName(); // => Doe
//=========================================================================================================
const obj = {
  name: "John",
  child: {
    name: "Doe",
    getName: () => {
      console.log(this.name);
    }
  }
};

obj.child.getName(); // => undefined
//=========================================================================================================
const obj = {
  name: "John"
};

const fn = () => {
  console.log(this.name);
};

fn.call(obj); // => undefined
//=========================================================================================================
function fn() {
  console.log(this.name);
}

fn.call({ name: "John" }); // => John
//=========================================================================================================
const obj = {
  name: "John",
  getName() {
    console.log(this.name);
  }
};

const fn = obj.getName.bind({ name: "Doe" });

fn();// => Doe
//=========================================================================================================
function fn() {
  console.log(this.name);
}

const f1 = fn.bind({ name: "A" });
const f2 = f1.bind({ name: "B" });

f2();// => A
//==========================================================================================================
const obj = {
  name: "John",
  getName() {
    return function () {
      return () => {
        console.log(this.name);
      };
    };
  }
};

obj.getName()()(); // => John
//=========================================================================================================
"use strict"
function test() {
  console.log(this);
}

test();// => undefined