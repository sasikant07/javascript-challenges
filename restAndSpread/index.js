const employee = {
    name: "John",
    age: 25,
    salary: 50000
}

// Spread

let employeeOne = {... employee, name: "Jane"}
console.log(employeeOne);

// Rest

const {name, ...rest} = employee;

console.log(name)
console.log(rest)
console.log(name, rest);