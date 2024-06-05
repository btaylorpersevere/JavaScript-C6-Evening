// // Creating static values with fill
// // fill: Fill all the array elements with a static value

// const arr = Array() // creates an an empty array
// console.log(arr)

// const eightXvalues = Array(8).fill('X') // it creates eight element values filled with 'X'
// console.log(eightXvalues) // ['X', 'X','X','X','X','X','X','X']

// const eight0values = Array(8).fill(0) // it creates eight element values filled with '0'
// console.log(eight0values) // [0, 0, 0, 0, 0, 0, 0, 0]

// const four4values = Array(4).fill(4) // it creates 4 element values filled with '4'
// console.log(four4values) // [4, 4, 4, 4]

// // Concatenating array using concat
// // concat:To concatenate two arrays.

// const firstList = [1, 2, 3]
// const secondList = [4, 5, 6]
// const thirdList = firstList.concat(secondList)

// console.log(thirdList) // [1, 2, 3, 4, 5, 6]
// const fruits = ['banana', 'orange', 'mango', 'lemon']                 // array of fruits
// const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of vegetables
// const fruitsAndVegetables = fruits.concat(vegetables)                 // concatenate the two arrays

// console.log(fruitsAndVegetables)


// // Getting array length
// // Length:To know the size of the array

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.length) // -> 5 is the size of the array

// // Getting index an element in arr array
// // indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.

// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.indexOf(5)) // -> 4
// console.log(numbers.indexOf(0)) // -> -1
// console.log(numbers.indexOf(1)) // -> 0
// console.log(numbers.indexOf(6)) // -> -1

// Check an element if it exist in an array.

// Check items in a list
// let us check if a banana exist in the array

const fruits = ['banana', 'orange', 'mango', 'lemon']
let index = fruits.indexOf('banana')  // 0
console.log(index)

// if(index === -1){
//    console.log('This fruit does not exist in the array')  
// } else {
//     console.log('This fruit does exist in the array')
// }
// // This fruit does exist in the array
 // Getting last index of an element in array
 // lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

// const numbers = [1, 2, 3, 4, 5, 3, 1, 2]

// console.log(numbers.lastIndexOf(2)) // 7
// console.log(numbers.lastIndexOf(0)) // -1
// console.log(numbers.lastIndexOf(1)) //  6
// console.log(numbers.lastIndexOf(4)) //  3
// console.log(numbers.lastIndexOf(6)) // -1
// // includes:To check if an item exist in an array. If it exist it returns the true else it returns false.

 // Checking array
 // Array.isArray:To check if the data type is an array

// const numbers = [1, 2, 3, 4, 5]
// console.log(Array.isArray(numbers)) // true

// const number = 100
// console.log(Array.isArray(number)) // false

 // Converting array to string
 // toString:Converts array to string

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.toString()) // 1,2,3,4,5

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

 // Joining array elements
 // join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string. By default, it joins with a comma, but we can pass different string parameter which can be joined between the items.

// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers.join()) // 1,2,3,4,5

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// console.log(names.join()) // Asabeneh,Mathias,Elias,Brook
// console.log(names.join('')) //AsabenehMathiasEliasBrook
// console.log(names.join(' ')) //Asabeneh Mathias Elias Brook
// console.log(names.join(', ')) //Asabeneh, Mathias, Elias, Brook
// console.log(names.join(' # ')) //Asabeneh # Mathias # Elias # Brook

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ] // List of web technologies

// console.log(webTechs.join())       // "HTML,CSS,JavaScript,React,Redux,Node,MongoDB"
// console.log(webTechs.join(' # '))  // "HTML # CSS # JavaScript # React # Redux # Node # MongoDB"

 // Slice array elements

 // Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.

   const numbers1 = [1,2,3,4,5]
     console.log(numbers1.slice(3, 5))

    //Splice method in array
 // Splice: It takes three parameters:Starting position, number of items to be removed and number of items to be added.

//   const numbers = [1, 2, 3, 4, 5]
//   numbers.splice()
//   console.log(numbers)                // -> remove all items

   const numbers = [1, 2, 3, 4, 5]
	numbers.splice(0,1)
  console.log(numbers)            // remove the first item

   const numbers2 = [1, 2, 3, 4, 5, 6]
numbers2.splice(3, 3, 7, 8, 9)
  console.log(numbers2.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item
  // and replace three items
  console.log(numbers2)

