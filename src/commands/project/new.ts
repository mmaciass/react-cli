import {Question, prompt, Answers} from "inquirer";
import projectName from "../../questions/project-name";
import {ProjectNewArt} from "../../arts/project";

async function New(args) {
    console.log(ProjectNewArt);

    const CliQuestions: Question[] = [
        projectName
    ];

    prompt(CliQuestions)
        .then((answers: Answers) => {
            console.log(answers);
        })

}

export default New;