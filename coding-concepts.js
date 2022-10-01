// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 
// [ "tangerine", "magneta", "lilac", "daffodil", "indigo"]
// b) Verify and explain:
// .push is a built-in method mutator that adds a value on to the end of an array. 

// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: 10 
// b) Verify and explain: length is the last index of an array plus 1. 



// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: the fourth indexed character "o"
// b) Verify and explain: Indexes give a particular location of a value. 


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain:Indexes start from 0 starting "JavaScript"


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: Changes the letters to uppercase. 
// b) Verify and explain: nothing happened. It needs to be put in as a string first out of the array. 


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: wrong answer due to the name miss spelled. 
// b) Verify and explain: with the name corrected, we get "3", the total string length in the array.
