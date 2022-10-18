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


// NESTED OBJECTS

//use deep copy
let oldEmployee = {
    id: '102',
  
    name: 'Jack',
  
    address: {
      city: 'New York',
  
      country: 'USA',
    },
  };
  
  let newEmployee = JSON.parse(JSON.stringify(oldEmployee));
  
  newEmployee.address.city = 'Texas';
  
  console.log(oldEmployee.address.city);    // New York
  
  console.log(newEmployee.address.city);    // Texas