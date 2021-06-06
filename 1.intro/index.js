const salaryIncreasePercent = 0.15; // 15%
const employees = [
    { firstName: "Daniel", lastName: "Mocan", salary: 1000 },
    { firstName: "Ciprian", lastName: "Vacaru", salary: 1400 },
    { firstName: "Denisa", lastName: "Rosu", salary: 2500 }
];

// Declarative
// const increaseSalary = ( employee ) => {
//     const newSalary = ( employee.salary * salaryIncreasePercent ) + employee.salary;
//     return Object.assign( { }, employee, { salary: newSalary } );
// }

// const updatedEmployees = employees.map( increaseSalary );
// console.log( "updatedEmployees", updatedEmployees );

// // Imperative
// for( let i = 0; i < employees.length; i++ ) {
//     const increaseAmount = employees[ i ].salary * salaryIncreasePercent;
//     employees[ i ].salary = employees[ i ].salary + increaseAmount;
// };