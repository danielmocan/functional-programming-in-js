# Function Decorators

Decorator functions are functions that receive a function as a parameter and returns a modified version of it.

```javascript
function authenticateBefore( fn ) {
    return function( ...args ) {
        if ( user.isAuthenticated ) {
            return fn( ...args );
        }
    }
}
```

Exercises:

* Create a decorator function that catches error in the a function and logs the error to the console (I know its a side effect).

```javascript
import { errorLogging } from "someModule";

const someFunction = () => { ... }
const anotherFunction = () => { ... }

export default {
  someFunction: errorLogging( someFunction ),
  anotherFunction
}
```
