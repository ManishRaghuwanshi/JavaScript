//1.1: Create a code to check difference between null and undefined data type. Also check their type using typeof.
let undefinedData;
let nullData = null;
console.log(`undefined data type: ${undefinedData}, null data type: ${nullData}`);
// 1.2: Which type of variables (var, let or const) must be initialized at the time of declaration?
// Answer: const, because it must be initialized at the time of declaration as it can't be assigned value later

// 1.3: Guess the Output and Explain Why?
let languages = 'java javaScript python cSharp';

let result = languages.lastIndexOf('S');

console.log(result);
// answer: 24, because lastIndexOf() method return last index of any given value

// 1.4: Guess the Output and Explain Why?
let variable = 'hello programmers';

let result1 = Number(variable);

console.log(result1);
// answer: NaN, because a string can't be converted to a number, (but vise versa is possible)

// 1.5: Guess the Output and Explain Why?
let num1 = 32;

let num2 = '32';

let result2 = num1 !== num2;

let result3 = num1 != num2;

console.log(result2, result3);
// first is true and second is false (as this operator != not check the type)

//1.6: Guess the Output and explain Why?
let str = 'Hello Programmers';

let result4 = str.includes('r');

console.log(result4);
// true, as includes() method check the value is present or not in the given value

// 1.7: Guess the Output and Explain Why?
let num4 = 2;

let num5 = 5;

let result5 = num4 ** num5 * 2;

console.log(result5);
// 64, ** operator is consider as power

// 1.8: Guess the Output and Explain Why?
let num6 = [1, 2, 4, 5];

let num7 = [6, 5, 8, 0];

let result6 = num6.concat(num7);

console.log(result6);
// [1, 2, 4, 5, 6, 7, 8, 0], create new array by concating given arrays

// 1.9: Guess the Output and Explain Why?
let a = 5;

let b = 7;

let c = 8;

let result7 = a < b > c;

console.log(result7);
// false, a<b = true, and true is considered as 1 when it comes to numerical comparison  

/*
1.10: If your State is split into four equal parts 
such that in each part there are 1/4 number of people live. 
You have to find how many people would live in each part? 
which operators will you use ?
*/
// division operator "/", total population will be divided by 4
