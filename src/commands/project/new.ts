import inquirer from "inquirer";

let color = require('colors');

async function New(args) {
    console.log(color.rainbow('............(0 0)\n' +
        '.---oOO-- (_)-----.\n' +
        '╔═════════════════╗\n' +
        '║   React Gen!♥.♥ ║\n' +
        '╚═════════════════╝\n' +
        '\'----------------------oOO\n' +
        '........|__|__|\n' +
        '.......... || ||\n' +
        '....... ooO Ooo\n\n\n'));
    const input = await inquirer.prompt([
        {
            type: 'input',
            name: 'project-name',
            message: color.blue('Enter project name'),
        }
    ]);
    console.log('a', input)
}

export default New;