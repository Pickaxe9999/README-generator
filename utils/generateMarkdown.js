//returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = ``;
  for(var i = 0; i < license.length; i++){
    console.log(license[i]);
    if(license[i] === 'BSD'){
      licenseBadge += `![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)
`
    }else if(license[i] === 'MIT'){
      licenseBadge += `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
`
    }else if(license[i] === 'CCO'){
      licenseBadge += `![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)
`
    }
  }
  return licenseBadge;
}

//returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = ``;
  if(license === 'BSD'){
    licenseLink += `(https://opensource.org/licenses/BSD-3-Clause)`
  }else if(license === 'MIT'){
    licenseLink += `(https://opensource.org/licenses/MIT)`
  }else if(license === 'CCO'){
    licenseLink += `(https://creativecommons.org/publicdomain/zero/1.0/)`
  }
  return licenseLink;
}

//returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseSection = ``;
  for(var i = 0; i < license.length; i++){
    if(i > 0 && i != license.length){
      licenseSection += ', ';
    }
    if(license[i] === 'BSD'){
      licenseSection += `[BSD]${renderLicenseLink(license[i])}`
    }else if(license[i] === 'MIT'){
      licenseSection += `[MIT]${renderLicenseLink(license[i])}`
    }else if(license[i] === 'CCO'){
      licenseSection += `[CC0-1.0]${renderLicenseLink(license[i])}`
    }
  }
  if(license.length > 1){
    licenseSection += ' licenses'
  }else{
    licenseSection += ' license'
  }
  return licenseSection;
}

//return the users github name and the name as a link
function userContactDisplay (username, link) {
  return `[${username}](${link})`;
}

//generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Table of contents
[Description](#description)

[Installation](#installation)

[Usage](#usage)

[Contributors](#contributors)

[Testing](#how-to-test)

[Questions?](#questions)

[License Information](#license-information)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributors
${data.contributors}

## How to test
${data.tests}

## Questions?
GitHub: ${userContactDisplay(data.githubUsername, data.githubLink)}

For any aditional question you can reach me at [${data.email}](${data.email})

## License Information
This project is licensed under the ${renderLicenseSection(data.license)}. 
`;
}

module.exports = {generateMarkdown};
