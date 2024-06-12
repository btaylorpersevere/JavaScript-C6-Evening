// // Anonymous Function
// // Anonymous function or without name

const anonymousFun = function() {   console.log(
//     'I am an anonymous function and my value is stored in anonymousFun'
   )
}
anonymousFun()


 // Expression Function
 // Expression functions are anonymous functions. After we create a function without a name and we assign it to a variable. To return a value from the function we should call the variable. Look at the example below.

 // Function expression
 const square = function(n) {
  return n * n
 }
 //Create an anonymous function that takes two arguments and squares them if the arguments are greater than zero. Print your results

 console.log(square(2)) // -> 4

//  Self Invoking Functions
//  Self invoking functions are anonymous functions which do not need to be called to return a value.

// (function(n) {
//   console.log(n * n)
// })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below

// let squaredNum = (function(n) {
//   return n * n
// })(10)

// console.log(squaredNum)

// Arrow Function
//  Arrow function is an alternative to write a function, however function declaration and arrow function have some minor differences.

 // Arrow function uses arrow instead of the keyword function to declare a function. Let us see both function declaration and arrow function.

 // This is how we write normal or declaration function
//  Let us change this declaration function to an arrow function
// function square(n) {
//   return n * n
// }

// console.log(square(2)) // 4
//anonymous function
const square = function(num)

// const square = nu, => {
//   return n * n
// }

// console.log(square(2))  // -> 4

// // if we have only one line in the code block, it can be written as follows, explicit return
// const square = n => n * n  // -> 4
// const changeToUpperCase = arr => {
//   const newArr = []
//   for (const element of arr) {
//     newArr.push(element.toUpperCase())
//   }
//   return newArr
// }

// const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
// console.log(changeToUpperCase(countries))

// // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
// const printFullName = (firstName, lastName) => {
//   return `${firstName} ${lastName}`
// }

// console.log(printFullName('Asabeneh', 'Yetayeh'))
// The above function has only the return statement, therefore, we can explicitly return it as follows.

// const printFullName = (firstName, lastName) => `${firstName} ${lastName}`

// console.log(printFullName('Asabeneh', 'Yetayeh'))

// // Function with default parameters
// // Sometimes we pass default values to parameters, when we invoke the function if we do not pass an argument the default value will be used. Both function declaration and arrow function can have a default value or values.

// // syntax
// // Declaring a function
// function functionName(param = value) {
//   //codes
// }

// // Calling function
// functionName()
// functionName(arg)
// Example:

// function greetings(name = 'Peter') {
//   let message = `${name}, welcome to 30 Days Of JavaScript!`
//   return message
// }

// console.log(greetings())
// console.log(greetings('Asabeneh'))
// function generateFullName(firstName = 'Asabeneh', lastName = 'Yetayeh') {
//   let space = ' '
//   let fullName = firstName + space + lastName
//   return fullName
// }

// console.log(generateFullName())
// console.log(generateFullName('David', 'Smith'))
// function calculateAge(birthYear, currentYear = 2019) {
//   let age = currentYear - birthYear
//   return age
// }

// console.log('Age: ', calculateAge(1819))
// function weightOfObject(mass, gravity = 9.81) {
//   let weight = mass * gravity + ' N' // the value has to be changed to string first
//   return weight
// }

// console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
// console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon
// Let us see how we write the above functions with arrow functions

// // syntax
// // Declaring a function
// const functionName = (param = value) => {
//   //codes
// }

// // Calling function
// functionName()
// functionName(arg)
// Example:

// const greetings = (name = 'Peter') => {
//   let message = name + ', welcome to 30 Days Of JavaScript!'
//   return message
// }

// console.log(greetings())
// console.log(greetings('Asabeneh'))
// const generateFullName = (firstName = 'Asabeneh', lastName = 'Yetayeh') => {
//   let space = ' '
//   let fullName = firstName + space + lastName
//   return fullName
// }

// console.log(generateFullName())
// console.log(generateFullName('David', 'Smith'))
// const calculateAge = (birthYear, currentYear = 2019) => currentYear - birthYear
// console.log('Age: ', calculateAge(1819))
// const weightOfObject = (mass, gravity = 9.81) => mass * gravity + ' N'
  
// console.log('Weight of an object in Newton: ', weightOfObject(100)) // 9.81 gravity at the surface of Earth
// console.log('Weight of an object in Newton: ', weightOfObject(100, 1.62)) // gravity at surface of Moon
