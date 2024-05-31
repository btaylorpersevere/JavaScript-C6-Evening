// Window Methods
// Window alert() method
// As you have seen at very beginning alert() method displays an alert box with a specified message and an OK button. It is a builtin method and it takes on argument.

// alert(message)
let alert2 = alert('Welcome to 30DaysOfJavaScript')
console.log(alert2)
// Do not use too much alert because it is destructing and annoying, use it just to test.

// Window prompt() method
// The window prompt methods display a prompt box with an input on your browser to take input values and the input data can be stored in a variable. The prompt() method takes two arguments. The second argument is optional.

// prompt('required text', 'optional text')
let number = prompt('Enter number', 'number goes here')
console.log(number)
// Window confirm() method
// The confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button. A confirm box is often used to ask permission from a user to execute something. Window confirm() takes a string as an argument. Clicking the OK yields true value, whereas clicking the Cancel button yields false value.

const agree = confirm('Are you sure you like to delete? ')
console.log(agree) // result will be true or false based on what you click on the dialog box
// These are not all the window methods we will have a separate section to go deep into window methods.

// Date Object
// Time is an important thing. We like to know the time a certain activity or event. In JavaScript current time and date is created using JavaScript Date Object. The object we create using Date object provides many methods to work with date and time.The methods we use to get date and time information from a date object values are started with a word get because it provide the information. getFullYear(), getMonth(), getDate(), getDay(), getHours(), getMinutes, getSeconds(), getMilliseconds(), getTime(), getDay()

// Creating a time object
// Once we create time object. The time object will provide information about time. Let us create a time object

// const now = new Date()
// console.log(now) // Sat Jan 04 2020 00:56:41 GMT+0200 (Eastern European Standard Time)
// We have created a time object and we can access any date time information from the object using the get methods we have mentioned on the table.

// Getting full year
// Let's extract or get the full year from a time object.

// const now = new Date()
// console.log(now.getFullYear()) // 2020
// Getting month
// Let's extract or get the month from a time object.

// const now = new Date()
// console.log(now.getMonth()) // 0, because the month is January,  month(0-11)
// Getting date
// Let's extract or get the date of the month from a time object.

// const now = new Date()
// console.log(now.getDate()) // 4, because the day of the month is 4th,  day(1-31)
// Getting day
// Let's extract or get the day of the week from a time object.

// const now = new Date()
// console.log(now.getDay()) // 6, because the day is Saturday which is the 7th day
// //  Sunday is 0, Monday is 1 and Saturday is 6
// // Getting the weekday as a number (0-6)
// Getting hours
// Let's extract or get the hours from a time object.

// const now = new Date()
// console.log(now.getHours()) // 0, because the time is 00:56:41
// Getting minutes
// Let's extract or get the minutes from a time object.

// const now = new Date()
// console.log(now.getMinutes()) // 56, because the time is 00:56:41
// Getting seconds
// Let's extract or get the seconds from a time object.

// const now = new Date()
// console.log(now.getSeconds()) // 41, because the time is 00:56:41
// Getting time
// This method give time in milliseconds starting from January 1, 1970. It is also know as Unix time. We can get the unix time in two ways:

// Using getTime()
// const now = new Date() //
// console.log(now.getTime()) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41
// Using Date.now()
// const allSeconds = Date.now() //
// console.log(allSeconds) // 1578092201341, this is the number of seconds passed from January 1, 1970 to January 4, 2020 00:56:41

// const timeInSeconds = new Date().getTime()
// console.log(allSeconds == timeInSeconds) // true
// Let us format these values to a human readable time format. Example:

// const now = new Date()
// const year = now.getFullYear() // return year
// const month = now.getMonth() + 1 // return month(0 - 11)
// const date = now.getDate() // return date (1 - 31)
// const hours = now.getHours() // return number (0 - 23)
// const minutes = now.getMinutes() // return number (0 -59)

// console.log(`${date}/${month}/${year} ${hours}:${minutes}`) // 4/1/2020 0:56