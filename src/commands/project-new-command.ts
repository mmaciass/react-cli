import {prompt, Question} from "inquirer";
import ProjectNameQuestion from "../questions/project-name-question";
import {ProjectNewArt} from "../arts/project";
import UseTemplateQuestion from "../questions/use-template-question";
import ProjectNewAction from "../actions/project-new-action";

async function ProjectNewCommand(args) {
    console.log(ProjectNewArt);

    const CliQuestions: Question[] = [
        ProjectNameQuestion, UseTemplateQuestion
    ];

    prompt(CliQuestions)
        .then(ProjectNewAction)

}

export default ProjectNewCommand;