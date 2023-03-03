const calculateSalaryWithTax = require('./salary.js');

const dailySalary = 1000;
const salaryWithTax = calculateSalaryWithTax(dailySalary);

console.log(`El sueldo mensual con impuestos es ${salaryWithTax}`);