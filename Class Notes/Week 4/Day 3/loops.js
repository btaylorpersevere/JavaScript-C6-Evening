
 // ///////////////////////////////for Loop///////////////////////////////////////////////
 // For loop structure
// for(initialization, condition, increment/decrement){
     // code goes here
 //   }


 for(let i=0; i<=5; i++ ){
      console.log(i)
  }

 for(let i=5; i>=0; i-- ){      // 5 4 3 2 1 0
     console.log(i)
 }

// 0*0=0
// 1*1=1
// 2*2=4
// 3*3=9
// 4*4=16
// 5*5=25

////////////////////////////////////////while loop///////////////////////////////////////
// while(condition){
/     //task code 
//

let i=0;
while(i<=5){
    console.log(i)
    i++
}




//////////////////////////////////////// do while loop////////////////////////////////////

let i=0;
 // do{/ //     //task code 
// // } while(condition)
 do{
     console.log(i)
    i++
 } while(i<=5)

// ///////////////////////////// for of loop//////////////////////////////////////////////
 for (const element of arr) {
//     // code goes here
   }

const listofNumbers=[1,2,3,4,5,6,7]
for(const numberinTheList of listofNumbers){
    console.log(numberinTheList)
}

const country=["US","Thiland","Canada"]
for(const names of country){
    console.log(names)
}

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
// ///////////////////////////////////////////break/////////////////////////////////////
//Break is used to interrupt a loop.




/////////////////////////////////////// continue///////////////////////////////////////
//We use the keyword continue to skip a certain iterations.








// //..........................................To do .......................................
// // Use for loop to iterate from 0 to 100 and print only even numbers

// // Use for loop to iterate from 0 to 100 and print only odd numbers

// //Use for loop to iterate from 0 to 100 and print the sum of all numbers.



// ///////////////////////////////////////////Challenge///////////////////////////////////////
// let countries=["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// //Using the above countries array, create an array for countries length'.
// //Expected outcome is [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]


// //While loops repeats an infinite amount of times 
// //while loops
// //let i = 0
// while (i <= 5) {
//   console.log(i)
//   i++
// }
// // 0 1 2 3 4 5

// //do while loop
// let i = 0
//  do {
//   console.log(i)
//   i++
// } while (i <= 5)
// // 0 1 2 3 4 5

// //For of Loop - used for arrays
// for (const element of arr) {
//     console.log(num)
// }

// //example
// const numbers = [1, 2, 3, 4, 5]
// for (const num of numbers) {
//     console.log(num)
// }