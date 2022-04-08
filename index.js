
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

if (>60) { //(n === 100)
    alert("The compatibility between " + one + " and " + two + " is " + n + "%, amazing!");
} else {
    alert("damn loser");
}
