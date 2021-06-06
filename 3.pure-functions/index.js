// 1. Rewrite the increateSalary function to be a pure function

const salaryIncreasePercent = 0.15; // 15%
const employees = [
    { firstName: "Daniel", lastName: "Mocan", salary: 1000 },
    { firstName: "Ciprian", lastName: "Vacaru", salary: 1400 },
    { firstName: "Denisa", lastName: "Rosu", salary: 2500 }
];

const increaseSalary = ( employee ) => {
    const newSalary = ( employee.salary * salaryIncreasePercent ) + employee.salary;
    return Object.assign( { }, employee, { salary: newSalary } );
}

const updatedEmployees = employees.map( increaseSalary );
console.log( "updatedEmployees", updatedEmployees );

//2. Rewrite generatedId and calculateTax as a pure functions.

const generateId = ( ) => {
  const timestamp = new Date().getTime();

  return `ID_${ timestamp }`;
}

const vat = 0.19;
const calculateTax = ( productPrice ) => {
  return ( productPrice * vat ) + productPrice;
}
