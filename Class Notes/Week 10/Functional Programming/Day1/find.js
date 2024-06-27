//find: Return the first element which satisfies the condition

const ages = [24, 22, 25, 32, 35, 18]

const age = ages.find((age) => age < 20)

console.log(age)

//Example 2
//remember that each method takes a callback function as a parameter
//if we have method names.find(callback function)
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const result = names.find((name) => name.length > 7) //the arrow function is used here, remember and
//arrow function does not contain the keyword ""function" and it does have a function name, it only passes
//a parameter, that parameter represents the elements of the array 
console.log(result)
//(element, index, array)

//Find used on an array of objects
const scores = [
    { name: 'Asabeneh', score: 95 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]
  
  const score = scores.find((user) => user.score > 80)
  console.log(score)



  //indIndex: Return the position of the first element which satisfies the condition

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const ages = [24, 22, 25, 32, 35, 18]

const result = names.findIndex((name) => name.length > 7)
console.log(result) // 0

const age = ages.findIndex((age) => age < 20)
console.log(age) // 5