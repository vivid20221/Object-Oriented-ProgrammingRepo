

const generateHTML = ({ name, Job, Email}) =>
  `<!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content="Enter your description here" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
  
    <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./assets/css/style.css">
    <title>Project Tracker</title>
  </head>
  
  <body>
  
    <header class="jumbotron jumbotron-fluid custom-jumbotron">
      <div class="container text-center">
        <h1>My Team</h1>
      </div>
    </header>
    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col">
        <div class="card h-100">
          <div class="card custom-card">
            <h3 class="card-header">
              Instructions
            </h3>
            <div class="card-body">
              <div class="card-text">
                Click the button below to open a form and provide information for the following:
              </div>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Project Name</li>
              <li class="list-group-item">Project Type</li>
              <li class="list-group-item">Due Date</li>
              <li class="list-group-item">Hourly Rate</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card custom-card">
            <h3 class="card-header">
              Instructions
            </h3>
            <div class="card-body">
              <div class="card-text">
                Click the button below to open a form and provide information for the following:
              </div>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Project Name</li>
              <li class="list-group-item">Project Type</li>
              <li class="list-group-item">Due Date</li>
              <li class="list-group-item">Hourly Rate</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card custom-card">
            <h3 class="card-header">
              Instructions
            </h3>
            <div class="card-body">
              <div class="card-text">
                Click the button below to open a form and provide information for the following:
              </div>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Project Name</li>
              <li class="list-group-item">Project Type</li>
              <li class="list-group-item">Due Date</li>
              <li class="list-group-item">Hourly Rate</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card custom-card">
            <h3 class="card-header">
              Instructions
            </h3>
            <div class="card-body">
              <div class="card-text">
                Click the button below to open a form and provide information for the following:
              </div>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Project Name</li>
              <li class="list-group-item">Project Type</li>
              <li class="list-group-item">Due Date</li>
              <li class="list-group-item">Hourly Rate</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card h-100">
          <div class="card custom-card">
            <h3 class="card-header">
              Instructions
            </h3>
            <div class="card-body">
              <div class="card-text">
                Click the button below to open a form and provide information for the following:
              </div>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Project Name</li>
              <li class="list-group-item">Project Type</li>
              <li class="list-group-item">Due Date</li>
              <li class="list-group-item">Hourly Rate</li>
            </ul>
          </div>
        </div>
      </div>
      </div>
    
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.27.0/moment.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.0/jquery-ui.min.js"></script>
    <script src="./assets/js/script.js"></script>
  </body>
  
  </html>`;

  const inquirer = require('inquirer');
  const Manager = require('./lib/Manager');
  const Engineer = require('./lib/Engineer');
  const Intern = require('./lib/Intern');
  const generateSite = require('./src/generate-site.js');
  const fs = require("fs");
  const path = require("path");
  const OUTPUT_DIR = path.resolve(__dirname, "output")
  const outputPath = path.join(OUTPUT_DIR, "team.html");
  const teamMembers = [];
  
  const promptManager = () => {
      return inquirer.prompt([
          {
              type: 'input',
              name: 'name',
              message: 'What is your name? (Required)',
              validate: nameInput => {
                  if (nameInput) {
                      return true;
                  } else {
                      console.log('Please enter your name!');
                      return false;
                  }
              }
          },
          {
              type: 'input',
              name: 'employeeID',
              message: 'Enter your employee ID (Required)',
              validate: employeeId => {
                  if (employeeId) {
                      return true;
                  } else {
                      console.log('Please enter your employee ID!');
                      return false;
                  }
              }
          },
          {
              type: 'input',
              name: 'email',
              message: 'Enter your email address (Required)',
              validate: email => {
                  if (email) {
                      return true;
                  } else {
                      console.log('Please enter your email address!');
                      return false;
                  }
              }
          },
          {
              type: 'input',
              name: 'officeNumber',
              message: 'Enter your office number (Required)',
              validate: officeNumber => {
                  if (officeNumber) {
                      return true;
                  } else {
                      console.log('Please enter your office number!');
                      return false;
                  }
              }
          },
      ]).then(answers => {
          console.log(answers);
          const manager = new Manager(answers.name, answers.employeeID, answers.email, answers.officeNumber);
          teamMembers.push(manager);
          promptMenu();
      })
  };
  
  const promptMenu = () => {
      return inquirer.prompt([
          {
              type: 'list',
              name: 'menu',
              message: 'Please select which option you would like to continue with:',
              choices: ['add an engineer', 'add an intern', 'finish building my team']
          }])
          .then(userChoice => {
              switch (userChoice.menu) {
                  case "add an engineer":
                      promptEngineer();
                      break;
                  case "add an intern":
                      promptIntern();
                      break;
                  default:
                      buildTeam();
              }
          });
  };
  
  const promptEngineer = () => {
      console.log(`
      ===============
      Add a New Engineer
      ===============
      `);
  
      return inquirer.prompt([
          {
              type: 'input',
              name: 'name',
              message: 'What is the name of engineer? (Required)',
              validate: engineerName => {
                  if (engineerName) {
                      return true;
                  } else {
                      console.log('Please enter the name of engineer!');
                      return false;
                  }
              }
          },
          {
              type: 'input',
              name: 'employeeID',
              message: 'Enter your employee ID (Required)',
              validate: employeeId => {
                  if (employeeId) {
                      return true;
                  } else {
                      console.log('Please enter your employee ID!');
                      return false;
                  }
              }
          },
          {
              type: 'input',
              name: 'email',
              message: 'Enter your email address (Required)',
              validate: email => {
                  if (email) {
                      return true;
                  } else {
                      console.log('Please enter your email address!');
                      return false;
                  }
              }
          },
          {
              type: 'input',
              name: 'githubUsername',
              message: 'Enter your Github username. (Required)',
              validate: githubUsername => {
                  if (githubUsername) {
                      return true;
                  } else {
                      console.log('Please enter your Github username!');
                      return false;
                  }
              }
          }
      ]).then(answers => {
          console.log(answers);
          const engineer = new Engineer(answers.name, answers.employeeID, answers.email, answers.githubUsername);
          teamMembers.push(engineer);
          promptMenu();
      })
  };
  
  const promptIntern = () => {
      console.log(`
      ===============
      Add a New Intern
      ===============
      `);
  
      return inquirer.prompt([
          {
              type: 'input',
              name: 'name',
              message: 'What is the name of the intern? (Required)',
              validate: internName => {
                  if (internName) {
                      return true;
                  } else {
                      console.log('Please enter the name of the intern!');
                      return false;
                  }
              }
          },
          {
              type: 'input',
              name: 'employeeID',
              message: 'Enter your employee ID (Required)',
              validate: employeeId => {
                  if (employeeId) {
                      return true;
                  } else {
                      console.log('Please enter your employee ID!');
                      return false;
                  }
              }
          },
          {
              type: 'input',
              name: 'email',
              message: 'Enter your email address (Required)',
              validate: email => {
                  if (email) {
                      return true;
                  } else {
                      console.log('Please enter your email address!');
                      return false;
                  }
              }
          },
          {
              type: 'input',
              name: 'school',
              message: 'Enter your school name. (Required)',
              validate: githubUsername => {
                  if (githubUsername) {
                      return true;
                  } else {
                      console.log('Please enter your school name!');
                      return false;
                  }
              }
          }
      ]).then(answers => {
          console.log(answers);
          const intern = new Intern(answers.name, answers.employeeID, answers.email, answers.school);
          teamMembers.push(intern);
          promptMenu();
      })
  };
  
  const buildTeam = () => {
      console.log(`
      ===============
      Finished building my team!
      ===============
      `);
  
      // Create the output directory if the output path doesn't exist
      if (!fs.existsSync(OUTPUT_DIR)) {
          fs.mkdirSync(OUTPUT_DIR)
      }
      fs.writeFileSync(outputPath, generateSite(teamMembers), "utf-8");
  }
  
  promptManager();