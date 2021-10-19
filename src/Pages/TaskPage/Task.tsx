import styled, { useTheme } from "styled-components";
import { useState, useRef, useEffect, useContext } from "react";
import { PrimaryButton, SecondaryButton } from "../../MicroComponents/Button";
import { StyledItem } from "../../MicroComponents/Item";
import { StyledRecyclerView, StyledFlexBoxRow } from "../../AuxComponents/Flex";
import { StyledCard, StyledCardContainer, StyledTeam, StyledUpcoming } from "../../MicroComponents/Card";
import { StyledTopBar } from "../../MicroComponents/TopBar";
import { SideBar } from "../../AuxComponents/Sidebar";
import { StyledPageContainer, StyledPageContent, StyledHeading } from "../../AuxComponents/PageContainer";
import { taskData, taskTeamData, taskTeamsData } from "../../util/taskData";
import { PlaceFiller } from "../../AuxComponents/Filler";
import { IconContainer } from "../../MicroComponents/IconContainer";
import { SVG } from "../../AuxComponents/Svg";
import { StyledSearchBar } from "../../MicroComponents/SearchBar";
import { StyledText } from "../../MicroComponents/SecText";
import { ITeam } from "../../Interfaces";
import { SubmissionType } from "../../Types";
import { useHistory } from "react-router";
import { SideBarContext } from "../../util/Context";
import { TeacherTeamsView } from "./TeacherTeamsView";
import { StudentTaskView } from "./StudentTaskView"

// ------------------------------ Interfaces --------------------------------------

interface ITaskPageTeamData{
    teamName: string;
    submissionStatus: boolean;
    submissionURL?: string;
}

interface ITaskPageData{
    title: string;
    description: string;
    submissionType: SubmissionType;
    deadline: Date;
    isTeacher: boolean;
    completedTeams: ITeam[];
    pendingTeams: ITeam[];
    teamData: ITaskPageTeamData;
}

interface ITaskPageProps{

}

// --------------------------------- End of interfaces -----------------------------

function TaskPage(props: ITaskPageProps){
    const initData: ITaskPageData = {
        title: taskData.title,
        description: taskData.description,
        submissionType: taskData.submissionType,
        deadline: taskData.deadline,
        isTeacher: taskData.isTeacher,
        completedTeams: [], 
        pendingTeams: [],
        teamData: taskTeamData,
    }
    
    initData.completedTeams = taskTeamsData.filter((team)=>{
        return team.submissionStatus;
    });
    
    initData.pendingTeams = taskTeamsData.filter((team)=>{
        return !team.submissionStatus;
    });

    const [data, setData] = useState(initData);
    const [isTeacher, setIsTeacher] = useState(initData.isTeacher);
    const [isEmpty, setIsEmpty] = useState(false);
    const sideBarContext = useContext(SideBarContext);

    useEffect(()=>{
        // setData(initData);
        // setIsEmpty(false);
        // setIsTeacher(data.isTeacher);
    }, []);
    
    const theme = useTheme() as any;

    return (
        <StyledPageContainer>
            <SideBar isSideBarOpen={sideBarContext.isSidebarOpen} toggleSideBar={sideBarContext.toggleSideBar} isTeacher={isTeacher}/>
            <StyledTopBar>
                <IconContainer onClick={sideBarContext.toggleSideBar}>
                    {SVG.menubar}
                </IconContainer>
                <h2>Tasks</h2>
                <PlaceFiller></PlaceFiller>
            </StyledTopBar>
            <StyledPageContent>
                <StyledCard
                    style = {{backgroundColor: theme.secondaryBack, boxShadow: theme.boxShadow}}
                >
                    <StyledCardContainer>
                        <StyledTeam>
                            <h2 style={{ marginBottom: 5, color: theme.primaryAccent }}>{data.title}</h2>
                            <p
                                style={{
                                    fontSize : 13,
                                    marginTop: 5,
                                    fontWeight: 700
                                }}
                            >Deadline: <span
                                    style={{
                                        fontFamily: theme.secondaryFont,
                                        fontWeight: 400,
                                        color : theme.secondaryText,
                                    }}
                                >
                                    {data.deadline.toLocaleDateString()}
                                </span>
                            </p>
                            <p
                                style ={{
                                    fontSize : 13,
                                    marginTop: 5,
                                    fontWeight: 700
                                }}
                            >Submission type: <span
                                    style={{
                                        fontFamily: theme.secondaryFont,
                                        fontWeight: 400,
                                        color : theme.secondaryText,
                                    }}
                                >
                                    {data.submissionType}
                                </span>
                            </p>
                        </StyledTeam>
                    </StyledCardContainer>
                </StyledCard>
                <StyledHeading style={{
                    fontSize: '1.2rem',
                    color: theme.primaryAccent
                }}>
                    <h3>Description</h3>
                    <PlaceFiller/>
                </StyledHeading>
                <StyledText style={{paddingTop: 5, paddingBottom: 5, paddingRight: 30, paddingLeft: 30}}>
                    {data.description}
                </StyledText>
                {isTeacher  ? !isEmpty && <TeacherTeamsView teamsData={data}/> : <StudentTaskView teamData={data.teamData}/>}
            </StyledPageContent>
        </StyledPageContainer>
    );
};

export default TaskPage;