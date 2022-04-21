const Employee = require('./Employee')

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officeNumber
        this.type = "manager"
    }
    getOfficeNumber() {
        return this.officeNumber
    }
    getType() {
        return 'Manager'
    }
}
module.exports = Manager;