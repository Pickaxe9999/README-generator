// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection} = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    name: "title",
    message: "What is the title of your READmE.md?",
    validate: titleInput =>{
        if(titleInput){
            return true;
        }else{
            console.log("Please enter a title for the README.md!");
            return false;
        }
    }
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) =>{
        fs.writeFile(fileName, data, err =>{
            if(err){
                reject(err)
                return;
            }

            resolve({
                ok: true,
                message: "File created"
            })
        })
    })
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init().then(userData => {
    return generateMarkdown(userData);
}).then(fileData => {
    return writeToFile("./dist/README.md", fileData);
}).then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
