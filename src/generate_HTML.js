
const generateManager = function (manager) {
  return `
  <div class="card">
  <h5 class="card-header">${manager.name}</h5>
  <div class="card-body">
  
    <p class="id">Id: ${manager.id}</p>
    <p class="officeNumber">Office number: ${manager.officeNumber}</p>
    <p class="email">Email: ${manager.email}</p> </p>
    

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

const generateIntern = function (intern) {
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

const generateHtml = (data) => {
  teamArray = [];

  for(let i = 0; i < data.length; i ++){
    const employee = data[i];
    const type = employee.getType();

  if (type === 'Manager') {
    const managerCard = generateManager(employee);
    teamArray.push(managerCard);
    console.log(teamArray);
  }
  if (type === 'Engineer') {
    const engineerCard = generateEngineer(employee);
    teamArray.push(engineerCard);
    console.log(teamArray);
  }
  if (type === 'Intern') {
    const internCard = generateIntern(employee);
    teamArray.push(internCard);
    console.log(teamArray);
  }

  }
  const employeeCards = teamArray.join('')

  const generateTeam = generateTeamPage(employeeCards); 
    return generateTeam;

  }
    const generateTeamPage = function (employeeCards) {   
      return `<!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
          <link rel="stylesheet" href="/dist/style.css">
          <title>Test.html</title>
      </head>
      <body>
          <header>
              <nav class="navbar" id="navbar">
                  <span class="navbar-brand mb-3 h1 w-100 text-center bg-secondary" id="navbar-text">Team Profile</span>
              </nav>
          </header>
          <main>
              <div class="container">
                  <div class="row justify-content-center" id="team-cards">
                      <!--Team Cards-->
                      ${employeeCards}
                  </div>
              </div>
          </main>
      
          
      </body>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      
      </html>`;
  
    }


module.exports = generateHtml;
  