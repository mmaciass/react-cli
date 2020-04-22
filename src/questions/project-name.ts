import {Answers, Question} from "inquirer";

let color = require('colors');

const projectName: Question<Answers> = {
    type: 'input',
    name: 'projectName',
    message: color.blue('Enter project name'),
    validate(input: string): boolean {
        return !!input;
    }
};

export default projectName;