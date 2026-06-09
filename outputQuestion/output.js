const a = {name: "Ram", age: 26, city: "Delhi"}

let b = {...a, name: "rahul"}

const {name, ...xyz} = a;

console.log(xyz, b); // => { age: 26, city: 'Delhi' } { name: 'rahul', age: 26, city: 'Delhi' }

//=======================================================================================================
if ([]) {
    console.log("abc"); // => abc
} else {
    console.log("xyz"); 
}

//In JavaScript, an empty array [] is an object, and all objects are truthy.
// When the if statement evaluates the condition, it converts the array to a boolean. Since Boolean([]) is true, the first block executes.
//========================================================================================================

let obj = {
    a: {
        b: undefined
    }
}

console.log(obj.a.b.c); // => TypeError: Cannot read property 'c' of undefined

// In this code, we are trying to access the property 'c' of 'b', which is undefined. This results in a TypeError because we cannot access properties of undefined. To avoid this error, we can use optional chaining (?.) to safely access nested properties without causing an error if any part of the chain is undefined. For example:

console.log(obj.a.b?.c); // => undefined

// With optional chaining, if 'b' is undefined, the expression will short-circuit and return undefined instead of throwing an error.
 console.log(obj.a?.b?.c?.d ?? "Rahul"); // => Rahul
 
//Nullish Coalescing (??): This operator returns the right-hand side ("Rahul") 
// if the left-hand side is either null or undefined.

//===================================================================================================
var abc = 25;
if (function fn() {}) {
    abc = abc + typeof fn;
}

console.log(abc); // 25undefined
//The Condition: An if statement expects an expression. 
// When you put a function declaration inside an if condition, it becomes a Function Expression.
//===================================================================================================
console.log(a); // => undefined
console.log(b); // => 20
var a = b =20;
console.log(a); // => 20
// In this code, we have a variable 'a' declared with 'var' and assigned the value of 'b', which is 20. However, since 'a' is declared with 'var', it is hoisted to the top of its scope and initialized with undefined. Therefore, when we log 'a' before the assignment, it outputs undefined. After the assignment, both 'a' and 'b' have the value 20.

//===================================================================================================
const func = () => {
    console.log(this.name);
}

func.call({name: "Rahul"}); // => undefined
//Arrow functions do not have their own this binding. They inherit this from the lexical(surrounding) scope in which they were defined (where the code was written).
//===================================================================================================
console.log("8"+6+4);// => 864
console.log(typeof ("8"+6+"4")); // => string
// ===================================================================================================
console.log(NaN === NaN); // => false
console.log(NaN === NaN); // => false
console.log(Object.is(NaN, NaN)); // => true
//====================================================================================================
console.log(isNaN("abc")); // => true
console.log(isNaN("123")); // => false  
console.log(isNaN(123)); // => false        
// The isNaN function checks if a value is NaN (Not-a-Number). When you pass a string that cannot be converted to a number (like "abc"), it returns true. However, when you pass a string that can be converted to a number (like "123"), it returns false because "123" can be converted to the number 123, which is not NaN.
//====================================================================================================
var a = 200;
{
    var a = 400;
}

let b = a;
{
    let b = 500;
}

console.log(b); // => 400
//======================================================================================================
console.log([] == []); // => false
// In JavaScript, arrays are reference types. When you compare two arrays with the == operator, it checks if they reference the same object in memory. Since [] creates a new array each time, [] == [] evaluates to false because they are different objects in memory, even though they have the same contents.
console.log([] == false); // => true
// When you compare an empty array [] to false using the == operator, JavaScript performs type coercion. The empty array is converted to a boolean value, which is true. However, when comparing true to false, it evaluates to false. Therefore, [] == false evaluates to true because the empty array is considered truthy in this context.
console.log(false == ![]); // => true
// In this case, ![] evaluates to false because the empty array is truthy. Therefore, the expression becomes false == false, which evaluates to true.
//======================================================================================================
const arr = [1, 2, 3];
const str = "1,2,3";
console.log(arr == str); // => true
// When you compare an array to a string using the == operator, JavaScript converts the array to a string by calling its toString() method. The toString() method of an array returns a comma-separated string of its elements. In this case, arr.toString() returns "1,2,3", which is equal to the string str. Therefore, arr == str evaluates to true.
//=====================================================================================================
let abc = "john";
abc[2] = "a";
console.log(abc); // => john
// In JavaScript, strings are immutable, which means that you cannot change individual characters of a string. When you try to assign a new value to a specific index of the string (like abc[2] = "a"), it does not modify the original string. Instead, it simply ignores the assignment and leaves the string unchanged. Therefore, when you log abc, it still outputs "john".
//======================================================================================================
const array = [1,2,3];
const[y] = array;
console.log(y); // => 1
// In this code, we are using array destructuring to assign the first element of the array to the variable y. The syntax [y] means that we want to extract the first element of the array and assign it to y. Since the first element of the array is 1, y will be assigned the value 1. Therefore, when we log y, it outputs 1.
//======================================================================================================
const arr = [1, 2, 3, 4, 5, 6];
arr.map((el) => console.log(el > 2)); // => false false true true true true
// In this code, we are using the map() method to iterate over each element of the array and log whether it is greater than 2. The map() method creates a new array with the results of calling a provided function on every element in the calling array. However, since we are not returning any value from the arrow function, it implicitly returns undefined for each element. Therefore, when we log the result of arr.map(), it outputs false for elements 1 and 2, and true for elements 3, 4, 5, and 6.
//======================================================================================================
console.log(a); //ReferenceError: a is not defined
a = 400;  //if var a = 400; then above is undefined
console.log(a); // 400
// In this code, we are trying to log the value of variable a before it has been declared and assigned a value. Since a is not defined at that point, it results in a ReferenceError. After we assign the value 400 to a, we can log it successfully, and it outputs 400.
//======================================================================================================
function one(a = 5, b = 7) {
    console.log(a+b);   // 25
}

one(undefined, 20);

function two(a = 5, b = 7) {
    console.log(a+b); // 20
}

two(null, 20);
// In the first function call one(undefined, 20), we are passing undefined for the parameter a. In JavaScript, when a parameter is assigned undefined, it will use the default value specified in the function definition. Therefore, a will take the default value of 5, and b will be assigned the value 20. The output will be 25.
// In the second function call two(null, 20), we are passing null for the parameter a. In this case, null is not treated as undefined, so it does not trigger the default value. Instead, a will be assigned the value null, and b will be assigned the value 20. When we try to add null and 20, JavaScript treats null as 0 in numeric operations, so the output will be 20.
//======================================================================================================
var sum = 100 + score
var score = 400
console.log(sum); // => NaN
// In this code, we are trying to calculate the sum of 100 and the variable score before score has been declared and assigned a value. Since score is not defined at that point, it results in a ReferenceError. However, if we were to declare score after the sum calculation, it would be hoisted and initialized with undefined, which would lead to the sum being NaN (Not-a-Number) because you cannot perform arithmetic operations with undefined.
//======================================================================================================
console.log(typeof typeof 100); // => string
// In this code, we are using the typeof operator twice. The first typeof 100 evaluates to "number" because 100 is a number. Then, when we apply typeof to the result of the first typeof, we are essentially doing typeof "number", which evaluates to "string". Therefore, the final output is "string".
//======================================================================================================
const arr = [..."hello"];
console.log(arr); // => ['h', 'e', 'l', 'l', 'o']
// In this code, we are using the spread operator (...) to spread the characters of the string "hello" into an array. The spread operator takes each character of the string and creates a new element in the array for it. Therefore, the resulting array contains each character of the string as a separate element, resulting in ['h', 'e', 'l', 'l', 'o'].
//======================================================================================================
console.log(parseInt("10+2")); // => 10
// In this code, we are using the parseInt function to convert the string "10+2" into an integer. The parseInt function parses a string and returns an integer. It reads the string from left to right and stops parsing when it encounters a character that is not a valid digit. In this case, it successfully parses "10" and then stops when it encounters the "+" character. Therefore, the output is 10.
console.log(parseInt("7FM")); // => 7
// Similar to the previous example, parseInt will parse the string "7FM" and successfully convert the initial "7" into an integer. It will stop parsing when it encounters the "F" character, which is not a valid digit. Therefore, the output is 7.
console.log(parseInt("M7F")); // => NaN
// In this case, parseInt will attempt to parse the string "M7F" but will fail because the first character "M" is not a valid digit. Since it cannot parse any valid number from the string, it returns NaN (Not-a-Number).
//======================================================================================================
const obj = {
    a: 1,
    b: 2,
    sum() {
        return this.a + this.b; // loose context of this when calling obj.sum() without the correct context
    }
}

const res = obj.sum;
console.log(res()); // => NaN

//fix
const result = obj.sum.bind(obj);
console.log(result()); // => 3
// In this code, we are assigning the sum method of the obj object to the variable res. However, when we call res(), it does not have the correct context (this) to access the properties a and b of the obj object. As a result, this.a and this.b are undefined, and when we try to add them together, it results in NaN (Not-a-Number). To fix this issue, we can either call res with the correct context using bind() or call() methods, or we can directly call obj.sum() to ensure that it has access to the correct this context.
//======================================================================================================
const res = ++[[]][+[]] + [+[]]

// ++0 + 0
// 1 + 0 (conactenation)
// 10

console.log(res); // 10

// An empty array [] converted to a string is "".

// An empty string "" converted to a number is 0.

// Result: +[] becomes 0.

// Even though the console prints 10, it is technically the string "10", not the number.


