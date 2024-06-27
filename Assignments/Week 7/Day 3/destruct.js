// Destructuring is a way to unpack arrays, and objects and assigning to a distinct variable.

//When using large frameworks that pass objects to functions which a lot of values, if we only need one or two values, we can destructure it
// Destructing Arrays
const numbers = [1, 2, 3]
//destructing the numbers array
  let [numOne, numTwo, numThree] = numbers

   console.log(numOne, numTwo, numThree)

//   let numOne = numbers[0]
//   let numTwo = numbers[1]
//   let numThree = numbers[2]
  
//   console.log(numOne, numTwo, numThree)

//create an array of 5 names
//destructure the array 
//   1 2 3

  const names = ['Asabeneh', 'Brook', 'David', 'John']
  let [firstPerson, , thirdPerson, fourthPerson] = names

   console.log(firstPerson, secondPerson,thirdPerson, fourthPerson)

// Asabeneh Brook David John

  const scientificConstants = [2.72, 3.14, 9.81, 37, 100]
  let [e, pi, gravity, bodyTemp, boilingTemp] = scientificConstants

//   console.log(e,pi,gravity, bodyTemp, boilingTemp)
// 2.72 3.14 9.81 37 100

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]
const [frontEnd, backEnd] = fullStack

console.log(frontEnd)
console.log(backEnd)

let frontEnd = fullStack[0]
let backEnd = fullStack[1]

// ["HTML", "CSS", "JS", "React"]
// ["Node", "Express", "MongoDB"]
// If we like to skip one of the values in the array we use additional comma. The comma helps to omit the value at that specific index

//   const numbers = [1, 2, 3]
//   let [numOne, , numThree] = numbers //2 is omitted

//   console.log(numOne, numThree)
// 1 3
//   const names = ['Asabeneh', 'Brook', 'David', 'John']
//   let [, secondPerson, , fourthPerson] = names // first and third person is omitted

//   console.log(secondPerson, fourthPerson)
// Brook John
// We can use default value in case the value of array for that index is undefined:

// const names = [undefined, 'Brook', 'David']
// let [
//   firstPerson = 'Asabeneh',
//   secondPerson,
//   thirdPerson,
//   fourthPerson = 'John'
// ] = names

// console.log(firstPerson, secondPerson, thirdPerson, fourthPerson)  
// Asabeneh Brook David John

// We can not assign variable to all the elements in the array. We can destructure few of the first and we can get the remaining as array using spread operator(...).

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [num1, num2, num3, ...rest] = nums

// console.log(num1, num2, num3)
// console.log(rest)
// 1 2 3
// [4, 5, 6, 7, 8, 9, 10]
// Destructuring during iteration
// const countries = [['Finland', 'Helsinki'], ['Sweden', 'Stockholm'], ['Norway', 'Oslo']]

// for (const [country, city] of countries) {
// console.log(country, city)
// }
// Finland Helsinki
// Sweden Stockholm
// Norway Oslo
// const fullStack = [
//   ['HTML', 'CSS', 'JS', 'React'],
//   ['Node', 'Express', 'MongoDB']
// ]

// for(const [first, second, third] of fullStack) {
// console.log(first, second, third)
// }
// HTML CSS JS
// Node Express MongoDB



// Destructuring Object
// When we destructure the name of the variable we use to destructure should be exactly the same as the key or property of the object. See the example below.

// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200
// }
// let { width, height, area, perimeter } = rectangle

// console.log(width, height, area, perimeter)

console.log (rectangle.width)
console.log(rectanlge.height)
console.log(rectangle.area)



// 20 10 200 undefined
// Renaming during structuring
// const rectanglre = {
//   width: 20,
//   height: 10,
//   area: 200
// }
// let { width: w, height: h, area: a, perimeter: p } = rectangle

// console.log(w, h, a, p)
// 20 10 200 undefined
// If the key is not found in the object the variable will be assigned to undefined. Sometimes the key might not be in the object, in that case we can give a default value during declaration. See the example.

// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200
// }
// let { width, height, area, perimeter = 60 } = rectangle

// console.log(width, height, area, perimeter) //20 10 200 60
// //Let us modify the object:width to 30 and perimeter to 80
// const rectangle = {
//   width: 30,
//   height: 10,
//   area: 200,
//   perimeter: 80
// }
// let { width, height, area, perimeter = 60 } = rectangle
// console.log(width, height, area, perimeter) //30 10 200 80
// Destructuring keys as a function parameters. Let us create a function which takes a rectangle object and it returns a perimeter of a rectangle.

// Object parameter without destructuring
// // Without destructuring
// const rect = {
//   width: 20,
//   height: 10
// }
// const calculatePerimeter = rectangle => {
//   return 2 * (rectangle.width + rectangle.height)
// }

// console.log(calculatePerimeter(rect)) // 60
// //with destructuring
// //Another Example
// const person = {
//   firstName: 'Asabeneh',
//   lastName: 'Yetayeh',
//   age: 250,
//   country: 'Finland',
//   job: 'Instructor and Developer',
//   skills: [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB',
//     'Python',
//     'D3.js'
//   ],
//   languages: ['Amharic', 'English', 'Suomi(Finnish)']
// }
// // Let us create a function which give information about the person object without destructuring

// const getPersonInfo = obj => {
//   const skills = obj.skills
//   const formattedSkills = skills.slice(0, -1).join(', ')
//   const languages = obj.languages
//   const formattedLanguages = languages.slice(0, -1).join(', ')

//   personInfo = `${obj.firstName} ${obj.lastName} lives in ${obj.country}. He is  ${
//     obj.age
//   } years old. He is an ${obj.job}. He teaches ${formattedSkills} and ${
//     skills[skills.length - 1]
//   }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

//   return personInfo
// }

// console.log(getPersonInfo(person))
// Object parameter with destructuring
// const calculatePerimeter = ({ width, height }) => {
//   return 2 * (width + height)
// }

// console.log(calculatePerimeter(rect)) // 60
// // Let us create a function which give information about the person object with destructuring
// const getPersonInfo = ({
//   firstName,
//   lastName,
//   age,
//   country,
//   job,
//   skills,
//   languages
// }) => {
//   const formattedSkills = skills.slice(0, -1).join(', ')
//   const formattedLanguages = languages.slice(0, -1).join(', ')

//   personInfo = `${firstName} ${lastName} lives in ${country}. He is ${age} years old. He is an ${job}. He teaches ${formattedSkills} and ${
//     skills[skills.length - 1]
//   }. He speaks ${formattedLanguages} and a little bit of ${languages[2]}.`

//   return personInfo
// }
// console.log(getPersonInfo(person))
// /*
// Asabeneh Yetayeh lives in Finland. He is  250 years old. He is an Instructor and Developer. He teaches HTML, CSS, JavaScript, React, Redux, Node, MongoDB, Python and D3.js. He speaks Amharic, English and a little bit of Suomi(Finnish)
// */
// Destructuring object during iteration
// const todoList = [
// {
//   task:'Prepare JS Test',
//   time:'4/1/2020 8:30',
//   completed:true
// },
// {
//   task:'Give JS Test',
//   time:'4/1/2020 10:00',
//   completed:false
// },
// {
//   task:'Assess Test Result',
//   time:'4/1/2020 1:00',
//   completed:false
// }
// ]

// for (const {task, time, completed} of todoList){
//   console.log(task, time, completed)
// }
// Prepare JS Test 4/1/2020 8:30 true
// Give JS Test 4/1/2020 10:00 false
// Assess Test Result 4/1/2020 1:00 false
// Spread or Rest Operator
// When we destructure an array we use the spread operator(...) to get the rest elements as array. In addition to that we use spread operator to spread array elements to another array.

// Spread operator to get the rest of array elements
// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let [num1, num2, num3, ...rest] = nums
// ​
// console.log(num1, num2, num3)
// console.log(rest)
// 1 2 3
// [4, 5, 6, 7, 8, 9, 10]
// const countries = [
//   'Germany',
//   'France',
//   'Belgium',
//   'Finland',
//   'Sweden',
//   'Norway',
//   'Denmark',
//   'Iceland'
// ]

// let [gem, fra, , ...nordicCountries] = countries

// console.log(gem)
// console.log(fra)
// console.log(nordicCountries)
// Germany
// France
// ["Finland", "Sweden", "Norway", "Denmark", "Iceland"]
// Spread operator to copy array