
// => Solve these questions.

// Problem 1: Write a function to calculate the area of a triangle.


/* =======
function triangle(width, height) {
    let area =( width * height)/2;
    console.log(area);
}

triangle(4,5);



// 2nd Option

let a = 5; 
let b = 6; 
let c = 7; 
let s = (a + b + c)/2;
let area =  Math.sqrt(s*((s-a)*(s-b)*(s-c)));
console.log(area);

=========*/


// Problem 2: Write a function to convert degrees to radians.

/*
function degreeToRadians(degrees) {
    let pi = Math.PI;
    return degrees * (pi/180);
}

console.log(degreeToRadians(45));
 
*/

// Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.

/*
function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        let factorial = 1;
        for (let i = 2; i <= num; i++) {
             factorial = factorial * i;
            
        }
        return factorial;
    }
}

console.log(calculateFactorial(4));

*/


// Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.

/*

function isPrime(number) {
    if (number <= 1) {
        return false;
    } 
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}


console.log(isPrime(17));

*/

// Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.

/*

let arr1 = ['mehedi', 30];
let arr2 =['Robiul', 20];

let margeArrays = arr1.concat(arr2);
console.log(margeArrays);

*/


// Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.

/*

function isLeapYear(year) {
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
        return "This is a leap Year";
    }else{
        return "Not Leap Year";
    }
}

console.log(isLeapYear(2023));

*/

// Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

/*

const array =[10, 21, 32, 21,10];

function removeDuplicates(array) {
    let newArray = [];
    for (let i of array){
        if (newArray.indexOf(i) === -1) {
            newArray.push(i);
        }
        
    }
    console.log(newArray);
}

removeDuplicates(array);

*/

// Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

/*

function convertToCelsius(temperature) {
    newTemparature = parseFloat(temperature);
    console.log((newTemparature-32)/1.8);
}

convertToCelsius(32);


*/

// Problem 9: Write a function to find the maximum of five numbers.

/*

let number = Math.max(10,20,30,5,8);
console.log(number);

*/



// Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]

/*


function evenOdd(number) {
    let newNumber =  number.length;
    if (newNumber % 2 === 0) {
        console.log("The number is even");
        
    } else {
        console.log("The number is Odd");
    }
}

evenOdd("Hello");
evenOdd("JavaScript");

*/


// => Answer any 4 questions.

// 1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

/*
ans: if else statement use to choose  between two block Options but switch case statement used for numerous Options.

For numerous statements you can use several if statements. For numerous statements in Switch you only have one expression.

If the condition inside the if block is false, the statement inside the else block is executed. If the condition inside the switch statement is false, the default statements are run.


// 2. What is JavaScript, and what is its primary purpose in web development?

ans: JavaScript is a most powerfull language for creating dynamic web page. It creates elements for improving site visitors interaction with web pages, such as dropdown menus, animated graphics, and dynamic background colors.Its primary purpose to provide an interface between a website and its Users. 

// 3. Explain the difference between var, let, and const when declaring variables in JavaScript.

ans: var can be update and redeclared within its scope. let can be update but can not redeclared. const can not be update or redeclared.

// 4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.

ans: A variable declared out side of a function is global scope.It can be used anywhere of the programimg.it can be changed inside a function.

A local scope veriable declared inside the function it can be accessed only inside the function. When we try to accessed it outside the function will give a error. 


// 5. What is the difference between "null" and "undefined" in JavaScript?

ans: Null is an assignment value. It can be assign to a variable which indicates that a variable does not point any Object. Thats means absence of value for a variable. Null is an Object.

Undefined is not an assignment value. Its means a variable declared but not assigned a value. Undefined indicates the absence of the variable itself. Undefined is a Type.



// => Assignment Deadline + Marks:
// 1. Each question value is 5 marks.
// 2. The deadline to submit your assignment is October 25, 2023, at 8:00 PM.

*/
