
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

//NOT fisnished excersise (79)
var question = prompt("What is your name?");
var letter = question.slice(0.1);
var rest = question.slice(1);
alert ("Hello " + letter + rest); 
