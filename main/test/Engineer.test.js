const Engineer = require('../lib/Engineer');
const Engineer = new Engineer('julian', '1342789', 'julianj9011@gmail.com','vivid20221');

describe('It should get the constructor values for the Engineer object', () => {
    it(engineer.name).toBe('julian');
    it(engineer.id).toBe('1342789');
    it(engineer.email).toBe('julianj9011@gmail.com');
    it(engineer.githubUsername).toBe('vivid20221')
});

describe('it should get the name from the getName() method', () => {
    it(engineer.getName()).toBe('julian');
});

describe('it should get the id from the getId() method', () => {
    it(engineer.getId()).toBe('1342789');
});

describe('it should get the email from the getEmail() method', () => {
    it(engineer.getEmail()).toBe('julianj9011@gmail.com');
});
describe('it should get the github username from the getGithub()method',() => {
  it(engineer.getGithubUsername()).toBe('vivid20221');

});

describe('it should get the role from the getRole() method', () => {
    it(engineer.getRole()).toBe('Engineer');
});