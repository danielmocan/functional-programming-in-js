# Functions in JavaScript
First class functions are the cornerstones of any functional programming language.
Functions in JavaScript are first class citizen.

```javascript
//They can be variables
const sum = function sum( a, b ) {
  return a + b;
}

//functions that return functions
function sum2( a ) {
  return function( b ) {
    return a + b; 
  }
}

//or written more clean like this
const sum2 = ( a ) => ( b ) => a + b;

//passed as parameters
const sumOfThree = ( a , b, c, sum ) => sum( a, b ) + c;

//part of an array
const arrayOfFunctions = [ sum, sum2, sumOfThree ];

//part of an object
const person = {
  name: "Vasile",
  getAge: () => 23,
}

```

The main point that you should take away from our discussion about first class functions is that functions can be assigned as constants, variables, placed as array elements and even set as values of keys on an object. Additionally, (and most importantly ?!) functions can be returned to and from functions — just like any other data type!
