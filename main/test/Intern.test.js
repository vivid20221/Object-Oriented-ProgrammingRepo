const Intern = require('../lib/Intern');
const Intern = new Intern('julian', '1342789', 'julianj9011@gmail.com','Dallas');

describe('It should get the constructor values for the Intern object', () => {
    it(intern.name).toBe('julian');
    it(intern.id).toBe('1342789');
    it(intern.email).toBe('julianj9011@gmail.com');
    it(intern.school).toBe('Dallas');
});

describe('it should get the name from the getName() method', () => {
    it(intern.getName()).toBe('julian');
});

describe('it should get the id from the getId() method', () => {
    it(intern.getId()).toBe('1342789');
});

describe('it should get the email from the getEmail() method', () => {
    it(intern.getEmail()).toBe('julianj9011@gmail.com');
});

describe('it should get the school name from the getSchool() method', () => {
  it(intern.getSchool()).toBe('Dallas');
});

describe('it should get the role from the getRole() method', () => {
    it(intern.getRole()).toBe('Intern');
});