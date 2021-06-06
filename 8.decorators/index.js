// 1. Create a decorator function that catches error in the a function and logs the error to the console (I know its a side effect).

// Example of ussage

import { errorLogging } from "someModule";

const someFunction = () => { //... }
const anotherFunction = () => { //... }

export default {
  someFunction: errorLogging( someFunction ),
  anotherFunction,
};

// Create here the errorLogging function

