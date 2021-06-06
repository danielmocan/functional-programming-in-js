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