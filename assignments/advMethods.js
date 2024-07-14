// Methods

// Array Methods

// push and pop
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
// push add element in the last index
arr.push(32);
console.log(arr);
// pop remove element from the last index
arr.pop();
console.log(arr);
// remove first element
arr.shift();
console.log(arr);
// unshift : add element in the first index
arr.unshift(52);
console.log(arr);
// splice adds/removes elements from an array
arr.splice(1,3); // remove elements from index 1 to index 3
console.log(arr);
arr.splice(7, 8, 9, 15);
console.log(arr);

