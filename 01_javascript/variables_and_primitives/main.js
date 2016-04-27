// console.log('Hello World');
//
// The Fortune Teller
//
// Why pay a fortune teller when you can just program your fortune yourself?
//
// Store the following into variables: number of children, partner's name, geographic location, job title. Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
//

var children = 10;
var partnerName = 10;
var geoLocation = 10;
var title = 10;

console.log('You will be a ' + title + ' in ' + geoLocation + ', and married to ' + partnerName + ' with ' + children + ' kids');

// The Age Calculator
//
// Forgot how old someone is? Calculate it!
//
// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.
// The Lifetime Supply Calculator
//

var currentYear = 2016;
var birthYear = 1992;

console.log('They are either ' + (currentYear - birthYear) + ' or ' + (currentYear - birthYear - 1) );

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
//
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".


var currentAge = currentYear - birthYear;
var maxAge = 90;
var dailySupply = 999;
var total = (maxAge - currentAge) * 365 * dailySupply;

console.log('You will need ' + total + ' to last you until the ripe old age of ' + maxAge);



// The Geometrizer

// Calculate properties of a circle, using the definitions here.
//
// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var rad = 5;
var circ = 2 * rad * 3.14;
var area = rad * rad * 3.14;

console.log('circ: ' + circ);
console.log('area: ' + area);

// The Temperature Converter
//
// It's hot out! Let's make a converter based on the steps here.
//
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var temp = 21;
var fTemp = Math.round(temp * 1.8 + 32);
console.log(temp + "C: " + temp + ", F: " + fTemp);
