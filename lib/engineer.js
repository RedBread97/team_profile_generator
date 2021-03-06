const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github
        this.type = "engineer"
    }
    getGithub() {
        return this.github
    }
    getType() {
        return 'Engineer'
    }
}
module.exports = Engineer;