//fileter:  Filters items which full fill filtering conditions and returns a new array

const countries = [
    "Albania",
    "Bolivia",
    "Canada",
    "Denmark",
    "Finland",
    "Ireland"
]
//define a new variable to store your newly changed array in 
//takes a callback function as a parameter
//array name.filter(callback function(element, index, array))new
//Arrow function
//let newArray = (country) => console.log("New Array") //arrow function
//arrow function does not contain the keyword "function" it only passes a parameter
const countriesContainingLand = countries.filter((country) => country.includes('land'))
console.log(countriesContainingLand)

const countriedContainingia = countries.filter(country) => country.endWith('ia')

//quick review of anonymous function & arrow functions
//An anonymous function is a function stored in a variable, this function does not
//have a name - it has the keyword function
//Example of an anymous function
const anonymousFun = function() {
    console.log(
        'I am an anonymous function and my value is stored in anonymousFun'
      )
    }


 // This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square(n) {
    return n * n
  }
  
  console.log(square(2)) // 4
  
  const square = n => {
    return n * n
  }
  
  console.log(square(2))  // -> 4
  
  // if we have only one line in the code block, it can be written as follows, explicit return
  const square = n => n * n  // -> 4


  const names = ["Johnnie", "Donnie", "Ronnie", "Bob", "Bobby"]
  //Create a new Array and apply the filter method to indicate the names that end with "nie"