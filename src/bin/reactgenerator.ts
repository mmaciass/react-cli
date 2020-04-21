#!/usr/bin/env node

import {program} from "commander";

const {version} = require('../../package.json');

program.version(version)
    .command('project', 'Create a project.')
    .alias('cp')
    // .option('--withRedux <withRedux>', 'The project configuration with Redux', true)
    // .action((ap, aa) => console.log(ap, aa))
    //
    // .command('component <name>')
    // .alias('c')
    // .description('Generate a component.')
    // .action((ap, aa) => console.log(ap, aa))
    //
    // .command('page <name>')
    // .alias('p')
    // .description('Generate a page.')
    //
    // .command('redux-config')
    // .alias('rc')
    // .description('Setup the project with Redux.')
    .parse(process.argv);
