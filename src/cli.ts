#!/usr/bin/env node

import {program} from "commander";

// import {pkg} from '../package.json';

const cli = (args) => {
    program.version('0.1');

    program.command('create-project <name>')
        .alias('cp')
        .description('Create a project.')
        .option('--withRedux <withRedux>', 'The project configuration with Redux', true)
        .action((ap, aa) => console.log(ap, aa));

    program.command('component <name>')
        .alias('c')
        .description('Generate a component.')
        .action((ap, aa) => console.log(ap, aa));

    program.command('page <name>')
        .alias('p')
        .description('Generate a page.');

    program.command('redux-config')
        .alias('rc')
        .description('Setup the project with Redux.');

    program.parse(args);
};

cli(process.argv);
