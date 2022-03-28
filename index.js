
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
