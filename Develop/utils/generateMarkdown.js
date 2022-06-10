const fs = require('fs');
const inquirer = require('inquirer');
const genMark = require('./index.js')


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = '';
  if (license === 'MIT') {
    badge = '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)'
  } else if (license === 'Apache 2.0') {
    badge = '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)'
  } else if (license === 'GPL v3.0') {
    badge = '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)'
  } else {
    badge = ''
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = '';
  if(license === 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
  } else if (license === 'Apache 2.0') {
    licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0'
  } else if (license === 'GPL v3.0') {
    licenseLink = 'https://www.gnu.org/licenses'
  } else {
    licenseLink = ''
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ''
  if (license === 'None') {
    licenseSection = ''
  } else {
    licenseSection =
    `License: ${license}`
  }
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {

  return `
  
  # ${answer.title}
  ## ${renderLicenseSection(answer.license)} ${renderLicenseBadge(answer.license)}
  ### ${renderLicenseLink(answer.license)}

  ## Table of Contents
  ### * [License](#license)
  ### * [Installation](#installation)
  ### * [Usage](#usage)
  ### * [Contributors](#contributors)
  ### * [Tests](#tests)
  ### * [Questions](#questions)

  ## Installation:
  ### You must install the following for this app to function:
  ### ${answer.installation}

  ## Usage:
  ### ${answer.usage}

  ## Questions:
  ### If you have any questions, contact me
  ### GitHub: https://github.com/${answer.askeMe}
  ### or
  ### Email: ${answer.email}
`;
}

module.exports = generateMarkdown;
