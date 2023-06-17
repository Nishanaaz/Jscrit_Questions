// Write a program-
//a- to find the square root of a given number.
/*let squareRoot =9;
console.log(Math.sqrt(squareRoot));

//b- to find the value of PI.
let PI=Math.PI;
console.log(PI);


//c-to generate a random number between 1 to 10;
console.log(Math.random()*10);

//d-to round a given decimal number nearest integer;
console.log(Math.round(24.556));

//e-to find the absolute value of a given number;
console.log(Math.abs(-23));

//f- to calculate the power if a given base to a given exponent;
let a=2;
let b=4;
console.log(Math.pow(a,b));

//Question 2-
// Write a program
// a- to display the current date and time in ISO format(YYY-MM-DDTHH:MM:SSM)
let date=new Date;
console.log(date);*/




//b.that gets the current date and time and displays it in a human-readable format.
/*let current_date=new Date;
let options={
    weekday: 'long', 
    year:'numeric',
    month:'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true

}
console.log(current_date.toLocaleString('en-US',options));
*/


//Using moment format.
// const moment = require('moment');
// const currentDateTime = moment().format("YYYY-MM-DD HH:mm:ss");
// console.log(currentDateTime);






//b.
/*let current=new Date();
const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
const months=["January","February","March","April","March","April","May","June","July","August","September","October","November","December"];
let month = months[current.getMonth()];
let day=days[current.getDay()];
let year=current.getFullYear();
let hour=current.getHours();
let minute=current.getMinutes();
console.log("Today is",day,month, year,"and the time is",hour+":"+minute);





//c-that takes a date as and returns the day of the week (e.g. "Monday", "Tuesday", etc.) in string format.
let UserDate=new Date("2021-03-25");
let day_of_week=days[UserDate.getDay()];
console.log("Day was",day_of_week);







//d-that takes a date and returns the number of days in the month that the date falls in.
function getDaysInMonth(date) {
    const year=date.getFullYear();
    const month=date.getMonth()+1;
    const lastday=new Date(year,month,0);

    return lastday.getDate();
}   
const Userdate= new Date("2021-03-25");
console.log(getDaysInMonth(Userdate));