# Pure Functions in JavaScript

### Pure functions are:
* functions that given the same input they will always return the same out
* avoid shared state, this means that the function should not depend on any other data then what is passed in
* they must return data
* they don't have side effects, this means that if you call the function, it will not modify any data outside of the function

### Impure function
```javascript
let points = 5;
const addPoints = ( a ) => { points += b };
addPoints(3);
```
The function `addPoints` is not pure because it modifies a variable outside of the function

### Pure Function
```javascript
const totalPoints = 5;
const addPoints = ( totalPoints, points ) => totalPoints + points;
const newTotalPoints = addPoints( totalPoints, 5 );
```
Benefits of using pure functions:
* they are easy to test, because you dont have to mock any external source, you only depend on the input values
* they its easier to track bugs
* reduces the chance of introducing bugs in the sistem

Exercise

1. Rewrite the increaseSalary function, make it a pure function

```javascript
const salaryIncreasePercent = 0.15; // 15%
const employees = [
    { firstName: "Marius", lastName: "Vanca", salary: 1000 },
    { firstName: "Rodica", lastName: "Maga", salary: 1400 },
    { firstName: "Calin", lastName: "Vaduva", salary: 2500 }
];

const increaseSalary = ( employee ) => { 
    const newSalary = ( employee.salary * salaryIncreasePercent ) + employee.salary;
    return Object.assign( { }, employee, { salary: newSalary } );
}

const updatedEmployees = employees.map( increaseSalary );
console.log( "updatedEmployees", updatedEmployees );

```

2. Rewrite `generatedId` and `calculateTax` as a pure function.

```javascript
const generateId = ( ) => {
  const timestamp = new Date().getTime();

  return `ID_${ timestamp }`;
}
```

```javascript
const vat = 0.19;
const calculateTax = ( productPrice ) => {
  return ( productPrice * vat ) + productPrice;
}
```


