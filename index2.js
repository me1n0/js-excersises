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
