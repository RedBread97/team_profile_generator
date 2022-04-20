const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer')
const Intern = require('../lib/intern')

const generateManager = function (manager) {
  return `
  <div class="card">
  <h5 class="card-header">${manager.name}</h5>
  <div class="card-body">
  
    <p class="id">Id: ${manager.id}</p>
    <p class="email">Email: ${manager.email}</p> </p>
    <p class="officeNumber">Office number: ${manager.officeNumber}</p>

  </div>
</div>
`;
}
  

const generateEngineer = function (engineer) {
return `
<div class="card">
<h4 class="card-header">${engineer.name}</h4>
<div class="card-body">

  <p class="id">Id: ${engineer.id}</p>
  <p class="email">Email: ${engineer.email}</p> </p>
  <p class="github">Github: ${engineer.github}</p>

</div>
</div>
`;
}

const generateInternal = function (intern) {
  return `
<div class="card">
<h4 class="card-header">${intern.name}</h4>
<div class="card-body">

  <p class="id">Id: ${intern.id}</p>
  <p class="email">Email: ${intern.email}</p> </p>
  <p class="school">School: ${intern.school}</p>

</div>
</div>
`;
}

generateHTML = (data) => {
  for(let i = 0; i < data.length; i ++){
    const employee = data[i];
    
  }
}

  module.exports = generateTeam;