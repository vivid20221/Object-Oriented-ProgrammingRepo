const Employee = require('../lib/Employee');
const employee = new Employee('julian', '1342789', 'julianj9011@gmail.com');

describe('It should get the constructor values for the employee object', () => {
    it(employee.name).toBe('julian');
    it(employee.id).toBe('1342789');
    it(employee.email).toBe('julianj9011@gmail.com');
});

describe('it should get the name from the getName() method', () => {
    it(employee.getName()).toBe('julian');
});

describe('it should get the id from the getId() method', () => {
    it(employee.getId()).toBe('1342789');
});

describe('it should get the email from the getEmail() method', () => {
    it(employee.getEmail()).toBe('julianj9011@gmail.com');
});

describe('it should get the role from the getRole() method', () => {
    it(employee.getRole()).toBe('Employee');
});