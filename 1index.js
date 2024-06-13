// single line comment 
/* multiline 
   comment 
*/

var comment = 33;
// valid : var comment = 32; (should not be valid)
console.log(comment);

let comment1 = 345;
// invalid : let comment1 = 232;
// valid :  comment1 = 23;
const comment2 = 12;
// invalid : comment2 = 23;

// data types : 

// numbers : 1,2,3.45 etc
// strings : "12345", "asd" etc
// booleans : true, false
// Null: intentionally absense of value
// undefined: intentionally variable declaration but not initialized

// Object : complex data structure
//symbol : complex data structure (to set some internal properties)

let firstName = "manish";
let lastName = "Raghuwanshi";
console.log(firstName, lastName); // auto space

// String concatenation
// mathod 1: plus operator
let fullName = firstName + lastName;
console.log(fullName); // no automatic space

//methodj 2: template literal

let fullName2 = `I want to be like ${firstName} ${lastName}`;
console.log(fullName2);

// string methods 

console.log(firstName.toUpperCase());
console.log(lastName.indexOf('a'));
console.log(lastName.lastIndexOf('a'));

let passion = "        travelling is my passion   ";// unwanted spaces
console.log(passion);

//trim: to clean data
let result = passion.trim();
console.log(result);

//include method
console.log(result.includes('my')); // case sensitive, return true or false

let myName = "my capability is more than you can";
// slice method 
console.log(myName.slice(0, 5)); // included 0-4 characters

// any of above methods don't mutate the string
//Strings are immutable (can't change directly).

let favColors = "Levender Yellow Black Maroon"; //string

let arrColors = favColors.split(" "); // array of colors

console.log(arrColors); 

// trying to modify the string

let modString = "manish";
modString[0] = "l";//will not be modified
console.log(modString);

// number data type

let rollNumber = 12345;
console.log(typeof(rollNumber));
// mathematical operations can be performed on numbers + - * / % **

// concatenation of numbers

let result2 = "my roll number is " + rollNumber; // dynamically generated string, that why we call js as loosly type language
console.log(result2);

let rollNumber2 = 234;
// loose equality vs strict equality
console.log(rollNumber2 == "234"); // loose
console.log(rollNumber2 === "234");

//type conversion 
let stringType = "23";
console.log(stringType, typeof stringType);
let numberType = Number(stringType);
console.log(numberType, typeof numberType);
// note : in Number method passing string muust be of numeric values as a result we can conver every number into string but not every string into number type
let numberType2 = 334;
let stringType2 = String(numberType2);
console.log(stringType2, typeof stringType2);
let age = 23; // 0 value of a number and empty string count as false in Boolean method
let booleanValue = Boolean(age);
console.log(booleanValue, typeof booleanValue);


// arrays

let games = ["cricket", "football", "badminton"];
console.log(games, typeof games);
games[1] = "voleyball";
console.log(games, typeof games);

// arrays methods 

// join methods 
console.log(games.join('-'));

//indexof method
console.log(games.indexOf('cricket'));

// concate method
let games2 = ["kabbadi", "Polo", "Table tennis", "golf"];
let allGames = games.concat(games2);
console.log(allGames, typeof allGames);

//length method
console.log(games.length);
console.log(allGames.length);

//push method 
console.log(allGames.push("tennis"));
console.log(allGames, typeof allGames);

// pop method 
console.log(allGames.pop());
console.log(allGames, typeof allGames);

// boolean values and comparison operator 
let boolValue = true;
let boolValue2 = false;
console.log(boolValue, boolValue2);

let email = "manish@gmail.com";
let booleanValue3 = email.includes("@");
console.log(booleanValue3);

// comparison operators always return boolean value 
// comparison operators : ==, ===, !=, !==, >, <, >=, <=

