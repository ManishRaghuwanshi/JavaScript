// 4.1: Guess the Output And Explain ?
console.log(Math.round(Math.random() * 10));
// any random number from 0 to 1 then multiply by 10
/*
4.2: Create an object called country for a country of your choice, 
containing properties name , capital, language, population and neighbors

Increase the country population by two million using dot notation.
Decrease the country population by one million using bracket notation.
Make language value in Uppercase.
*/

let country = {
    name: "India",
    capital: "New Delhi",
    language: "hindi",
    population: 1500000000,
    neighbors: {
        neighbor1: "Pakistan",
        neighbor2: "Bangladesh",
        neighbor3: "Nepal",
        neighbor4: "Bhutan",
    }
}
country.population = country.population+20000000;
country["population"] = country["population"]-10000000
country.language = country.language.toUpperCase();
console.log(country);

// 4.3: Guess the Output and explain Why?
let car = {
    color: 'Blue',
  
    model: 2021,
  
    company: 'Toyota',
  };
  
  let carColor = 'Blue';
  
  console.log(car[carColor]);
  
  console.log(car.carColor);
  // undefined
  // undefined
  /*
   car is an object, carColor is a string variable, here we are using 
   bracket notation of an object, which search for the carColor propertry in car object
   as there is no property named Blue (gets by carColor) (search for key not value)
   as a result its return value is undefined
   again we access carColor propertry in car object(using dot method) which is not present 
   so again it'll returns undefined
  */

// 4.4: Create a method describeCar inside car object in which you have 
// to print like this in console using template literals
// Company of my car is ** . It color is And Model of my car is __**
let car1 = {
    company: "Ferari",
    color: "yellow",
    model: 2000,
    describeCar: function (companyName, carColor, carModel) {
        
        let obj = {
        companyName : this.company,
        carColor : this.color,
        carModel : this.model
        }
        return obj;
    //    this.company = companyName;
    //    this.color = carColor;
    //    this.model = carModel;
    }
}
// car1.describeCar("laborghini", "yellow", 1998);
// console.log(car1);
console.log(car1.describeCar());

//4.5: Generate random numbers between 0 and 10 using trunc method of MATH object
let randomNumber = ()=> {
    randnum = Math.random() * 10;
    randnum = Math.trunc(randnum);
    return randnum;
}
console.log(randomNumber());
//trunc method of MATH object removes fractional part of any object

//4.6: Guess the Output and Explain Why?

/*
let  arr  = [1,2,3,4];

arr.forEach(elem  =>{

if(elem  ==  1){
    continue;
}

console.log(elem);

})
*/
// syntax error : can't use continue and break in forEach loop, they made for traditional loops,
// simple solution for this : 
let arr = [1,2,3,4];
arr.forEach(element => {
    if(element == 1){
        return; // this will skip the current iteration 
    }
    console.log(element);
})

/*
4.7: Guess the Output And explain Why?

Important Note: if there is any error, How we can solve that error?
*/
/*
let airplane = {
    flightName: 'fly india',
  
    atacode: 'FI',
  
    ratings: 4.9,
  
    book(passenger, flightNum) {
      console.log(
        `${passenger} Booked flight in ${this.flightName} with flight Number ${this.atacode}${flightNum}`
      );
    },
  };
  
  let bookMethod = airplane.book;
  bookMethod('john', 8754);
*/
// in not strict mode the output will be " john booked flight in undefined with flight Number undjefined8754"
// in strict mode this will throw a TypeError because this is undefined.
// solution: 
let airplane = {
    flightName: 'fly india',
  
    atacode: 'FI',
  
    ratings: 4.9,
  
    book: function(passenger, flightNum) {
    
        return `${passenger} Booked flight in ${this.flightName} with flight Number ${this.atacode}${flightNum}`
      
    },
  };
  let bookFlight = airplane.book("manish", 2341);
  console.log(bookFlight);

  //4.8: Guess the Output And Explain Why?
  let arr2 = [3, 2, 3, 4];

for (let elem in arr2) {
  console.log(arr2[elem]);
}
//it prints all the array elements together
/*
4.9: You have to create a Shopping_Cart array with following features :

addItem(itemName) : this function should add string itemName to cart

removeItem(itemName): this function should remove any item which matches itemName. Hint : search for index of itemName and then remove it

cartSize() : returns size of cart in terms of number of cart Items.
*/

let Shopping_Cart = [];

let addItem = (itemName) => {
  Shopping_Cart.push(itemName);
}
let removeItem = (itemName) => {
  //method 1:
  // let index = Shopping_Cart.indexOf(itemName);
  // if(index !== -1){
  //   Shopping_Cart.splice(index, 1);

  // method 2:
  Shopping_Cart = Shopping_Cart.filter(item => item !== itemName);
  
  // Shopping_Cart.pop() //will remove the top of the element from the array
}
let cartSize = () => {
  return Shopping_Cart.length;
}
addItem("manish");
addItem("manish");
addItem("Layavnya");
removeItem("manish");
console.log(Shopping_Cart);
console.log(cartSize());
