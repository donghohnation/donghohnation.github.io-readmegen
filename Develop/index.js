// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const genMark = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'what is the title of this project?',
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        console.log('please enter a project title');
        return false;
      }
    }
  },
  {
    type: 'list',
    name: 'license',
    message: 'what license does your project use?',
    choices: ['none', 'apache 2.0', 'MIT', 'GPL', 'v3.0'],
    validate: licenseInput = () => {
      if (licenseInput) {
        return true;
      } else {
        console.log('please select one of the four options')
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'description',
    message: 'provide project description',
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        console.log('please provide a project description');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'installation',
    message: 'what steps are needed to install your project?',
    validate: installationInput => {
      if (installationInput) {
        return true;
      } else {
        console.log('please provide installation steps');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'usage',
    message: 'what is the use of your project?',
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        console.log('please provide a use for you project');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'contributions',
    message: 'what buidelines must others follow in order to contribute?',
    validate: contributionsInput => {
      if (contributionsInput) {
        return true;
      } else {
        console.log('please enter contribution guidelines');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'test',
    message: 'how do you test this project?',
    validate: testInput => {
      if (testInput) {
        return true;
      } else {
        console.log('please explain how to test this project');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'askMe',
    message: 'what is your GitHub username so others can reach you for questions?',
    validate: askMeInput => {
      if (askMeInput) {
        return true;
      } else {
        console.log('please provide your GitHub username');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'what is your email?',
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        console.log('please enter a project title');
        return false;
      }
    }
  }
];

// TODO: Create a function to write README file
function writeToFile = fileContent => {
  return newPromise((resolve, reject) => {
    fs.writeFile('./generatedREADME.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true
      });
    });
  });
};



// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then(function (answer) {
      console.log(answer);
      var fileContent = generatedMarkdown(answer);
      writeToFile(fileContent)
    });
}

// Function call to initialize app
init();

//exports
module.exports = questions;
