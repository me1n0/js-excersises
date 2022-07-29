//im back at it once again

// for loops
for(let i = 0; i < 10; i++) {
   if (i === 0) {
     console.log(i + 1 + ' beer n the wall')
   }
   console.log(i + 1 + ' beers on the wall')
  
 }
//
for(let i = 0; i < 10; i++) {
    if (i % 15 === 0) {
      console.log('fizz buzz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else if ( i % 3 === 0) {
      console.log('fizz')
    } else {
      console.log(i)
    }
}



// arrays
let books = ['The Secret History', 'The Republic']

//let count = [1,2,3,4]
//let passResults = [false, true,true, false]

console.log(books.length)

console.log(books[0])

//
let books = ['The Secret History', 'The Illiad', 'The Republic', 'The Illiad']

let count = 0
for( let i = 0; i < books.length; i++) {
  console.log(books[i])
  if (books[i] === 'The Illiad') {
    count = count + 1
    console.log(count)
  }
}



// objects
const users = [
  {
    name: 'Henry',
    lastName: 'Winter',
    isAlive: false,
  },
  {
    name: 'Richard',
    lastName: 'Papen',
    isAlive: true,
  },
  {
    name: 'Camilla',
    lastName: 'Macaulay',
    isAlive: true,
  }
]
console.log(users[0].isAlive)

for (let i = 0; i < users.length; i++) {
  if (users[i].isAlive === false) {
    console.log(users[i].name + ' ' + users[i].lastName + ' ily')
  }
}



// functions
function sendReminder(name, time) {
  console.log('Hello ' + name + ', your meeting is at ' + time)
}

sendReminder('John', 10)
sendReminder('Henry', 2)

//
let name = 'Henry'
let count = 1

function showAlert() {
  console.log(name + ', wake up! This is your alarm number ' + count)
  count += 1
}

showAlert()
showAlert()



// while loop
let i = 0

while (i < 100) {
  console.log( i + ' beers on the wall')
  i++
}



// .length()

const balls = document.querySelectorAll('.ball');

console.log(balls)



// .concat()
const string = 'say cheese, '
const string2 = 'henry'

// strings
console.log(string.concat(string2))

// arrays
//does not change the existing arrays
const array1 = [1,2,3]
const array2 = [4,5,6]
const array3 = [7,8,9]

const newArray = array1.concat(array2, array3)

console.log(newArray)



//.join()
// returns a NEW string

const textDisplay = document.querySelector('.text')

const emotions = ['sad', 'happy']
const newWord = emotions.join('')

textDisplay.innerHTML = newWord



// .pop(), .shift(), .unshift(), push()

.unshift()
// changes the array (adds string(s) at the beginning)
.push()
// changes the array (adds string(s) at the end)

// . slice() it doesn NOT mutate arrays, but makes new ones
const movies = ['goodfellas', 'posseion', 'x', 'persona', 'the godfather']

const weirdMovie = movies.slice(1,2)
console.log(weirdMovie) //'possesion'
//
const movies2 = movies.slice(3)
console.log(movies2) //'persona', 'the godfather'



// .splice()
const movies = ['posseion', 'x', 'persona']

movies.splice(2, 0, 'a') // 'posseion', 'x', 'a', 'persona'
//let splicedArray = array.splice(start,deleteCiunt, replacement)



// .forEach()

const circles = document.querySelectorAll('.circle')

console.log(circles)

circles.forEach(circle => circle.style.backgroundColor = 'red')
//
const names = ['henry', 'richard', 'camilla']

names.forEach(name => console.log(name))
//
const scores = [3, 654, 56]

scores.forEach(score => {
  console.log(score + 2)
}
)



// .some()
const scores = [32, 53, 6, 7]

console.log(scores.some(score => score > 50)) //true
//
const countries = ['russia', 'spain', 'france']

console.log(countries.some(country => country === 'russia')) //true



// .map()
//creates a new array

//const newArray = values.map(value => value)

const ages2019 = [23, 56, 13, 45, 27]

const ages2022 = ages2019.map(age => age + 3)

console.log(ages2022)

//
const mates = [
  {
    name: 'a',
    age: 23
  },
  {
    name: 'b',
    age: 17
  },
  {
    name: 'c',
    age: 19
  }
]

const mates2022 = mates.map(mates => mates.age + 3)

console.log(mates2022)



// .filter()
// creates a new array

const shows = ['Supernatural', 'Twin Peaks', '24', 'H20']

 const display = shows.filter(word => word.length <= 5)

 console.log(display)



// .reduce()
//scores.reduce((accumulator, currentValue) => accumulator + currentValue)
const scores = [ 4, 5, 2, 5]

const total = scores.reduce((total, currentValue) => total + currentValue)

console.log(total) //16



// .every()
// if everything in the array matche the rule, return false

const testResults = [34, 67, 24, 35, 85]

console.log(testResults.every(result => result > 30)) //false



// .split()

const sentence = 'i pissed myself'

console.log(sentence.split(' ')) //(3) ["i", "pissed", "myself"]
console.log(sentence.split('')) //(15) ["i", " ", "p", "i", "s", "s", "e", "d", " ", "m", …]
//
const words = sentence.split(' ')
console.log(words[2]) //myself



//exercises
// No.1
const farenheit = [23, 212, 41]
let celciusArray

function getCelcius() {
  celciusArray = farenheit.map(value => (value - 32) * 5/9)
}

getCelcius()
console.log(celciusArray)

//No.2
const values = [11, NaN, [], 'Angels']
function checkForFalsey() {
  return values.some(value => !value)
}

console.log(checkForFalsey())

//No.3
const words = ['Rabbit', 'Football', 'Cracking']
function getTotal() {
  return words.reduce((total, word) => total + word.length, 0)
}

console.log(getTotal())

//No.4
const numbers = [9, 16, 81]
function checkSquare() {
  return numbers.every(i => Math.sqrt(i) % 1 === 0)
}

console.log(checkSquare())

//No.5
const wordsArray = ['Florida', 'dog', 'phone']
const number = 5
function getWords() {
  return wordsArray.filter(word => word.length >= number)
}

console.log(getWords())

//No.6
const cms = ['23cm', '5.6cm', '1000cm']

function getValues() {
  return cms.map(value => parseFloat(value))
}

console.log(getValues())

//No.7
const sentence = 'In West Philadelphia, born and raised'
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

function getVowelCount() {
  return sentence.split('').filter(letter => vowels.includes(letter)).length
}

console.log(getVowelCount())

//No.8
const sentence = 'the queens gambit'

function capitalise() {
  return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.substr(1)).join(' ')
}

console.log(capitalise())



// .addEventListener()
// target.addEventListener(event, function)

const hexagon = document.getElementById('hexagon')

function alertMe() {
  console.log('clicked')
}

hexagon.addEventListener('mouseover', alertMe)



// this is used sometimes??            document.addEventListener('DOMContentLoaded', () => {
} )



// .removeEventListener()
const circle = document.querySelector('.circle')
let count = 0

function toggleColor() {
  circle.classList.toggle('red-circle')
  count++
  if (count > 10) {
    circle.removeEventListener('click', toggleColor)
  }
}
circle.addEventListener('click', toggleColor)      //circle changes color, but after count 10 it stops



// .querySelector()

const circle = document.querySelector('#main')

console.log(circle)



// .math.random()

const Tetrominoes = ['a', 'b', 'c']

const randomNumber = Math.random() * Tetrominoes.length
console.log(randomNumber)

// math.floor() - rounds numbers down 2 the nearest integer
// math.cell() - round up
// math.round() - round 2 nearest integer

const randomInteger = Math.floor(randomNumber)

console.log(randomInteger)

console.log(Tetrominoes[randomInteger])

//
const drinksMenu = ['vodka', 'water', 'limonade', 'beer']

console.log(drinksMenu[Math.floor(Math.random() * drinksMenu.length)])



//Date
const today = new Date()
const date = today.getDate() //date num
const day = today.getDay() //day of the week
const year = today.getFullYear()
const time = today.getHours()
const isoString = today.toISOString() // numeric value

//days to xmas timer
const display = document.querySelector('.date')
const today = new Date()

const christmas = new Date('2022-12-24T19:49:56.367Z')

console.log (christmas - today)

const milSec = christmas - today
const minutes = milSec / 6000

display.innerHTML = Math.round(minutes)

//
//setTimeout()
// setTimeout(function, milliseconds)

const speechBubble = document.querySelector(".bubble");
const time = 3000;

function showText() {
  speechBubble.innerHTML = "sup"; //appears after 3s
}

setTimeout(showText, time);

// function delTxt() {
//   speechBubble.innerHTML = '' //txt disappears after 10s
// }

// setTimeout(delTxt, 10000)

setTimeout(function () {speechBubble.innerHTML = ""};
           
//
const bubble = document.querySelector('.bubble')

function deleteBubble() {
  bubble.style.display = 'none'
}

setTimeout(deleteBubble, 5000)



// Classes
// Class Declaration
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

const newRectangle = new Rectangle(300, 100)

console.log(newRectangle.height)

//pacman
class Ghost {
  constructor(className, speed, color, startingPoint) {
    this.className = className;
    this.speed = speed;
    this.color = color;
    this.startingPoint = startingPoint;
  }
}

const blinky = new Ghost('blinky', 300, 'red', 4)
const inky = new Ghost('inky', 250, 'blue', 10)
const pinky = new Ghost('pinky', 350, 'pink', 20)
const clyde = new Ghost('clyde', 450, 'orange', 15)

console.log(blinky.speed)



// keys
const circle = document.querySelector(".circle");

function control(e) {
  if (e.key === "ArrowLeft") { // e.keyCode
    console.log("pressed left");
  } else if (e.key === "ArrowRight") {
    console.log("pressed right");
  } else if (e.key === "ArrowUp") {
    console.log("pressed up");
  } else if (e.key === "ArrowDown") {
    console.log("pressed down");
  } else if (e.key === "a") {
    console.log("pressed a");
  }
}
  
document.addEventListener("kydown", control);
     
// switch
const circle = document.querySelector(".circle");

function control(e) {
  switch (e.key) {
    case "ArrowLeft":
      console.log("pressed left");
      break;
    case "a":
      console.log("pressed a");
      break;
  }
}

document.addEventListener("keydown", control);

//cirle moving with keys
const circle = document.querySelector(".circle");
let xAxis = 0;
let yAxis = 0;

function control(e) {
  switch (e.key) {
    case "ArrowLeft":
      xAxis -= 50;
      circle.style.left = xAxis + "px";
      break;
    case "ArrowRight":
      xAxis += 50;
      circle.style.left = xAxis + "px";
      break;
    case "ArrowUp":
      yAxis -= 50;
      circle.style.top = yAxis + "px";
      break;
    case "ArrowDown":
      yAxis += 50;
      circle.style.top = yAxis + "px";
      break;
  }
}

document.addEventListener("keydown", control);



// .sort ()
const ages = [23, 56, 4, 78, 2]

console.log(ages.sort())



// .includes()

const books = ['goldfinch', 'the stanger', 'metamorphosis']

const isInBooks = books.includes('metamorphosis')

console.log(isInBooks)



// . contains()
const body = document.querySelector('body')
const circle = document.querySelector('.circle')

console.log(body.contains(circle))
