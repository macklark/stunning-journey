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

// A small hint -> If we want to represent a very big number or store it in a variable we can do this.

var aVeryBigNumber = 100000;
var betterWayOfRepresentingAVeryBigNumber = 1_00_000;

// String Type

// string of charecters is essentially a text.

// string is a datatype where we can store any kind of value in between quotes for ex. 'hello', '10', ')89tgb', etc...

var userOneName = 'Jane';
var userOneAge = '20';

console.log(userOneName, userOneAge); // logs out Jane 20

console.log(typeof userOneName, typeof userOneAge) // You might think that it will return string number. But it does not it will return string string because here userOneAge is storing a string value in between quoutes.

// There is another way to define string;

var userOneCity = "Visakhapatnam";
// We can define strings using '' or ""

// string concatenation
// We can use the '+' operator to concat two or more strings.

var greetings = 'Hello_';

console.log(greetings + userOneName + '!'); // logs out Hello_Jane!

// Boolean Type

// boolean is a kind of datatype where it answers a question either with yes / no or 0 / 1 or true / false.

// boolean datatype is either true or false keywords.

var isUserSubscribed = true;

console.log(isUserSubscribed, typeof isUserSubscribed); // logs out true boolean.

var isAnotherUserSubscribed = false;
console.log(isAnotherUserSubscribed, typeof isAnotherUserSubscribed); // logs out false boolean.

// With booleans we cannot use general arithematic operators because it does not make sense when we say

console.log(isUserSubscribed + isAnotherUserSubscribed); // logs out 1 because of type coercion.

// Anyways there are special kind of operators called logical operators which apply to boolean datatypes.

// (&&) Ampersand is 'and' operator which means both the values are supposed to be true.

console.log(isUserSubscribed && isAnotherUserSubscribed); // logs out false.

// (||) doublepipe is 'or' operator which means either of the value is supposed to be true.

console.log(isUserSubscribed || isAnotherUserSubscribed); // logs out true.

// There is a concept called boolean inversion in javascript, basically it is inverting the boolean value to the other boolean value.

console.log(!isUserSubscribed); // logs out false

// double inversion
console.log(!!isUserSubscribed); // logs out true

// Null and Undefined

// null and undefined are a kind of datatypes where we say that we do not have the value.

var doNotHaveAValue;

console.log(doNotHaveAValue); // logs out undefined

// We can explicitly declare undefined to a variable.
doNotHaveAValue = undefined;

console.log(doNotHaveAValue);
console.log(typeof doNotHaveAValue);

// undefined is when we do not have a value, while null is used to explicitly say that we do not have the specific value.

var explicitlySayDoNotHaveAValue = null;

console.log(explicitlySayDoNotHaveAValue); // log out null.

// Comparision

// There are comparision operators which will check if given two or more values are equal to, greater or less than compared to each other

var robAge = 20;
var salAge = 21;

console.log(robAge == salAge); // logs out false, because the '==' is a comparision operator which returns true or false depending upon the values.

console.log(robAge != salAge); // logs out true, because of the '!' operator we are checking for the opposite condition that wether both the values are not equal.

// In the same way...
console.log(robAge < salAge); // logs out true.
console.log(robAge > salAge); // logs out false.

console.log(robAge >= salAge); // logs out false, this checks if the value is both equal to and greater than.

// In the same way we can check for strings as well.

var password = 'javascript is great';
var confirmPassword = 'javascript is great';

console.log(password == confirmPassword);

// While it is obvious to think that the <, > operators will not be applicable for strings but there is a merit to it. The alphabets are arranged in ascending order so when we say a < b it logs out true because a is less than b and that is true.

// Javascript comes in built with a garbage collector which efficiently saves memory of a host computer wherever the code is getting executed.

// BTW what are this lines that are explaining everything about the code and what is happening to them during execution. This are called comments which can be used to explain something or skip some lines of code temporarily. These lines of code will not be executed they will simply be ignored by the executor.

var notCommented = 'someValue';
// var commented = 'someOtherValue'; // ignored by executor.