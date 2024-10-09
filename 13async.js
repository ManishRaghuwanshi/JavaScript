// Asynchronous Javascript
//Asynchronous JavaScript refers to the ability to perform multiple tasks at once without blocking the main thread of execution

// making HTTP request example
let request = new XMLHttpRequest();
console.log("XMLHttpRequest: " + request);
// set up the request object
request.open("GET", "https://jsonplaceholder.typicode.com/todos");
//sending the request
request.send();
;;