# Partial Application and Currying

**Partial Application** is supplying less parameters than required

```javascript
function partialApplication( f, a ) {
    return function( b ) {
        return f( a, b )
    }
}

function sum = ( a, b ) => a + b;
function addFive = partialApplication( sum, 5 );
addFive( 6 ); // 11
```

**Currying**
Currying is converting a function that accepts multiple parameters into a series of functions that each only take one parameter.
```javascript
const add = ( a ) => ( b ) => ( c ) => a + b + c;
add( 1 )( 2 )( 3 ); // 6
```

With currying and partial application you can build functions that do not have all the parameters they need.
