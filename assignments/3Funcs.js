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

let firstUpperCaseWord = () =>{
  
}