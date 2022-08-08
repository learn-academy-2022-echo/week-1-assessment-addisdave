// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters.
// Use the two sets of test variables provided.

// Pseudo code: 
// create a function with a name myFruits
// Arguments are two strings
// Returns the string with more characters.

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
 
if (fruit1.length < fruit2.length) {
    return fruit1
// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"

 if (fruit3.length < fruit4.length ) {
        return fruit4}
}
console.log(myFruits(fruit1, fruit2))
console.log(myFruits(fruit3, fruit4))

// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code: create function name it myTemp
// argument is any number
// returns if number is below boiling point

const temp1 = 42
const temp2 = 350
const temp3 = 212

const myStove = (temp) => {
    if (temp < 212) {
        return "Cannot boil water"
    } else if (temp > 212 ) {
        return "Can boil water"
    }
}
console.log(myStove (350))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
// combine two arrays
// return the length in variables

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

console.log(myNumbers1.concat(myNumbers2))
var combArrays = myNumbers1.concat(myNumbers2)
console.log(combArrays)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code:
// code that reverse 
// leters of string

const currentCohort = "Echo 2022"
console.log(currentCohort.split("").reverse().join(""))


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:
// function determines wherer odd or even
// argument is number

const myArray = [13, 34, 5, 10, 27, 42]

 if(myArray % 2 === 0) {
    console.log("Even")
 } else {
    console.log("Odd")
 }


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
// function that subtracts
// numbers

// Set one:
const number1 = 58
const number2 = 100

if (number1 < number2) {
    console.log(number2 - number1)
}    

// Set two:
const number3 = 27
const number4 = 24

if(number4 < number3) {
    console.log(number3 - number4)
 }