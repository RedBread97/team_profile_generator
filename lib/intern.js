const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
        this.type = "intern"
    }
    getSchool() {
        return this.school
    };
    getType() {
        return 'Intern'
    };
};
module.exports = Intern;