const inquirer = require('inquirer');
const fs = require('fs');

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

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
    {
      type: 'checkbox',
      name: 'Job',
      message: 'What is your job title?',
      choices: ['Manager', 'Engineer', 'Intern',
    ], 
    },
    {
      type: 'input',
      name: 'Email',
      message: 'Enter your Email',
    },
   
  ])
  .then((answers) => {
    const htmlPageContent = generateHTML(answers);

    fs.writeFile('index.html', htmlPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created index.html!')
    );
  });
