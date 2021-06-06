/* Composing functions */
const increment = a => a + 1;
const double = a => a + a;
const incrementAndDouble = a => double( increment( a ) );

/* Compose function */
const compose = ( f, g ) => x => f( g( x ) );
const incrementAndDouble = compose( increment, double );

/* General Compose */

const compose = ( func, ...rest ) => rest.length ? x => func( compose( ...rest ) ( x ) ) : func;
const square = a => a * a;
const doubleIncrementAndSquare = compose( square, increment, double );

/* Exercises */
// 1. Its easier for us to undestand if the argumets would be applied from left to right, here comes `pipe` to the rescue.
// Please create a pipe function that applies the params received from left to right.

const pipe = ( ...functions ) => x => functions.reduce( ( accumulator, current ) => current( accumulator ), x );
const doubleIncrementAndSquare = pipe( double, increment, square );