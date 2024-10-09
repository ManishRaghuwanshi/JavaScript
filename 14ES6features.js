// Array destructuring
//allow us to extract values from arrays and assign them to variables
const arr = [1, 2, 3, 4, 5];
const [a, b, c] = arr;
const [, , , , fifth] = arr; // we can't access random elements from arrays but can leave empty slot if don't want previous elements
console.log("array elements: ", a, b, c, fifth);

// object destructuring
const obj = {name: "manish", age: 29, profession: "engineering"};
const {name, age} = obj; 
const {profession} = obj; // can access random properties
console.log("object elements: ", name, age, profession);

// spread operator (...)
// ... (spread operator) always allow us to expand elemenets of an array or object into another
// array/object or into function arguments, which is usefull to avoid mutating the original data
const obj1 = {...obj, hobby: "badminton"};
console.log("spread operator compied object: ", obj1);
console.log("original object: ", obj);
//without spread operator
const obj2 = obj;   // if we change obj2 then original object (obj) will also got changed as both point to the same memory in the system
console.log("original object 2:", obj); 

