import { SubmissionType } from "./Types";

export interface ITask{
    title: string;
    description: string;
    submissionType: SubmissionType;
    deadline: Date;
}

export interface ITeam{
    teamName: string;
    submissionStatus: boolean;
    submissionURL: string;
}

export interface ITaskData extends ITask{
    isTeacher: boolean;
}