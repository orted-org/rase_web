import Config from "./HttpConfig"

const Endpoints = {
    loginPost: MakeURL("/auth/login"),
    logout: MakeURL("/auth/logout"),
    getTaskById: MakeURL("/tasks"),
    getUserDetailsById: MakeURL("/tasks"),
    getAllTasks: MakeURL("/tasks"),
    getAllTeams: MakeURL("/team"),
    joinTeam: MakeURL("/team/join"),
    createTeam: MakeURL("/team/create"),
    createTask: MakeURL("/task/create"),
    getSubmissionStatus: MakeURL("/task/status"),
}

function MakeURL(endpoint: string) {
    return Config.baseUrl + endpoint;
}

export { Endpoints }