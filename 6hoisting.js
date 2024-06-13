// Hoisting
// variables "declaration" are "hoisted" toward "top" of their scope
// variables declared using "var" keyword, their declarations is hoited at the top of the scope but
// initialization remains in place. This can leads to unexpected behaviors
console.log(x);
var x = 2;
console.log(x);
// by js this above code will be taken as : 
    /*
        var x;
        console.log(x); // undefined
        x = 5;
        console.log(x); // 5

    */
/*
Variables declared with let and const are also hoisted, 
but they are not initialized. 
This means they are in a "temporal dead zone" 
from the start of the block until the declaration is encountered. 
Accessing them before their declaration will result in a ReferenceError.
*/
/*
console.log(a); // ReferenceError: Cannot access 'a' before initialization
let a = 5;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
const b = 10;

*/

//Hoisting of functions
// works with traditional/normal functions are fully hoited
console.log("manish");
function myFunc(name){
    return name;
}
//other type of functions where assign funcitons to variables or function expression type also hoisting won't work.
// when we assign a function to a variable, hoisting will work as the vaiable behaviour(in terms of hoisting)
// console.log(myfunc(4));
// let myfunc = (name) => {
//     return name;
// }
