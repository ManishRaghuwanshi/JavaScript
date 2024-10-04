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

let age2 = 31;
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
    console.log(key, ":", car[key]);
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

/* 
* Loop Type	    Iterates Over	                     Recommended For	                    Break/Continue Support
* for-in	    Keys (properties or indexes)	 Objects or arrays (keys only)	                        Yes
* for-of	    Values (elements)	             Arrays, strings, or iterables	                        Yes
* forEach	    Values (elements)	             Arrays (applying a function)	                        No 
* 
* to skip the iteration or to break the loop in forEach loop: 
*     if (value === 'b') return; // Only returns from the callback, does NOT skip
*     if (value === 'c') throw 'Exit loop'; // Throws an exception to exit
*/
//map method
// * A Map holds key-value pairs where the keys can be any datatype.
let doubled = numbers.map(function(value, key) {
    console.log("index:", key, "value: ", value);   
    return value * 2;
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

* accumulator: The accumulated value that gets updated with each iteration.
* currentValue: The current element being processed.
* index (optional): The index of the current element.
* array (optional): The original array on which reduce was called.
* initialValue (optional): The initial value to start with. If provided, accumulator is initialized with this value; otherwise, it takes the first element of the array as the initial value.

*/
let sum = numbers.reduce(function(total, number) {
    return total + number;
}, 0);
console.log(sum); // 15 

// every and some 
let allEven = numbers.every(function(number) {
    return number % 2 === 0; // if every element is divided by 2, then every method returns true otherwise false
});
let someEven = numbers.some(function(number) {
    return number % 2 === 0; // if at least one element divided by 2 then it return true otherwise false
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
// It works similarly to for...of but awaits the resolution of each promise before proceeding.

let array2 = ['a', 'b', 'c'];

for (let [index, element] of array2.entries()) { // used when we need both index and value of each element of the array
    console.log(index, element);
}

// * Map : A Map holds key-value pairs where key can be any data type, a map remembers the original insertion order of the keys
// * new Map(): Initializes a new, empty Map object.
// * Map.set(): Adds or updates a key-value pair in the Map.

// 1. Create a new Map
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
console.log(map);


// 2. set(key, value): Add or update elements
map.set('d', 4);  // Adds a new key-value pair
map.set('a', 10); // Updates the value of 'a'
console.log(map);

// 3. get(key): Get the value associated with a key
console.log('Get value of "a":', map.get('a'));  // Output: 10

// 4. has(key): Check if a key exists
console.log('Map has key "b":', map.has('b'));  // Output: true
console.log('Map has key "e":', map.has('e'));  // Output: false

// 5. delete(key): Remove a key-value pair
map.delete('c');  // Removes key 'c'
console.log('After deleting "c":', map);

// 6. clear(): Remove all key-value pairs
// map.clear(); // Uncomment this to clear the map
// console.log('After clearing:', map);  // Output: Map(0) {}

// 7. size: Get the number of key-value pairs in the map
console.log('Map size:', map.size);  // Output: 3 (or 0 if cleared)

// 8. forEach(callback): Iterate over key-value pairs
console.log('Map elements using forEach:');
map.forEach((value, key) => {
  console.log(key, value);
});

// 9. entries(): Get an iterator of key-value pairs
console.log('Map entries using entries():');
for (let [key, value] of map.entries()) {
  console.log(key, value);
}

// 10. keys(): Get an iterator of keys
console.log('Map keys using keys():');
for (let key of map.keys()) {
  console.log(key);
}

// 11. values(): Get an iterator of values
console.log('Map values using values():');
for (let value of map.values()) {
  console.log(value);
}

// 12. Map.groupBy() (New in ES2024)
const fruits = [
  { name: 'apples', quantity: 300 },
  { name: 'bananas', quantity: 500 },
  { name: 'oranges', quantity: 200 },
  { name: 'kiwi', quantity: 150 }
];

// Callback function to group elements by quantity
function groupByQuantity({ quantity }) {
  return quantity > 200 ? "ok" : "low";
}

// Group by quantity using Map.groupBy()
const grouped = Map.groupBy(fruits, groupByQuantity);
console.log('Grouped by quantity:', grouped);



// 1. new Set(): Create a new Set
const set = new Set([1, 2, 3, 4]);

// 2. add(value): Add elements to the Set
set.add(5); // Adds 5 to the Set
set.add(3); // Doesn't add because 3 is already in the Set
console.log('After adding elements:', set);

// 3. has(value): Check if a value exists in the Set
console.log('Set has 3:', set.has(3));  // Output: true
console.log('Set has 10:', set.has(10));  // Output: false

// 4. delete(value): Remove a specific value from the Set
set.delete(4); // Removes 4 from the Set
console.log('After deleting 4:', set);

// 5. size: Get the number of elements in the Set
console.log('Set size:', set.size);  // Output: 4

// 6. clear(): Remove all elements from the Set
// set.clear(); // Uncomment this to clear the Set
// console.log('After clearing:', set);  // Output: Set(0) {}

// 7. forEach(callback): Execute a function for each element in the Set
console.log('Set elements using forEach:');
set.forEach(value => {
  console.log(value);
});

// 8. values(): Get an iterator for all the values in the Set
console.log('Set values using values():');
for (let value of set.values()) {
  console.log(value);
}

// 9. keys(): Get an iterator for all the keys in the Set (Same as values, since Set only contains values)
console.log('Set keys using keys():');
for (let key of set.keys()) {
  console.log(key);
}

// 10. entries(): Get an iterator with [value, value] pairs (Set has no keys, so the value is repeated)
console.log('Set entries using entries():');
for (let entry of set.entries()) {
  console.log(entry);  // Output: [value, value]
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