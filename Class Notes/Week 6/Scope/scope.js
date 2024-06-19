// A globally declared variable can be accessed every where in the same file. But the term global is relative. It can be global to the file or it can be global relative to some block of codes.

//
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
function letsLearnScope() {
  console.log(a, b) // JavaScript 10, accessible
  if (true)can access {
    let a = 'Python'
    let b = 100
    console.log(a, b) // Python 100
  }
  console.log(a, b)
}
letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible

// Local scope
// A variable declared as local can be accessed only in certain block code.
// Block Scope
// Function Scope
///scope.js
let a = 'JavaScript' // is a global scope it will be found anywhere in this file
let b = 10 // is a global scope it will be found anywhere in this file
 // Function scope
 function letsLearnScope() {
   console.log(a, b) // JavaScript 10, accessible  
   let value = false
 // block scope
   if (true) {
    // we  from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let c = 30
    let d = 40
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
   // we can not access c because c's scope is only the if block
   console.log(a, b, value) // JavaScript 10 true
// }
// letsLearnScope()
// console.log(a, b) // JavaScript 10, accessible
// Now, you have an understanding of scope. A variable declared with var only scoped to function but variable declared with let or const is block scope(function block, if block, loop block, etc). Block in JavaScript is a code in between two curly brackets ({}).

// //scope.js
// function letsLearnScope() {
//   var gravity = 9.81
//   console.log(gravity)

// }
// // console.log(gravity), Uncaught ReferenceError: gravity is not defined

// if (true){
//   var gravity = 9.81
//   console.log(gravity) // 9.81
// }
// console.log(gravity)  // 9.81

// for(var i = 0; i < 3; i++){
//   console.log(i) // 0, 1, 2
// }
// console.log(i) // 3