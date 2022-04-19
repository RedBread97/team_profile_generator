const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const fs = require('fs');
const inquirer = require('inquirer');
const generateTeam = require('./src/generate_HTML');

teams = [];
const managerQuestions = () => {
    inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is the name of the team managers name?',
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
})

};


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
  
        if (err) {
            return console.log(err)
        } else{
            console.log("You did it!")
        }
    })
    
}
function init() {
    inquirer.prompt(managerQuestions)
    .then(function(data){
        writeToFile("index.html", generate_HTML(data));
        
    
    })
}

// Function call to initialize app
init();
