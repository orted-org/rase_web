import { ITask } from "../Interfaces";
// isTeacher is to be taken from auth context

// this is mostly taken from auth context
const dashData = {
    userName: "Manoj Boganadham",
    teamName: "Reporting Application for Software Engineering",
    teamMembers: [
        'Himanshu Sah',
        'Govind Rathore',
        'Partiv Reddy',
        'Manoj Boganahdham'
    ],
    isTeacher: true,
};


const dashTasks :ITask[] = [
    {
        title: "WBS of the project",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia",
        submissionType: "PDF",
        deadline: new Date(2021, 10, 10, 0, 0, 0, 0),
    },
    {
        title: "RBS of the project",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia",
        submissionType: "PDF",
        deadline: new Date(2021, 9, 31, 0, 0, 0, 0),
    },
    {
        title: "task 3",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia",
        submissionType: "PDF",
        deadline: new Date(2021, 7, 27, 0, 0, 0, 0),
    },
    {
        title: "task 4",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia",
        submissionType: "PDF",
        deadline: new Date(2021, 7, 20, 0, 0, 0, 0),
    },
    {
        title: "task 5",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia",
        submissionType: "PDF",
        deadline: new Date(2021, 7, 17, 0, 0, 0, 0),
    },
    {
        title: "task 6",
        description: "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available. Wikipedia",
        submissionType: "PDF",
        deadline: new Date(2021, 7, 17, 0, 0, 0, 0),
    },
    
];

export {dashData, dashTasks};