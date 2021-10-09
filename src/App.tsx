import React, { Suspense, useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { GlobalStyle, UniformTheme } from './Styles/Global';
import { ThemeProvider } from "styled-components";
import LoadingAnimation from "./AuxComponents/LoadingAnimation";
import { UserAuthContext, SideBarContext } from "./util/Context";
import ExptPage from "./Pages/Expt";
import { SideBar } from "./AuxComponents/Sidebar";

// ------------------ dynamic import pages ----------------------------

const LoginPage = React.lazy(() => import("./Pages/Login"));
const DashboardPage = React.lazy(() => import("./Pages/Dashboard"));
const TaskPage = React.lazy(() => import("./Pages/Tasks"));
const AddTaskPage = React.lazy(() => import("./Pages/AddTask"));
const AddTeamPage = React.lazy(() => import("./Pages/AddTeam"));
const SearchTeamsPage = React.lazy(() => import("./Pages/SearchTeams"));
const JoinTeamPage = React.lazy(() => import("./Pages/JoinTeam"));
const NotFound = React.lazy(() => import("./Pages/NotFound"));

// ------------------- dynamic import ends -------------------------------

// -------------------------- routing happens here ----------------------------
function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isTeacher, setIsTeacher] = useState<boolean>(true);

  const setUserLoggedIn = (loggedIn: boolean) => {
    setIsUserLoggedIn(loggedIn);
  }

  const toggleSideBar = ()=>{
    setIsSidebarOpen(prevState=>{
        return !prevState;
    });
  }

  return (
    <ThemeProvider theme={UniformTheme}>
      <GlobalStyle theme={UniformTheme}/>
      <Suspense fallback={<LoadingAnimation />}>
        <UserAuthContext.Provider value={{ isUserLoggedIn, setUserLoggedIn }}>
          <SideBarContext.Provider value={{ isSidebarOpen, toggleSideBar }}>
              <Router>
                <Switch>
                  {/* for login */}
                  <Route exact path='/'>
                    <LoginPage />
                  </Route>
                  {/* dashboard page
                  user will be redirected to this page after login */}
                  <Route exact path='/dashboard'>
                    <DashboardPage />
                  </Route>
                  {/* Task page - to see all tasks */}
                  <Route exact path='/task'>
                    <TaskPage />
                  </Route>
                    {/* to add new task - only for teacher
                    if not teacher but tried to access this route, user will be redirected to dashboard */}
                  <Route exact path='/add-task'>
                    <AddTaskPage />
                  </Route>
                  {/* to add new team - only for student
                    if not teacher but tried to access this route, user will be redirected to dashboard */}
                  <Route exact path='/add-team'>
                    <AddTeamPage />
                  </Route>
                  {/* to search teams - only for teacher
                  if not teacher, but tried to access this route, user will be redirected to dashboard */}
                  <Route exact path='/search-teams'>
                    <SearchTeamsPage />
                  </Route>
                  {/* to create or join a team - only for student
                  if not student, but tried to access this route, user will be redirected to dashboard */}
                  <Route exact path='/join-team'>
                    <JoinTeamPage />
                  </Route>
                  {/* just a route to experiment with react */}
                  <Route exact path='/expt'>
                    <ExptPage />
                  </Route>
                  {/* error page - this is rendered when no route above is matching with the url */}
                  <Route>
                    <NotFound />
                  </Route>
                </Switch>
              </Router>
          </SideBarContext.Provider>
        </UserAuthContext.Provider>
      </Suspense>
    </ThemeProvider>
  );
}

// ------------------------------ end of routing --------------------------

export default App;
