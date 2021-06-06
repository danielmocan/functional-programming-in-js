# Immutability

Immutability is a core concept in functional programming, without it the data flow in you program can be loosely.

I really like this statement about immutability: you can't screw up what you can't change.

An immutable object is an object that can not be modified after its creation.

JavaScript does not have immutable data structures by default.

We should not confuse the `const` in variable declaration in JavaScript as an immutable object

```javascript
const name = "Vasile";
name = "Ion"; // Uncaught TypeError: Assignment to constant variable...
```

```javascript
const person = { 
  name: "Vasile",
  age: 89,
  position: "Junior Cobol Developer"
};

person.name = "Ion"; // works fine;
```

You can create immutable objects in JavaScript by using Object.freeze , the other option would be to use a library like immutable.js

You should be careful when you use `Object.assign` for copying objects with the intent of having immutability.

Exercises:

1. Create an immutable object using Object.freeze, and try to modify one of the properties and see what happens.


