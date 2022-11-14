






// extensds with emplyye

// github // GitHub username

// getGithub()

// getRole() // Overridden to return 'Engineer'

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, githubUsername) {
        // call parent constructor here:
        super(name, id, email);

        this.githubUsername = githubUsername;
    }
    getGithubUsername() {
        return this.githubUsername;
    }

    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;