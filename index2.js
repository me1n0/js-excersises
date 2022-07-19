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
//
const farenheit = [23, 212, 41]
let celciusArray

function getCelcius() {
  celciusArray = farenheit.map(value => (value - 32) * 5/9)
}

getCelcius()
console.log(celciusArray)
