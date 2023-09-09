// Functions are piece of code which encapsulates logic to be called upon later to perform a spaecific task.

// For ex. let us say that we would like to log out a message at different parts of our code.

console.log('Javascript is great !');

console.log('Javascript is great !');

// But this kind of code seems redundant, there is a better way to log out this message.

function sayMessage() {
    console.log('Javascript is great !');
};

// Now we can call this function 'sayMessage' n number of times.

sayMessage();

sayMessage();

// In the previous example we are not using any kind of external information. The sayMessage function has only one task to do that is to log out 'Javascript is great !', but what if we would like to perform some kind of operation or logic with some external information let us say we would like to greet multiple people.

function greetPeople(name = 'anonymous') {
    console.log('Hi_' + name + '_!');
};

// 'name' variable between the parenthesis is called a parameter and it accepts that parameter to use it inside our function logic in this case concatenating our name variable to 'Hi_' & '_!';

greetPeople('Jane'); // While calling a function in our code we have to pass the actual value for our parameter in the function this is called a arguement.

greetPeople('Mike');

greetPeople('Rob');

greetPeople('Luke');

// More concrete example

// Function to sum two numbers.

function addTwoNumbers(numOne, numTwo) {
    console.log(numOne + numTwo);
};

addTwoNumbers(16, 2);

// Now let us say that we would like to use the resulting information from our function elsewhere in the code.

function multiplyTwoNumbers(numOne, numTwo) {
    return numOne * numTwo; // the return keyword returns the result from a function that can be used elsewhere in our code by calling the function.
};

// Let's use the result from 'multiplyTwoNumbers' function and use it somewhere else.

// We will just add 1 to the result from our function.
console.log(1 + multiplyTwoNumbers(2, 3)); // logs out 7.

// What if a parameter is defined but we forgot to pass the parameter while calling our function. We can set default value to our parameter so that instead of saying 'undefined' it will use that default parameter.

greetPeople(); // logs out Hi_anonymous_!