import React, { Suspense, useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { GlobalStyle, UniformTheme } from './Styles/Global';
import { ThemeProvider, useTheme } from "styled-components";
import LoadingAnimation from "./AuxComponents/LoadingAnimation";
import { UserAuthContext } from "./util/Context";

// ------------------ dynamic import pages ----------------------------

const LoginPage = React.lazy(() => import("./Pages/Login"));
const DashboardPage = React.lazy(() => import("./Pages/Dashboard"));
const TaskPage = React.lazy(() => import("./Pages/Tasks"));
const AddTaskPage = React.lazy(() => import("./Pages/AddTask"));
const SearchTeamsPage = React.lazy(() => import("./Pages/SearchTeams"));
const JoinTeamPage = React.lazy(() => import("./Pages/JoinTeam"));
const NotFound = React.lazy(() => import("./Pages/NotFound"));

// ------------------- dynamic import ends -------------------------------

// -------------------------- routing happens here ----------------------------
function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const setUserLoggedIn = (loggedIn: boolean) => {
    setIsUserLoggedIn(loggedIn);
  }

  return (
    <ThemeProvider theme={UniformTheme}>
      <GlobalStyle theme={UniformTheme}/>
      <Suspense fallback={<LoadingAnimation />}>
        <UserAuthContext.Provider value={{ isUserLoggedIn, setUserLoggedIn }}>
          <Router>
            <Switch>
              <Route exact path='/'>
                <LoginPage />
              </Route>
              <Route exact path='/task'>
                <TaskPage />
              </Route>
              <Route exact path='/add-task'>
                <AddTaskPage />
              </Route>
              <Route exact path='/search-teams'>
                <SearchTeamsPage />
              </Route>
              <Route exact path='/dashboard'>
                <DashboardPage />
              </Route>
              <Route exact path='/join-team'>
                <JoinTeamPage />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </Router>
        </UserAuthContext.Provider>
      </Suspense>
    </ThemeProvider>
  );
}

// ------------------------------ end of routing --------------------------

export default App;
