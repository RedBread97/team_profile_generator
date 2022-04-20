const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const fs = require('fs');
const inquirer = require('inquirer');
// const generateTeam = require('./src/generate_HTML');

teams = [];
const generateManager = () => {
   return inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the team managers name?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the team manager?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the phone number of the team manager?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the id of the team manager?',
    },
])

.then(managerInput => {
    const {name, email, officeNumber,id} = managerInput;
    const manager = new Manager(name, email, officeNumber, id)

    teams.push(manager); 
    console.log(manager); 
})
};

const generateEmployee = () => {
   return inquirer.prompt([
        {
            type: 'list',
            name: 'type',
            message: 'What type of team member are you adding?',
            choices: ['engineer', 'intern']
        },
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the team member?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email of the team member?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the id of the team member?',
        },
        
        //add special inputs for intern and engineer
        //if statments? when?
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineers github?',
            when: (input) => input.role === "Engineer",
           
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the interns school?',
            when: (input) => input.role === "Intern",
           
        },
        {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to add more team members?',
    },

    ])

    .then(employeeData => {
        let {name, type, email, id, github, school, addEmployee} = employeeData;
        let employee;
        if (type === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (type === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teams.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(teamArray); 
        } else {
            return teams;
        }
    })
};




generateManager()
.then(generateEmployee)