import {Answers, ListQuestion} from "inquirer";

let color = require('colors');

const optionTemplates = [
    {name: 'None', value: null},
    {name: 'TypeScript', value: 'typescript'},
];

const UseTemplateQuestion: ListQuestion<Answers> = {
    type: 'list',
    name: 'useTemplate',
    message: color.blue('Select your templates use.'),
    choices: optionTemplates
};

export default UseTemplateQuestion;