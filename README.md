# Professional README Generator Starter Code

[How to create a Professional README](https://coding-boot-camp.github.io/full-stack/github/professional-readme-guide)
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project



GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
## create a prompt that asks for 
- Title
- description
- table of contents
- intstillaiton
- usage
- liscense
- contributing
- tests
- questions


WHEN I enter my project title
THEN this is displayed as the title of the README
- append Title to the Readme.md file


WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
-additional information to the readme as provided by the user


WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
-display a badge for a provided liscense if the user provides one near the top of the file


WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
- add the github username to the questions section along with a link to the users github


WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
- add the users email with instructions on how to reach them


WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
- link the table of contents to their corresponding sections


Branch Layout
- feature/project-title
- feature/readme-layout
- feature/liscense-information
- feature/github-information
- feature/email-reach-out
- feature/table-of-contents