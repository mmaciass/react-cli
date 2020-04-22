import {program} from "commander";
import ProjectNewCommand from "../commands/project-new-command";

program
    .command('new')
    .action(ProjectNewCommand)
    .parse(process.argv);

