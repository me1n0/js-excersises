
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
