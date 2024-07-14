/*

3.1: Create a function Declaration called describeYourState 
Which take three parameters Population, traditional food and historical place. 
Based on this input function should return a String with this format.

*/
function describeYourState (Population, traditionalFood, historicalPlace) {
    console.log(`Your State Population is: ${Population}, traditional food is: ${traditionalFood} and historical place is: ${ historicalPlace}`);
}
describeYourState(25000, "Chiken Biryan", "Taj Mahal")

// 3.2: Create a function expression which does the exact same thing as defined in Question 1

let describeYourState1 = (Population, traditionalFood, historicalPlace) => {
    console.log(`Your State Population is: ${Population}, traditional food is: ${traditionalFood} and historical place is: ${ historicalPlace}`);
}
describeYourState1(25000, "Chiken Biryani", "Taj Mahal");

/*
3.3: Create function addition which takes two numbers as an argument And return the result of sum of two numbers

Important Note: In the function call you are not passing any parameter. You can modify function to achieve this
*/
function addition(num1 =4, num2=5) { // passed default value so that if no argument passed the 
  return num1 + num2;
}
console.log(addition()); //You are not allowed to modify this line any more

// 3.4: Identify which type of value passed below into the function greet(). What will be the return value of greet ?
let person = {
  name: 'john',
  age: 25,
};

function greet(person) {
  person.name = `Mr ${person.name}`;
  return `Welcome ${person.name}`;
}
  
greet(person);
// and "Welcome Mr John", as we pass person object to greet function and then
// we modify the object name property(as object are referenced by)(new value of name property is "Mr John") and returnn the name property out of it.
  
/*
3.5: Create higher order function named as transformer 
which take string and firstUpperCaseWord function as an arguments. 
firstUpperCaseWord is function which make first word UpperCase from a given String.
*/
let firstUpperCaseWord = str => str.trim().charAt(0).toUpperCase()  + str.trim().slice(1);
let transformer = (str, fun) => fun(str);
console.log(transformer("       manish", firstUpperCaseWord));

// 3.7: Guess the Output And Explain Why?
let arrowFunction = (name = 'Coders') => {
    `Welcome ${name}`;
};
console.log(arrowFunction('Programmers'));
// undefined, because we are not returning any value, just have written the statement

/*
3.8: Create a JavaScript Function to find the area of a triangle 
where lengths of the three of its sides 
are 5, 6, 7. : Area = Square root of√s(s - a)(s - b)(s - c) 
where s is half the perimeter, or (a + b + c)/2.
*/
let triangleArea = (a, b, c) => {
  let radius = (a+b+c)/2;
  let area = radius *(radius -a)*(radius-b)*(radius-c);
  area = Math.sqrt(area);
  console.log(area);
}
triangleArea(5,6,7)

// 3.9: Create a JavaScript Function to capitalize the first letter of each word of a given string.
// we use regular expressions to find any type of whitespace
let position = [];
let findSpace = (str) => {
  let capitalizedStr = str.charAt(0).toUpperCase() + str.slice(1);
  const regex = /\s/g;  // /g is a global variable which allow us to search all the matches not just the first match
  const matches = str.matchAll(regex);
  for(const matched of matches){
    match = matched.index;
    if(match <= str.length){
      capitalizedStr = capitalizedStr.slice(0, match+1) + capitalizedStr.charAt(match+1).toUpperCase() + capitalizedStr.slice(match+2);
    }
  }
  return capitalizedStr;
}


let capitalize = (str, fun) => fun(str);
console.log( capitalize("my name is manish raghuwanshi", findSpace));
