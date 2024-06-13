// objects introduction

let studentInfo = {
    name: "manish",
    id: "19BCE10439",
    branch: "CSE",
    degree: "B.Tech",
    college: "Vellore Institute of Technology Bhopal",

}
console.log(studentInfo["name"]);
console.log(studentInfo['name']);
console.log(studentInfo.name);

let varName = "name";
console.log(studentInfo[varName]);
//update value of studentInfo (object)
studentInfo.name = "lavanya";
studentInfo["id"] = "19BCE10438";
console.log(studentInfo.name);
console.log(studentInfo.id);
// detele value of studentInfo (object)
delete studentInfo.name;
let isDeleted = delete studentInfo.id;
console.log(studentInfo.name);
console.log(studentInfo.id, isDeleted);

// object inside array

let cities = [{
    name: 'surat',
    state: "gujrat",
    country: "india"
},{
    name: 'sharanpur',
    state: 'UP',
    country: "india"
},
{
    name: 'sehore',
    state: 'MP',
    country: "india"
}

];

let firstCity = cities[0].name;
console.log('first city is : ',firstCity);
console.log("all cities are : ");
for(let i=0; i<cities.length; i++){
    console.log(cities[i].name, cities[i].state, cities[i].country);
}
// gnerally prebuilt objects like Math are already implemented in core JS so that they have methods to make our taks easier      

//Math object
let num = 3.6;
console.log(Math.round(3.8));//round a number
console.log(Math.floor(num));//lower integer
console.log(Math.ceil(num));//uper integer
console.log(Math.trunc(num));// removes decimal 
console.log(Math.random());// gives randrom number from 0 to 1
// primitive types like "nummber", "string", etc are not the reference types
// object, array and function are reference types 
// objects/arrays: how reference are passed to variable

let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20

let num2 = [1,2,3,4,5];
let getRef = num2;
getRef[5] = 2019;
getRef.shift();
console.log("updated array", getRef);
console.log("updated array", num2);

// to solve this issue we use spread operator(...)
let car = {
    name: "Larborghini",
    model: "Diablo",
    Year: 1998
}
let car2 = {...car};
car2.name = "Ferari";
console.log("car is not updated",car);
console.log("car is updated", car2);