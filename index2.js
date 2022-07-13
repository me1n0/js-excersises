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
