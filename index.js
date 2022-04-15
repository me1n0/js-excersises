
// tweet count
var tweet = prompt("write");
var tweetCount = tweet.length;
alert("you have written " + tweetCount + " characters and have " + (140-tweetCount) + " left" );

// always count from 0
.slice();
.length;

//character limit
var tweet = prompt("write");
var tweetLimit = tweet.slice(0,3);
alert(tweetLimit);

// shorter version
alert(prompt("write").slice(0,3));

//uppercase and lowercase
var name = "NAME"
name = name.toLowerCase()

//excersize with uppercase and lowercase letters
var question = prompt("What is your name?");
var letter = question.slice(0,1);
var rest = question.slice(1);
alert ("Hello " + letter.toUpperCase() + rest.toLowerCase());

//dog age 2 human age calculator
var dogAge = prompt("How old is your doggo?");
var humanAge = ((dogAge - 2) * 4) + 21;
alert("If your dog was a human he would be " + humanAge + " years old");

//increment and decrement expressions
var x = 5;
x = x + 1; //6
x++; //6, increment
x--; //4 decrement
x+= 2; //7

//functions
function getMilk() {
    alert("leaveHouse");
    alert("moveRight");
    alert("buyMilk");
    alert("moveLeft");
    alert("enterHouse");
}

getMilk();

//functions pt2
function getMilk(bottles) {
    alert("leaveHouse");
    alert("moveRight");
    alert("buy" + bottles + "bottles of milk");
    alert("moveLeft");
    alert("enterHouse");
}

getMilk(2);

//functions pt3
function getMilk(money) {
    alert("leaveHouse");
    alert("moveRight");
    var numberOfBottles = Math.floor(money / 1.5);
    alert("buy " + numberOfBottles + " bottles of milk");
    alert("moveLeft");
    alert("enterHouse");
}

getMilk(5);


// Life in weeks
function lifeInWeeks(age) {
    var yearsRemaining = 90 - age;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;
    prompt("You have " + days + " days, " + weeks + " weeks and " + months + " months left");
}

lifeInWeeks();

// functions pt4
function getMilk(money) {
    alert("leaveHouse");
    alert("moveRight");
    var numberOfBottles = Math.floor(money / 1.5);
    alert("buy " + numberOfBottles + " bottles of milk"); 
    alert("moveLeft");
    alert("enterHouse");
    return money % 1.5; //remainder of da division
}

var change = getMilk(4);
alert(change);

// functions pt 5
function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    
    console.log("buy " + calcBottles(money, 1.5) + " bottles of milk"); 
    
    console.log("moveLeft");
    console.log("enterHouse");
    
    return calcChange(money, 1.5);
}

function calcBottles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

function calcChange(startingAmmount, costPerBottle) {
    var change = startingAmmount % costPerBottle;
    return change;
}

console.log("here is your " + getMilk(4) + " change");

// bmi calculator
function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return  Math.round(bmi);
}

console.log(bmiCalculator(50, 1.8));

// random number generator
var n = Math.random(); // random and pseudorandom (this)
n = n * 100;
n = Math.floor(n) + 1;
console.log(n + "%");
n = Math.floor(n);

// love score generator
var one = prompt("name:");
var two = prompt("name:");
var n = Math.random() * 100;
n = Math.floor(n) + 1;
alert("The compatibility between " + one + " and " + two + " is " + n + "%");

// if and else statements
var one = prompt("name:");
var two = prompt("name:");
var n = Math.random() * 100;
n = Math.floor(n) + 1;

if (n > 60) { //(n === 100)
    alert("The compatibility between " + one + " and " + two + " is " + n + "%, amazing!");
} else {
    alert("damn loser");
}

/* === is equal to
!== is not equal to
> is greater than
< is lesser than
>= is greater or equal to
<= is lesses or equal to

&& and
|| or 
! not */

// if and else statements pt 2
var one = prompt("name:");
var two = prompt("name:");
var n = Math.random() * 100;
n = Math.floor(n) + 1;

if (n > 60) { //(n === 100)
    alert("The compatibility between " + one + " and " + two + " is " + n + "%, amazing!");
} if ( n > 30 && n <= 60) {
    alert("okay i guess");
} else {
    alert("damn loser");
}

// leap year exercise
function isLeap(year){
    var question = prompt("year:");

    if (question % 4 === 0) {
        if (question % 100 === 0) {
            if (question % 400 === 0) {
                 alert("yes. divisible by 400.");
            } else {
                 alert("no. not divisible by 400.");
            }
        } else {
            alert("yes. divisible by 100."); 
        }
    } else {
        alert("no. not divisible by 4.");
    }
}
isLeap();

// js arrays
var guessList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];
console.log(guessList[0]); //Angela

// fizzbuzz excersise
var output = [];
var count = 1;
function fizzBuzz() {
    if (count % 3 === 0 && count % 5 === 0){
    output.push("fizzbuzz");
    } else if (count % 3 === 0) {
    output.push("fizz");
} else if (count % 5 === 0) {
    output.push("buzz");
} else {
    output.push(count);
}
    
count++;
    
    console.log(output);
}
//var output = []; 
//output.push(1);
//output.pop;
    
//divisible by 3 - fizz
// divisible by 5 - buzz
// divisible by both - fizzbuzz


//while loop
while(count <= 100){
}

var first = 99;
var second = 98;
var lyrics = " bottles of beer on the wall, ";
var lyrics2 = " bottles of beer. Take one down and pass it around, ";
var lyrics3 = " bottles of beer on the wall.";

function beer() {
    while(first => 1){
    console.log( first-- + lyrics + first-- + lyrics2 + second-- + lyrics3);
}
}
