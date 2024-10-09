// Local Storage
console.log("window object: ", window);
let strg = window.localStorage;
console.log("local storage: ", strg);
//this alos works
console.log("local storage:", localStorage);

// set item in local storage
localStorage.setItem("name", "Manoj Raghuwanshi"); // key value pair 
console.log("update local storage:", localStorage);
console.log("local item: ", localStorage.getItem("name"));
//update
localStorage.setItem("name", "Manish Raghuwanshi"); // overwrite existing
//remove
localStorage.removeItem("Manish Raghuwansh"); // remove by key
localStorage.clear();// clear whole local storage
//also we can delete the local storage by browser dev tools

// store array of objects
let vehicles = [
    {
        company: "Tata",
        model: "Thar"
    },
    {
        company: "volkswagen",
        model: "lamborghini"
    }
];
console.log("vehicles type: ", typeof vehicles);
let stringOfVehicles = JSON.stringify(vehicles);
console.log("vehicles type: ", typeof stringOfVehicles);
localStorage.setItem("vehicles", stringOfVehicles);
// get this value
let objectOfVehicles = localStorage.getItem("vehicles");
let vehicle = JSON.parse(objectOfVehicles);
console.log("retrieved vehicle: ", vehicle, " retrieved vehicle type:", typeof vehicle);
