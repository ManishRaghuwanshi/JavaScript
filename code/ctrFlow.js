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

// for-in loop
let car = {
    name: "Larborghini",
    model: "Diablo",
    color: "yellow",
    Year: 1998
}


for(let key in car){ // in keyword used for object
    console.log(key);
    console.log(car[key]);
}

// for-of loop
let array = [10, 20, 30];
for (let value of array) {
    console.log(value);
}
// for each

let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
    console.log(number);
});
numbers.forEach((number) => {
    console.log(number);
});
//map method
let doubled = numbers.map(function(number) {
    return number * 2;
});
console.log(doubled); // [2, 4, 6]
// filter method
let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});
console.log(evenNumbers); // [2, 4]
// reduce method
/*
array.reduce(function(accumulator, currentValue, index, array) {
    // return updated accumulator
}, initialValue);

*/
let sum = numbers.reduce(function(total, number) {
    return total + number;
}, 0);
console.log(sum); // 15

// every and some 
let allEven = numbers.every(function(number) {
    return number % 2 === 0;
});
let someEven = numbers.some(function(number) {
    return number % 2 === 0;
});
console.log(allEven); // false
console.log(someEven); // true

// for await...of (loop)
/*
async function* asyncGenerator() {
    yield "Hello";
    yield "Async";
    yield "World";
}
(async () => {
    for await (let value of asyncGenerator()) {
        console.log(value);
    }
})();

*/
//entries, keys, values Methods (for Arrays, Maps, Sets)

let array2 = ['a', 'b', 'c'];
for (let [index, element] of array2.entries()) {
    console.log(index, element);
}
let map = new Map([['a', 1], ['b', 2]]);
for (let [key, value] of map.entries()) {
    console.log(key, value);
}

let set = new Set([1, 2, 3]);
for (let value of set.values()) {
    console.log(value);
}

//forEach Method for Maps and Sets

let map2 = new Map([['a', 1], ['b', 2]]);
map2.forEach(function(value, key) {
    console.log(key, value);
});

let set2 = new Set([1, 2, 3]);
set2.forEach(function(value) {
    console.log(value);
});



/*

for...in Loop
Purpose: The for...in loop is used to iterate over the enumerable properties of an object.

for...of Loop
Purpose: The for...of loop is used to iterate over the values of an iterable (arrays, strings, maps, sets, etc.).

forEach Method
Purpose: The forEach method is used to execute a provided function once for each array element.

map Method
Purpose: The map method creates a new array populated with the results of calling a provided function on every array element.

filter Method
Purpose: The filter method creates a new array with all elements that pass the test implemented by the provided function.

reduce Method
Purpose: The reduce method executes a reducer function on each element of the array, resulting in a single output value.

every Method
Purpose: The every method tests whether all elements in the array pass the test implemented by the provided function.

some Method
Purpose: The some method tests whether at least one element in the array passes the test implemented by the provided function.

for await...of Loop
Purpose: The for await...of loop is used to iterate over async iterable objects.

entries Method (Array, Map, Set)
Purpose: The entries method is used to iterate over entries (key-value pairs) of the data structure.

keys Method (Array, Map, Set)
Purpose: The keys method is used to iterate over the keys of the data structure.

values Method (Array, Map, Set)
Purpose: The values method is used to iterate over the values of the data structure.

forEach Method (Map)
Purpose: The forEach method for maps is used to execute a provided function once for each key-value pair in the map.

forEach Method (Set)
Purpose: The forEach method for sets is used to execute a provided function once for each value in the set.

*/