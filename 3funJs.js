//functions
// it is simply a piece of code that we use in our program many times by defining functions at one time
// it's just like a variable holding a piece of code 
function swap1(a, b) {
    let temp;
    temp = a;
    a = b;
    b = temp;
    return [a, b];
}
let a = 10;
let b = 20;
console.log(a,b);
console.log(swap1(a,b));
// function expression : when we assign function to variable.
// anynonymous function : when a function does not have a name  
// this function does not have a name but it is assigned to the variable so that it can be called
let anonymousFun = function(name){
    console.log(name, "you are an anonymous function");
}

let anonymousArrowFun = (name = "manish") => { // here parameter value is "manish" but default is undefined
    console.log(name, ", its an anonymous arrow function");
}

// just like variable scope, we have parameter scope too, which is limited to that fucntion in which they declared
// function call 
anonymousFun("manish");
anonymousArrowFun();

// more to arrow function (ES6)
// special form of function expression
//its allows us to write function more fast cause no need to use fucntion keyword
//no need to use paranthesis in case of single parameter 
//no need to use curely braces if single line code is written
// no need to use return statement if single line code is written

let sumOfThree = (a, b, c) => {
    return a+b+c;
}
//this will also work : 
let sumOfFour = (a, b, c, d) => a+b+c+d;

console.log(sumOfThree(2,3,4));
console.log(sumOfFour(2,3,4,5));
let attend = name => name; // single line, automatically returned dd
console.log(attend("manoj"));

// functions : creates a new "this" context
// Arrow Fun : doesn't create a new context
 
// higher order functions function that takes one or more functions as arguments or a fucntion that return a function as its value;

let upperCase = str => str.toUpperCase();
let lowerCase = str => str.toLowerCase();
let transform = (str, fun) => fun(str);
console.log(transform("manish", upperCase));
// another method
let compare = (msg) => {
    return function (a, b) {
        console.log(msg, a+b);
    }
}

compare("sum is: " )(3, 4);
// usually we do this like this so that we can use it more dynamically
const compared = compare("total is : ");
compared(2,3);
compared(6,7);

//IIFE : immediately invoked function expression
// if we put something in paranthesis then usually its called expression
// we can't re-use this below function as its run when its defined
// sometimes we use this type of function to initialize some libraries 
(function(a, b){
    let c = a*b;
    console.log("multiple is : ", c)
})(4,5)// arguments

// setTimeout and setInterval
// seTimeout(func | code, delay, arg1, args2 ...)
function waitForTimeout(name){
    console.log(`${name} It showed you after timeout`);
}
setTimeout(waitForTimeout, 5000, "manish");
// above funnction implementationn alternative
setTimeout(function waitForTimeout2(name){
    console.log(`${name} It showed you second time after timeout`);
}
,5000, "manoj");
// or
setTimeout((name) => {
    console.log(`${name} It showed you second time after timeout`);
}, 5000, "swati");
// setInterval : same syntax but it executes after timeinterval we gaive 
setInterval(waitForTimeout, 2000, "chinta bai");// 