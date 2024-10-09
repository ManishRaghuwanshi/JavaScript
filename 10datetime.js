// Date and Time
let todayDate = new Date();
console.log("todayDate:", todayDate);
console.log("full year:", todayDate.getFullYear());
console.log("month:", todayDate.getMonth());
console.log("day:", todayDate.getDay());
// and more...

// Create a new element for the clock
const clockElement = document.querySelector('#clock');

// Digital clock
let latestTime = () => {
    let currentDate = new Date();
    let getHour = currentDate.getHours();
    let getMinute = currentDate.getMinutes();
    let getSecond = currentDate.getSeconds();

    // Add zero padding for single digit minutes/seconds
    getHour = getHour < 10 ? '0' + getHour : getHour;
    getMinute = getMinute < 10 ? '0' + getMinute : getMinute;
    getSecond = getSecond < 10 ? '0' + getSecond : getSecond;

    // Update the clock element
    clockElement.innerHTML = `Current Time: ${getHour}:${getMinute}:${getSecond}`;
};

// Run the clock every second
let clock = setInterval(latestTime, 1000);
