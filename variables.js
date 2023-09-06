// The var keyword let's us declare variables in javascript.

var userName = 'mike';
// This is a simple example of variable declaration where we are storing a string i.e. 'mike' into a variable 'userName'.

// '=' is a assignment operator. i.e. assigning a value to a variable.

// Like any other statically typed language like C++ or Java it is unecessary to declare a variable with the data type, since javascript is a dynamically typed language it will infer the type of value we are storing inside a variable without any human help.

// For ex. the userName variable is storing 'mike' which is a string, here you can see we are not defining the data type but javascript knows what kind of data type it is. In this case a string.

// Now we can use the variable to refer the stored value inside it.
// The advantage is we can use a variable to declare once and use it in multiple places.

console.log('Hello_' + userName);
console.log('You are Loggedin Successfully_' + userName);
// BTW this is called string concatenation.

// Overwriting the value inside a variable is as simple as assigning a new valuue like this.
userName = 'mike doe';
// In this case we can see that the 'var' keyword is not present because we have already declared the variable at the beginning of our file, now we are just overwriting the value to a new one.

// Let's check the result
console.log('Username changed to_' + userName);

// It is also possible to assign one variable to another variable.

// Let's create a new variable and assign something new like 'mike anderson doe'.
var newUserName = 'mike anderson doe';
// Now we assign the 'newUserName' variable to 'userName' variable.
userName = newUserName;

console.log('Username changed to_' + userName);