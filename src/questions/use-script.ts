import {Answers, ListQuestion} from "inquirer";

let color = require('colors');

const optionTemplates = [
    {name: 'JavaScript', value: 'javascript'},
    {name: 'TypeScript', value: 'typescript'},
];

const useScript: ListQuestion<Answers> = {
    type: 'list',
    name: 'useTypes',
    message: color.blue('Select your templates use.'),
    choices: optionTemplates
};

export default useScript;