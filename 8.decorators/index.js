// 1. Create a decorator function that catches error in the a function and logs the error to the console (I know its a side effect).

import { errorLogging } from "someModule";

const someFunction = () => { //... }
const anotherFunction = () => { //... }

export default {
  someFunction: errorLogging( someFunction ),
  anotherFunction,
};

function errorLogging( func ) {
    return ( ...args ) => {
        try {
            func( ...args );
        } catch ( e ) {
            console.log(`Error Name: ${ e.name }, Error Message: ${ e.message }` );
        }
    };
};
