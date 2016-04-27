
// What number's bigger?
//
// Write a function named greaterNum that:
//
// Takes 2 arguments, both numbers.
// Returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

var greaterNum = function(a, b) {
    if (a > b) {
        return a;
    } else if (b > a) {
        return b;
    } else {
        return 'Numbers are equal';
    }
}

console.log(greaterNum(10, 5));
console.log(greaterNum(5, 10));
console.log(greaterNum(5, 5));

// The World Translator
//
// Write an if statement that writes Hello World in different languages (i.e. if the language is english, write Hello World, if the language is French write something romantic)

var lang = null;

if (null === "english") {
    return "sup";
} else if ( null === "french" ) {
    return "wii"
}


// The Grade Assigner
//
// Write an if statement that gives users a score (A, B, C, D, E or F) based on the test results

var grade = null;

if (grade === "A") {
    return "yeh sick one";
} else if (grade === "B") {
    return "yeh sick B's lad";
} else if (grade === "C") {
    return "yeh sick C's lad";
} else if (grade === "D") {
    return "yeh sick D's lad";
} else if (grade === "E") {
    return "yeh sick E's lad";
} else if (grade === "F") {
    return "yeh sick F's lad";
} else {
    return "U WOT M8?"
}
