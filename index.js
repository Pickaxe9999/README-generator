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
    }},
    {
        type: "input",
        name: "description",
        message: "Please describe the purpose of your project the README defines.",
    },
    {
        type: "input",
        name: "installation",
        message: "Please decribe how the user will install this file.",
    },
    {
        type: "input",
        name: "usage",
        message: "Under what terms would a user would a user want to use the applicaiton and how to use it",
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list all application contributors.",
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide a description of how the user can test the application and get sample data if need be."
    },
    {
        type: "input",
        name: "questions",
        message: "Input a way a user can get in contact with you for follow-up questions."
    },
    {
        type: "checkbox",
        name: "license",
        message: "Please select any liscense you wish to add to the project. (Check all that apply)",
        choices: ['BSD','MIT','CCO']
    }
];

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

//sample object
const sampleData = {
    title: 'Title',
    description: 'Product Description',
    installation: 'Installation description',
    usage: 'usage Description',
    contributors: 'Contributors',
    tests: 'How to test',
    questions: 'jacob.hannah164@gmail.com',
    license: ['BSD', 'MIT', 'CCO']
}

// Function call to initialize app
init().then(userData => {
    console.log(userData);
    return generateMarkdown(sampleData);
}).then(fileData => {
    return writeToFile("./dist/README.md", fileData);
}).then(writeFileResponse => {
    console.log(writeFileResponse.message);
})
