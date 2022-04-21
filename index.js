const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const fs = require('fs');
const inquirer = require('inquirer');
const generateHtml = require('./src/generate_HTML');

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
        name: 'id',
        message: 'What is the id of the team manager?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the phone number of the team manager?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the email of the team manager?',
    },
    
])

.then(managerInput => {
    const {name, email, officeNumber,id} = managerInput;
    const manager = new Manager(name, id, officeNumber, email)

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
            when: (input) => input.type === "engineer",
           
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the interns school?',
            when: (input) => input.type === "intern",
           
        },
        {
        type: 'confirm',
        name: 'addEmployee',
        message: 'Would you like to add more team members?',
    },

    ])

    .then(employeeData => {
        console.log(employeeData);
        let { name, id, email, type, github, school, addEmployee} = employeeData;
        let employee;
        if (type === "engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (type === "intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teams.push(employee); 

        if (addEmployee) {
            return generateEmployee(teams); 
        } else {
            return teams;
        }
    })
};

const writeFile = (data) => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        }else{
            console.log("Your team profile has been generated.");
        }
    })
};




generateManager()
.then(generateEmployee)
.then(teams => {
  return generateHtml(teams);
    
})
.then(teamPage => {
    return writeFile(teamPage);
})
.catch(err => {
    console.log(err);
});