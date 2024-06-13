console.log("Hi");

// 2.1: Guess the Output And Explain Why?
let i = 4;
for (let j = 0; i < 10; i++) {
  if (j === 1 || i === 6) {
    continue;
  } else {
    console.log(i, j);

    if (i === 7) {
      break;
    }
  }
}
// answer: 4 0, 5 0 , 7 0; because j remains the same 
// i starts from 4 and continues till 9 but if its equal 
// to 6 then we skip that iteration and continue
// then we break the loop when i is equal to 7 but when i is equal to 7
// we already printed the value of i and j

// 2.2: Guess the Output and Explain Why?
let k = 0;
for (k; k < 5; k++) {
  console.log(k);
}
// 0 1 2 3 4 

//  2.3: Write a simple Program in which You have to print first 10 numbers in descending order (10...1)?
for(let i =10; i>0; i--){
    console.log(i);
}
/*
2.4: Lets say John is looking a new country to live in. He want to live in a country that speaks English, has less than 10 million people. One of the food option between these two must present Spanish food OR English food.

Write an if/else if statement to help john figure out Your country is right for him?
*/
let language = "English";
let numOfPeople = 100000;
let food = "chinese food";
let food2 = "English food";
if(language==="English" && numOfPeople < 1000000 && (food=="spanish food" || food2=="English food")){
    console.log("This is the right country for you");
}else{
    console.log("This country is not made for you");
}

/*

2.6: use nested-if statement to check your age>18

than check your height height > 5.10.

If both true show any message(I can sit in exam) in the console?

*/
let age = 20;
let height = 5.5;
if(age === 20 && height >= 5.10){
    console.log("you're eligible to sit in exam");
}else{
    console.log("you' not eligible to sit in exam");
}

/*

2.7: Create two variables grade and passingYear.
Check if your grade == "A" and passingYear < 2020 
with the help of ternary operator(Not allowed to use any logical operator).
If both condition true print on console Qualify. Otherwise Fail

*/
let grade = "A";
let passingYear = 2019;
let result = (grade == "A") ? (passingYear <= 2020 ? "Quality" : "Fail"): "Fail";
console.log(result);

