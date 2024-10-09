let letters = ['a', 'b', 'c', 'd', 'e'];
console.log(letters);

// reverse array (mutate the original array)
let reversedArray = letters.reverse();
console.log(reversedArray);
console.log(letters);

//concatenate
let numbers = [1, 2, 3, 4,];
let concatedArray = numbers.concat(letters);
let concatedArray2 = letters.concat(numbers);
console.log("concatenated",  concatedArray);
console.log("concatenated2", concatedArray2);

//join
let joinedArray = letters.join(", ");
console.log("joinedArray", joinedArray, "And type of joined array is : ", typeof joinedArray);

//slice 
//original array is not mutated
//return new array
let sliceArray = numbers.slice(1, 3);//last (3rd) element will not be sliced
console.log("sliceArray", sliceArray);
console.log("another sliceArray", numbers.slice(2));
console.log("another sliceArray", numbers.slice(-3));


// splice
// original array mutated
//arr.splice(index, deletedValue, valueToAdd1, valueToAdd2, valueToAdd3...);
let num = [1, 2, 3, 4, 5, 6, 7];
let splicedArray = num.splice(1, 3, 34, 45);
console.log("original array: ", num);
console.log("spliced array: ", splicedArray);

//at method
console.log(num.at(2));

//map
let mappedArray = num.map((salary) => {
    let incrementedSalary = salary/2+salary
    return incrementedSalary;
})
console.log("mappedArray: ", mappedArray);

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,];
//filter
//expect true or false not anything, keep the elements if true otherwise remove them
let filteredArray = nums.filter((num) => {
    if(num%2==0) {
        return num;
    }
})
console.log("filteredArray (EVEN NO): ", filteredArray);

//reduce  
// run reducer function for each array element
//array.reduce(function(total, currrentValue), initialValue)
//it returns single value
let reducedArray = nums.reduce(function(total, currrentValue){
    return total+currrentValue
}, 0); // sum of nums
console.log('reducedArray: ', reducedArray);

//find
let students = [
    {
        id: 1,
        name: 'manish',
        rollno: 123
    },
    {
        id: 2,
        name: 'swati',
        rollno: 124
    },
    {
        id: 3,
        name: 'manoj',
        rollno: 125
    }
];
let foundArray = students.find((student) => {
    return student.id === 2; // first element of the array will be returned that has the given id
})
console.log("foundArray", foundArray);
 
//findIndex : same as find but give the found element index, otherwise -1
let ages = [23, 26, 27, 28, 29, 30, 31];
let foundArrayIndex = ages.findIndex(age=>{
    return age > 25; // can give conditional statement too not like find
})
console.log("foundArrayIndex", foundArrayIndex);

// some : true if any array element pass the test
// every: true if all elements pass the test
let scores = [56, 97, 38, 15, 70, 45];
let somedArray = scores.some(score=>{
    return score > 50
})
let everiedArray = scores.every(score => {
    return score > 40;
})
console.log("somed Array: ", somedArray); // true
console.log("everied array: ", everiedArray); // false

// flat
// it creates a new array with the elements of the subarrays (concate them as one)
let parentArray = [12, 13, 14, 15, [21, 22,[51,52], 23, 24, 25]];
console.log("parent Array: ", parentArray);
let fatArray = parentArray.flat(2) // we give 2 as argument to flat level two nested array cause only one level of array is flattened without arguments
console.log("fat Array: ", fatArray);

//flatMap
let village = [
    {
        name: "sehore",
        population: 234543,
        casts: ["st", "sc"]
    },
    {
        name: "Amlaha",
        population: 124325,
        casts: ["gen", "sc", "obc"]
    }
]

let flatMapArray = village.flatMap(item => {
    if (item.name== "sehore"){
        return [item, {
            name: "mobile",
            qty: 1,
            price: "free"
        }]
    }else{
            return [item];
    }
    
})
console.log("flatMap Array: ", flatMapArray);

let mapArray = village.map(item => {
    if (item.name== "sehore"){
        return [item, {
            name: "mobile",
            qty: 1,
            price: "free"
        }]
    }else{
            return [item];
    }
    
})
console.log("Map Array: ", mapArray);

// sort : sorting method

let sortedArray = letters.sort(); // default sorting
console.log("sorted Array", sortedArray);

let sortedArray2 = nums.sort((a, b) => (b-a))
console.log("sorted Array2", sortedArray2);

// chain of methods

let numb = [1,2,3,4,5,6];
let resultArray = numb.slice(0,3).splice(0, 1, 34, 34, 43);
console.log("result Array", resultArray);
console.log("numb Array", numb);
let resultArray2 = numb.splice(0, 1, 34, 34, 43).slice(0, 3);
console.log("result Array2", resultArray2);
console.log("numb Array2", numb);

