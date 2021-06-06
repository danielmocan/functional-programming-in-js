/* Receives a function as a param */
const apply = ( func, value ) => func( value );
/* Returns a function */ 
const addOne = value => value + 1;
const total = apply( addOne, 4 );
console.log( total );

/*  Exercises */

//1. Sum the numeric values from the following array using filter, reduce
const values = [ 0, 2, "text", "Fortech", true, 4, 10, "fp", "vasile", 999 ];

//2. Sum the salaries of Fortech employees that are working for HR department, please use filter, reduce, map.
// Before we sum the salaries, lets give the HR department a raise, 20% each.
const employees = [
    {
        fullName: "Loredan Lasca",
        department: "Development",
        salary: 8000,
    },
    {
        fullName: "Razvan Niculescu",
        department: "HR",
        salary: 3000,
    },
    {
        fullName: "Marian Olaru",
        department: "HR",
        salary: 3000,
    },
    {
        fullName: "George Balota",
        department: "IT Support",
        salary: 7000,
    },
    {
        fullName: "Dorin Ciora",
        department: "HR",
        salary: 2000,
    },
  ];