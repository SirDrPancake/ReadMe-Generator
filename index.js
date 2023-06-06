// inquirer
const inquirer = require('inquirer');
// use fs from node in case i forget use https://nodejs.org/docs/latest-v16.x/api/fs.html#fswritefilesyncfile-data-options
const fs = require('fs');

// what the function init will show in the application
function init() {
  // use inquirer to prompt the user with questions 
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a description of your project:',
      },
      {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
      },
      {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
      },
      {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
      },
      {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
      },
      {
        type: 'list',
        message: "Choose a license for your project.",
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'BSD 3-Clause', 'None']
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
    ])
    .then((answers) => {
      // Generate the content for the README.md file
      const content = `# ${answers.title}
      
[![License](https://img.shields.io/badge/License-${encodeURIComponent(answers.license)}-blue.svg)](https://opensource.org/licenses/${encodeURIComponent(answers.license)})

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
 [${answers.license}](https://opensource.org/licenses/${encodeURIComponent(answers.license)}) license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
contact me via GitHub or email for further questions:

GitHub: [${answers.github}](https://github.com/${answers.github})

Email: ${answers.email}`;

      // Write the content to the README.md file
      fs.writeFile('README.md', content, function (err) {
        if (err) {
          console.error(err);
        } else {
          console.log('README file generated successfully!');
        }
      });
    });
}

// call init function to start
init();