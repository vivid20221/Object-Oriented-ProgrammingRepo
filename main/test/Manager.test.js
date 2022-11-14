const Manager = require('../lib/Manager');
const Manager = new Manager('julian', '1342789', 'julianj9011@gmail.com','666');

describe('It should get the constructor values for the Manager object', () => {
    expect(manager.name).toBe('julian');
    expect(manager.id).toBe('1342789');
    expect(manager.email).toBe('julianj9011@gmail.com');
});

describe('it should get the name from the getName() method', () => {
  expect(manager.getName()).toBe('julian');
});

describe('it should get the id from the getId() method', () => {
  expect(manager.getId()).toBe('1342789');
});

describe('it should get the email from the getEmail() method', () => {
  expect(manager.getEmail()).toBe('julianj9011@gmail.com');
});

test('it should get the office number from the getOfficeNumber() method', () => {
  expect(manager.getOfficeNumber()).toBe('666');
});

describe('it should get the role from the getRole() method', () => {
  expect(manager.getRole()).toBe('Manager');
});