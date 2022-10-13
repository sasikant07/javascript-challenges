const employee = {
    name: "Arjun",
    age: 28,
    salary: 50000
}

const manager = employee;

manager.salary = 60000;

console.log(employee);  // { name: 'Arjun', age: 28, salary: 60000 }
console.log(manager);   // { name: 'Arjun', age: 28, salary: 60000 }

console.log("==============================================================")
// solution
const director = {...employee};
director.salary = 100000;

console.log(employee);  // { name: 'Arjun', age: 28, salary: 60000 }
console.log(director);  // { name: 'Arjun', age: 28, salary: 100000 }