import {program} from "commander";
import ProjectNew from "../commands/project-new";

program
    .command('new')
    .action(ProjectNew)
    .parse(process.argv);

