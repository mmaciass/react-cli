import {Answers} from "inquirer";
import {exec} from 'child_process';

let color = require('colors');
const ProjectNewAction = (answers: Answers) => {
    const commandLine: string = `npx create-react-app ${answers.projectName}` +
        `${!answers.useTemplate ? "" : " --template " + answers.useTemplate} `;

    const mySheell = exec(commandLine);
    mySheell.stdout.on('data', (data) => {
        console.log(color.blue(data));
    });
    mySheell.stderr.on('data', (data) => {
        console.error(data);
    });
};

export default ProjectNewAction;