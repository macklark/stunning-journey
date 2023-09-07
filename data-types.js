// Data types

// In our previous examples we are assigning variables with string values i.e. value in between quotes 'mike anderson doe', '10', '_p3ER#'.

// There are other data types, let's go through them

// Number Type

// Now you see we are not using the quotes '', this is a Number type
var userAge = 10;

// typeof is a special keyword in javascript which returns the datatype of a variable.
console.log(typeof userAge); // logs out number;

var userAgeWithMonths = 10.5;

console.log(typeof userAgeWithMonths); // logs out number
// You might think that. Ohhh this is a floating value because of the '.' and it is expected that we guess that the typeof keyword will return something different like 'float' or 'decimal', but it will always return the same 'number' even it is integer or decimal.

// Like any other languages we can use numbers to perform arithematic.

// Arithematic includes +, *, -, /, % etc, so we can do any of them.

var sumOfActualAgeAndAgeWithMonths = userAge + userAgeWithMonths;
var productOfActualAgeAndAgeWithMonths = userAge * userAgeWithMonths;
var differenceOfActualAgeAndAgeWithMonths = userAge - userAgeWithMonths;
var dividedByActualAgeAndAgeWithMonths = userAge / userAgeWithMonths;
var remainderOfActualAgeAndAgeWithMonths = userAge % userAgeWithMonths;

console.log(sumOfActualAgeAndAgeWithMonths); // logs out 20.5

// Order of operation
// / > * > + > -

console.log(1 + 2 * 3); // logs out 7
console.log((1 + 2) * 3); // logs out 9

// Arithematic with floating values work a little different.

var userOneAgeWithMonths = 1.2;
var userTwoAgeWithMonths = 2.2;

console.log(userOneAgeWithMonths + userTwoAgeWithMonths); // You would expect it to return 3.4, but it logs out 3.40000000000004.

// This is because of rounding errors caused in some cases, so being aware of this kind of errors is better.

// A small hint -> If we want to represent a very big value or store it in a variable we can do this.

var aVeryBigNumber = 100000;
var betterWayOfRepresentingAVeryBigNumber = 1_00_000;