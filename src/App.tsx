import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { GlobalStyle, UniformTheme } from './Styles/Global';
import { ThemeProvider, useTheme } from "styled-components";
import LoadingAnimation from "./AuxComponents/LoadingAnimation";

// ------------------ dynamic import pages ----------------------------

const LoginPage = React.lazy(() => import("./Pages/Login"));
const DashboardPage = React.lazy(() => import("./Pages/Dashboard"));
const TaskPage = React.lazy(() => import("./Pages/Tasks"));
const AddTaskPage = React.lazy(() => import("./Pages/AddTask"));
const SearchTeamsPage = React.lazy(() => import("./Pages/SearchTeams"));

// ------------------- dynamic import ends -------------------------------

// -------------------------- routing happens here ----------------------------
function App() {
  return (
    <ThemeProvider theme={UniformTheme}>
      <GlobalStyle theme={UniformTheme}/>
      <Suspense fallback={<LoadingAnimation />}>
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
          </Switch>
        </Router>
      </Suspense>
    </ThemeProvider>
  );
}

// ------------------------------ end of routing --------------------------

export default App;
