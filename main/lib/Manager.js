






// const manager = extends


// officeNumber

// getRole()

// Overridden to return 'Manager'
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        // call parent constructor here:
        super(name, id, email);

        this.officeNumber = officeNumber;
    }
    getOfficeNumber() {
        return this.officeNumber;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;
