import {Question, prompt, Answers} from "inquirer";
import projectName from "../questions/project-name";
import {ProjectNewArt} from "../arts/project";
import useScript from "../questions/use-script";

async function ProjectNew(args) {
    console.log(ProjectNewArt);

    const CliQuestions: Question[] = [
        projectName, useScript
    ];

    prompt(CliQuestions)
        .then((answers: Answers) => {
            console.log(answers);
        })

}

export default ProjectNew;