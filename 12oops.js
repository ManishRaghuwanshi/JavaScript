// oops
// arrow functions should not be used in this concept as they don't work with this and new keywords
/*
Arrow functions and this: Arrow functions don't have their own this; they inherit this from their surrounding lexical context.
Arrow functions and new: Arrow functions cannot be used with the new keyword because they lack a prototype and aren't meant for constructing objects.
*/

// constructor and new operator
// call constructor function using new keyword
// new (object) created empty initially
// "this" = (object)
// function automatically return object

let Car = function(brand, model){
    console.log("this keyword value: ", this);
    // properties (like object have properties, a function can alos have properties)
    this.brand = brand;
    this.model = model;
    // we should not use like below, function inside function as their properties, for this type we should utilize the prototype
    // this.color = function(){
    //     console.log("color of Car");
        
    // }
}
//each object that is created by constructor function has an access to all methods present inside that construtor prototype
//object does not have this prototype
Car.prototype.startEngine = function(){
    console.log("this is starting engine method");
    
}
Car.prototype.company = "volkswagon";
let instanceOfCar = new Car("honda", 2009);
console.log("instanceOfCar: ", instanceOfCar);
console.log("prototype: ", Car.prototype);
console.log(instanceOfCar.startEngine());
console.log(instanceOfCar.__proto__);
//or with constructor
console.log(Car.prototype);
let isPrototype = instanceOfCar.__proto__.isPrototypeOf(instanceOfCar);// return true but this method is return false on Car constructor
console.log("isPrototype: ", isPrototype);

let arr = [2,3,4,5,6,7,8,9,10,11];
console.log("array prototype", arr.__proto__);

