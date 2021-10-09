import { Endpoints } from "./HttpHelper";

// TODO: need to decide body of all POST requests

// TODO: change these objects if some body required for the request or just use ES6 object spreading property and expand it
const initGetReq: RequestInit = {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
};

const initPostReq: RequestInit = {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
        'Content-type': 'application/json'
    }
};

// ----------------------- GET requests --------------------------

const dummyReq = new Request('https://dummy.restapiexample.com/api/v1/employees');

const getTaskDetailsReq = new Request(Endpoints.getTaskById, initGetReq);

const getAllTasksReq = new Request(Endpoints.getAllTasks,  initGetReq);

const getAllTeamsReq = new Request(Endpoints.getAllTeams,  initGetReq);

const getSubmissionStatusReq = new Request(Endpoints.getSubmissionStatus, initGetReq);

const getUserDetailsReq = new Request(Endpoints.getUserDetailsById, initGetReq);

// -------------------- POST requests --------------------

const joinTeamReq = new Request(Endpoints.joinTeam, initPostReq);

const createTeamReq = new Request(Endpoints.createTeam, initPostReq);

const createTaskReq = new Request(Endpoints.createTask, initPostReq);

// -------------------------- DELETE requests --------------------



export { dummyReq };