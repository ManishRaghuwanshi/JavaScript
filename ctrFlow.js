// control flow

// for loop
let num = 10;
for(let i=1; i<=num; i++){
    console.log(23*i);
}

let colors = ["yellow", "lavender", "black"];
for(let i = 0; i < colors.length; i++){
    console.log(colors[i]);
}
// while loop
let j = 0;
while(j < colors.length){
    console.log(colors[j]);
    j++;
}
// do while loop

let k = 0;
do{
    console.log(colors[k]);
    k++;
}while(k < colors.length);

// if else

let numValue = 20;
if(numValue == 20){
    console.log("its equal to 20");
}else if(numValue <20){
    console.log("its less than 20");
}else{
    console.log("its greater than 20");
}
// also we can perform nested if else statements
if(numValue == 20){
    if(typeof numValue == "number"){
        console.log("its number value");
    }
}


// break and continue, also called jump statements

//continue statements : used to skip the current iteration

for(let i = 0; i<4; i++) {
    if(i==2)
        continue;
    console.log("value:" + i);
}

//break : used to skip the further iteration

for(let i = 0; i<4; i++){
    if(i==2)
        break;
    console.log("value:" + i);

}

//switch case statements

let day;

switch(new Date().getDay()) {
    case 0:
        day="Sunday";
        break;
    case 1:
        day="Monday";
        break;
    case 2:
        day="Tuesday";
        break;
    case 3:
        day="Wednesday";
        break;
    case 4:
        day="Thursday";
        break;
    case 5:
        day="Friday";
        break;
    case 6:
        day="Saturday";
        break;
    default:
        day=null;
        break;
    
}
console.log("Today is: ", day);

// variable and scope

let score = 90; // global scop
if(true){
    let score = 50; // block scope, valid only inside if statement
    console.log("score is:", score);
}
console.log("score is : ", score);

const score2 = 43;
if(true){
    const score2 = 45;
    console.log("score2 is : ", score2);
}
console.log("score2 is : ", score2);

//ternary operator 

let age2 = 34;
if(age2>40){
    console.log("age is greater than 40");
}else if(age2==30){
    console.log("age is equal to 30");
}
else{
    console.log("age is less than 40");
}
//with ternary operator

let result = age2 > 34 ? "age is greater than 34" : age2 == 34 ? "age is equal to 34 " : "age is less than 34";
console.log(result, typeof result);

