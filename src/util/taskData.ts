import { ITaskData, ITeam } from "../Interfaces";

const taskData: ITaskData = {
    title: "WBS of the project",
    description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
    submissionType: "PDF",
    deadline: new Date(2021, 8, 5, 0, 0, 0, 0),
    isTeacher: true,
};

const taskTeamsData: ITeam[] = [
    {
        teamName: "Reporting Application for Software Engineering",
        submissionStatus: true,
        submissionURL: "https://drive.google.com/drive/u/1/folders/1RAhtzIO0SjDfJkEST-sz2UWuq2FjwFWE", 
    },{
        teamName: "Reporting Application ",
        submissionStatus: false,
        submissionURL: "https://drive.google.com/drive/u/1/folders/1RAhtzIO0SjDfJkEST-sz2UWuq2FjwFWE", 
    },{
        teamName: "Reporting Application Engineering",
        submissionStatus: true,
        submissionURL: "https://drive.google.com/drive/u/1/folders/1RAhtzIO0SjDfJkEST-sz2UWuq2FjwFWE", 
    },{
        teamName: "Reporting Application for Software",
        submissionStatus: true,
        submissionURL: "https://drive.google.com/drive/u/1/folders/1RAhtzIO0SjDfJkEST-sz2UWuq2FjwFWE", 
    },{
        teamName: "Reporting Application for Software Engineering",
        submissionStatus: false,
        submissionURL: "https://drive.google.com/drive/u/1/folders/1RAhtzIO0SjDfJkEST-sz2UWuq2FjwFWE", 
    },{
        teamName: "Reporting Application for Software Engineering",
        submissionStatus: true,
        submissionURL: "https://drive.google.com/drive/u/1/folders/1RAhtzIO0SjDfJkEST-sz2UWuq2FjwFWE", 
    },{
        teamName: "Reporting Application for Software Engineering",
        submissionStatus: false,
        submissionURL: "https://drive.google.com/drive/u/1/folders/1RAhtzIO0SjDfJkEST-sz2UWuq2FjwFWE", 
    },{
        teamName: "Reporting Application for Software Engineering",
        submissionStatus: false,
        submissionURL: "https://drive.google.com/drive/u/1/folders/1RAhtzIO0SjDfJkEST-sz2UWuq2FjwFWE", 
    },{
        teamName: "Reporting Application for Software Engineering",
        submissionStatus: true,
        submissionURL: "https://drive.google.com/drive/u/1/folders/1RAhtzIO0SjDfJkEST-sz2UWuq2FjwFWE", 
    }, 
];

const taskTeamData = {
    teamName: "Reporting Application for Software Engineering",
    submissionStatus: true,
    submissionURL: "https://drive.google.com/drive/u/1/folders/1RAhtzIO0SjDfJkEST-sz2UWuq2FjwFWEhttps://drive.google.com/drive/u/1/folders/1ygGVHnnG-6bKjM8mjVNAD_d5zphKl0mU", 
    // remark: "No remark till now",
}

export { taskData, taskTeamsData, taskTeamData };