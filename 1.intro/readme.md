# Functional Programming

*Functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that
treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.* ( Wikipedia )

Functional programming is part of the declarative paradigm.

**Declarative programming** focuses on telling the computer what it wants instead of telling how to computed.
**Imperative programming** describes how to perform an action.

This is the battle between What vs How.

### How ( Imperative )
```javascript
let users = [
  { firstName: "Miklos", lastName: "Bara" },
  { firstName: "Radu", lastName: "Cioroiu" },
  { firstName: "Alin", lastName: "Hrenean" }
]

for ( var i = 0; i < users.length; i++) {
  users[i].fullName = `${ users[i].firstName } ${ users[i].lastName }`;
}
console.log( users );
```

### What ( Declarative )
```
const users = [
  { firstName: "Vasile", lastName: "Popescu" },
  { firstName: "Ion", lastName: "Ionescu" },
  { firstName: "Dani", lastName: "Mocanu" }
]
const addFullName = user => Object.assign( {}, user, { fullName: `${ user.firstName } ${ user.lastName }` } );
const modifiedUsers = users.map( addFullName );
console.log( modifiedUsers );
```

### Exercises:

We have the following employees list, because the all employees did a good job in the past year, the management decided to raise the salary of each employee with 15%, please implement using: imperative and declarative styles.
```javascript
const employees = [
  { firstName: "Marius", lastName: "Vanca", salary: 1000 },
  { firstName: "Rodica", lastName: "Maga", salary: 1400 },
  { firstName: "Calin", lastName: "Vaduva", salary: 2500 }
]
```
