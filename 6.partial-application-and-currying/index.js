/* Partial Application */
function partialApplication( f, a ) {
    return function( b ) {
        return f( a, b )
    }
}

const sum = ( a, b ) => a + b;
const addFive = partialApplication( sum, 5 );
addFive( 6 ); // 11

/* Currying */
const add = ( a ) => ( b ) => ( c ) => a + b + c;
add( 1 )( 2 )( 3 ); // 6

