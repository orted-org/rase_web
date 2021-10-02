import React from "react";
import { GlobalStyle, UniformTheme } from './Styles/Global';
import { Card } from './MicroComponents/Card';
import { PrimaryButton, SecondaryButton } from './MicroComponents/Button';
import { Item } from './MicroComponents/Item';
import { LoginPage } from './Pages/Login';
import { DashboardPage } from './Pages/Dashboard';
import { SearchBar } from "./MicroComponents/SearchBar";
import { TaskPage } from "./Pages/Tasks";
import { AddTaskPage } from "./Pages/AddTask";
import { SideBar } from "./AuxComponents/Sidebar";
import { ThemeProvider, useTheme } from "styled-components";

// routing happens here
function App() {
  return (
    <ThemeProvider theme={UniformTheme}>
      <GlobalStyle theme={UniformTheme}/>
      <TaskPage/>
      {/* <SearchBar/> */}
      {/* <DashboardPage/> */}
      {/* <AddTaskPage/> */}
      {/* <LoginPage/> */}
    </ThemeProvider>
  );
}

export default App;
