import {program} from "commander";
import New from "../commands/project/new";

program
    .command('new')
    .action(New)
    .parse(process.argv);

