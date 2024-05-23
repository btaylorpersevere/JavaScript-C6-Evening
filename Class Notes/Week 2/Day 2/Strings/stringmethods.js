// //String Methods
// // Everything in JavaScript is an object. A string is a primitive data type that means we can not modify it once it is created. The string object has many string methods. There are different string methods that can help us to work with strings.

// // 1.  length: The string length method returns the number of characters in a string included empty space.
// // Example:

// // let js = 'JavaScript'
// // console.log(js.length)         // 10
// // let firstName = 'Asabeneh'
// // console.log(firstName.length)  // 8
// // let jslength = js.length
// // console.log(jslength)


// // 2.  Accessing characters in a string: We can access each character in a string using its index. In programming, counting starts from 0. The first index of the string is zero, and the last index is the length of the string minus one.


//Let us access different characters in a string
// let string = 'JavaScript'
// let firstLetter = string[4]

// console.log(firstLetter)           // 

// let secondLetter = string[1]       // a
// let thirdLetter = string[2]
// let lastLetter = string[9]

// // console.log(lastLetter)            // t
//  let lastIndex = string.length - 1

// // console.log(lastIndex)  // 9
// // console.log(string[lastIndex])    // t



// // 3.  toUpperCase(): this method changes the string to uppercase letters.
// let string = 'JavaScript'

// console.log(string.toUpperCase())     // JAVASCRIPT

// let firstName = 'Asabeneh'

// console.log(firstName.toUpperCase())  // ASABENEH

// let country = 'Finland'

// console.log(country.toUpperCase())    // FINLAND

// // 4. toLowerCase(): this method changes the string to lowercase letters.
// let string = 'JavasCript'

// console.log(string.toLowerCase())     // javascript

// let firstName = 'Asabeneh'

// console.log(firstName.toLowerCase())  // asabeneh

// let country = 'Finland'

// console.log(country.toLowerCase())   // finland

// 4. substr(): It takes two arguments, the starting index and number of characters to slice.
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

let country = 'Finland'
console.log(country.substr(3, 4))   // land

//5. substring(): It takes two arguments, the starting index and the stopping index but it doesn't include the character at the stopping index.
// let string = 'JavaScript'

// console.log(string.substring(0,4))     // Java
// console.log(string.substring(4,10))    // Script
// console.log(string.substring(4))       // Script

// let country = 'Finland'

// console.log(country.substring(0, 3))   // Fin
// console.log(country.substring(3, 7))   // land
// console.log(country.substring(3))      // land
// split(): The split method splits a string at a specified place.
// let string = '30 Days Of JavaScript'


// console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
// console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

// let firstName = 'Asabeneh'

// console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
// console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

// let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

// console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
// console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

// 6. trim(): Removes trailing space in the beginning or the end of a string.
// let string = '   30 Days Of JavaScript   '

// console.log(string)
// console.log(string.trim(' '))

// let firstName = ' Asabeneh '

// console.log(firstName)
// console.log(firstName.trim())  // still removes spaces at the beginning and the end of the string
//    30 Days Of JavasCript   
// 30 Days Of JavasCript
//   Asabeneh 
// Asabeneh

// 7.  includes(): It takes a substring argument and it checks if substring argument exists in the string. includes() returns a boolean. If a substring exist in a string, it returns true, otherwise it returns false.
// let string = '30 Days Of JavaScript'

// console.log(string.includes('Days'))     // true
// console.log(string.includes('days'))     // false - it is case sensitive!
// console.log(string.includes('Script'))   // true
// console.log(string.includes('script'))   // false
// console.log(string.includes('java'))     // false
// console.log(string.includes('Java'))     // true

// let country = 'Finland'

// console.log(country.includes('fin'))     // false
// console.log(country.includes('Fin'))     // true
// console.log(country.includes('land'))    // true
// console.log(country.includes('Land'))    // false

// 8. replace(): takes as a parameter the old substring and a new substring.
// string.replace(oldsubstring, newsubstring)
// let string = '30 Days Of JavaScript'
// console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

// let country = 'Finland'
// console.log(country.replace('Fin', 'Noman'))       // Nomanland
// charAt(): Takes index and it returns the value at that index
// string.charAt(index)
// let string = '30 Days Of JavaScript'
// console.log(string.charAt(0))        // 3

// let lastIndex = string.length - 1
// console.log(string.charAt(lastIndex)) // t

// 9. charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
// string.charCodeAt(index)
// let string = '30 Days Of JavaScript'
// console.log(string.charCodeAt(3))        // D ASCII number is 68

// let lastIndex = string.length - 1
// console.log(string.charCodeAt(lastIndex)) // t ASCII is 116

// 10. indexOf(): Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1
// string.indexOf(substring)
// let string = '30 Days Of JavaScript'

// console.log(string.indexOf('D'))          // 3
// console.log(string.indexOf('Days'))       // 3
// console.log(string.indexOf('days'))       // -1
// console.log(string.indexOf('a'))          // 4
// console.log(string.indexOf('JavaScript')) // 11
// console.log(string.indexOf('Script'))     //15
// console.log(string.indexOf('script'))     // -1

// 11. lastIndexOf(): Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1
// //syntax
// string.lastIndexOf(substring)
// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

// console.log(string.lastIndexOf('love'))       // 67
// console.log(string.lastIndexOf('you'))        // 63
// console.log(string.lastIndexOf('JavaScript')) // 38
// concat(): it takes many substrings and joins them.
// string.concat(substring, substring, substring)
// let string = '30'
// console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

// let country = 'Fin'
// console.log(country.concat("land")) // Finland

// startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
// //syntax
// string.startsWith(substring)
// let string = 'Love is the best to in this world'

// console.log(string.startsWith('Love'))   // true
// console.log(string.startsWith('love'))   // false
// console.log(string.startsWith('world'))  // false

// let country = 'Finland'

// console.log(country.startsWith('Fin'))   // true
// console.log(country.startsWith('fin'))   // false
// console.log(country.startsWith('land'))  //  false
// endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
// string.endsWith(substring)
// let string = 'Love is the most powerful feeling in the world'

// console.log(string.endsWith('world'))         // true
// console.log(string.endsWith('love'))          // false
// console.log(string.endsWith('in the world')) // true

// let country = 'Finland'

// console.log(country.endsWith('land'))         // true
// console.log(country.endsWith('fin'))          // false
// console.log(country.endsWith('Fin'))          //  false
// search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern.
// string.search(substring)
// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
// console.log(string.search('love'))          // 2
// console.log(string.search(/javascript/gi))  // 7
// match: it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null. Let us see how a regular expression pattern looks like. It starts with / sign and ends with / sign.
// let string = 'love'
// let patternOne = /love/     // with out any flag
// let patternTwo = /love/gi   // g-means to search in the whole text, i - case insensitive
// Match syntax

// // syntax
// string.match(substring)
// let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
// console.log(string.match('love'))
// ["love", index: 2, input: "I love JavaScript. If you do not love JavaScript what else can you love.", groups: undefined]
// let pattern = /love/gi
// console.log(string.match(pattern))   // ["love", "love", "love"]
// Let us extract numbers from text using a regular expression. This is not the regular expression section, do not panic! We will cover regular expressions later on.

// let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
// let regEx = /\d+/

// // d with escape character means d not a normal d instead acts a digit
// // + means one or more digit numbers,
// // if there is g after that it means global, search everywhere.

// console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
// console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]
// repeat(): it takes a number as argument and it returns the repeated version of the string.
// string.repeat(n)
// let string = 'love'
// console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove

