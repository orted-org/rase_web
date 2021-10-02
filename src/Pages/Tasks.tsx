import styled, { useTheme } from "styled-components";
import { useState, useRef, useEffect } from "react";
import { PrimaryButton, SecondaryButton } from "../MicroComponents/Button";
import { StyledItem } from "../MicroComponents/Item";
import { StyledRecyclerView, StyledFlexBoxRow } from "../AuxComponents/Flex";
import { StyledCard, StyledCardContainer, StyledTeam, StyledUpcoming } from "../MicroComponents/Card";
import { StyledTopBar } from "../MicroComponents/TopBar";
import { SideBar } from "../AuxComponents/Sidebar";
import { StyledPageContainer, StyledPageContent, StyledHeading } from "../AuxComponents/PageContainer";
import { taskData, taskTeamData, taskTeamsData } from "../util/taskData";
import { PlaceFiller } from "../AuxComponents/Filler";
import { IconContainer } from "../MicroComponents/IconContainer";
import { SVG } from "../AuxComponents/Svg";
import { StyledSearchBar } from "../MicroComponents/SearchBar";
import { StyledText } from "../MicroComponents/SecText";
import { ITeam } from "../Interfaces";
import { SubmissionType } from "../Types";

// ------------------------------ Interfaces --------------------------------------

interface ITaskTeamData{
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
    teamData: ITaskTeamData;
}

// TODO
interface ITeacherTeamsViewProps{
    teamsData: any;
}

interface IStudentTaskViewProps{
    teamData: any;
}

interface ITaskPageProps{

}

// --------------------------------- End of interfaces -----------------------------


function TeacherTeamsView(props: ITeacherTeamsViewProps){
    const data = props.teamsData;
    const theme = useTheme() as any;
    const searchBarDiv = useRef(null) as any;
    const searchBar = useRef(null) as any;
    const [searchText, setSearchText] = useState('');

    const showSearchBar = ()=>{
        searchBarDiv.current.style.display = 'flex';
        searchBar.current.focus();
    }

    const hideSearchBar = ()=>{
        searchBarDiv.current.style.display = 'none';
        searchBar.current.value = '';
        setSearchText('');
    }

    return (
        <div style={{paddingBottom: 30}}>
            <StyledHeading style={{
                fontSize: '1.2rem',
                color: theme.primaryAccent
            }}>
                <h3
                    style={{
                        width: '100%'
                    }}
                >Teams status</h3>
                <div style={{
                    width: 25,
                    height: 25,
                    margin: 'auto',
                    color: theme.primaryAccent,
                    cursor: 'pointer'
                }}
                onClick = {showSearchBar}
                >
                    {SVG.search}
                </div>
            </StyledHeading>
            <div style={{
                    width: '90%',
                    paddingLeft: 5,
                    margin: '10px auto',
                    display: 'none',
                    flexDirection: 'row',
                }}
                ref={searchBarDiv}   
                >
                <StyledSearchBar
                    type = "text"
                    ref = {searchBar}
                    placeholder = "Search for teams"
                    value = {searchText}
                    onChange = {(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <div style={{
                        width: 25,
                        height: 25,
                        margin: 'auto',
                        cursor: 'pointer',
                        color: theme.secondaryText,
                    }}
                    onClick={hideSearchBar}
                >
                    {SVG.cross}
                </div>
            </div>
            {searchText ==='' ? <>
                <StyledHeading>
                    <h3>Pending</h3>
                    <PlaceFiller/>
                </StyledHeading>
                <StyledRecyclerView>
                    {
                        data.pendingTeams.map((team: ITeam)=>{
                            return <StyledItem>
                                <StyledCardContainer>
                                    <StyledTeam style={{ width: '70%' }}>
                                        <p style={{fontSize: '1.3rem'}}>{team.teamName}</p>
                                        <StyledFlexBoxRow style={{ justifyContent: 'space-between', paddingTop: 5 }}>
                                            <p
                                                style={{
                                                    fontFamily : theme.secondaryFont,
                                                    fontSize : 12,
                                                    color : theme.negativeAccent
                                                }}
                                            >Pending</p>
                                        </StyledFlexBoxRow>
                                    </StyledTeam>
                                    
                                    <StyledUpcoming style={{alignSelf: 'center'}}>
                                        {/* <SecondaryButton text="Add Remark"></SecondaryButton> */}
                                        <SecondaryButton text="View" style={{ width: '100%'}}></SecondaryButton>
                                    </StyledUpcoming>
                                </StyledCardContainer>
                            </StyledItem>
                        })
                    }
                </StyledRecyclerView>
                <StyledHeading>
                    <h3>Submitted</h3>
                    <PlaceFiller/>
                </StyledHeading>
                <StyledRecyclerView>
                    {
                        data.completedTeams.map((team: ITeam)=>{
                            return <StyledItem>
                                <StyledCardContainer>
                                    <StyledTeam style={{ width: '70%' }}>
                                        <p style={{fontSize: '1.3rem'}}>{team.teamName}</p>
                                        <StyledFlexBoxRow style={{ justifyContent: 'space-between', paddingTop: 5 }}>
                                            <p
                                                style={{
                                                    fontFamily : theme.secondaryFont,
                                                    fontSize : 12,
                                                    color : theme.positiveAccent
                                                }}
                                            >Submitted</p>
                                        </StyledFlexBoxRow>
                                    </StyledTeam>
                                    
                                    <StyledUpcoming style={{alignSelf: 'center'}}>
                                        {/* <SecondaryButton text="Add Remark"></SecondaryButton> */}
                                        <SecondaryButton text="View" style={{ width: '100%', marginTop: 5 }}></SecondaryButton>
                                    </StyledUpcoming>
                                </StyledCardContainer>
                            </StyledItem>
                        })
                    }
                </StyledRecyclerView>
            </> : <></>}
        </div>
    );
}

function StudentTaskView(props: IStudentTaskViewProps){
    const data = props.teamData;
    console.log(data);
    const theme = useTheme() as any;

    return (
        <div style={{ paddingBottom: 20 , position: "absolute", bottom: 0, display: "flex", flexDirection: "column", justifyContent: "space-between", width: '100%'}}>
            <div>
                {/* view remark button (for future) */}
                {/* <StyledCard style={{marginBottom: 10}}>
                    <h3>Remark</h3>
                    <StyledText style={{ paddingBottom: 10 }}>
                        Remarks given by teacher appear here.
                    </StyledText>
                    <StyledText style={{ fontSize: '1.05rem', fontFamily: theme.primaryFont, color: theme.positiveAccent }}>
                        {data.remark}
                    </StyledText>
                </StyledCard> */}
                <StyledCard>
                    <h3>Submission</h3>
                    <StyledText style={{ paddingBottom: 10 }}>
                        Tap on submit button to create your submission
                    </StyledText>
                    {data.submissionURL!=="" ? <a href={data.submissionURL} style={{textDecoration: 'none', color: theme.positiveAccent}} target={'_blank'}>Tap to view your submission</a> : 'No submission yet'}
                    <PrimaryButton text="Submit"/>
                </StyledCard>
            </div>
        </div>
    );
}


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

    const toggleSideBar = ()=>{
        setIsSidebarOpen(prevState=>{
            return !prevState;
        });
    }

    const [data, setData] = useState(initData);
    const [isTeacher, setIsTeacher] = useState(initData.isTeacher);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isSideBarOpen, setIsSidebarOpen] = useState(false);

    useEffect(()=>{
        // setData(initData);
        // setIsEmpty(false);
        // setIsTeacher(data.isTeacher);
    }, []);
    
    const theme = useTheme() as any;

    return (
        <StyledPageContainer>
            <SideBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} isTeacher={isTeacher}/>
            <StyledTopBar>
                <IconContainer onClick={toggleSideBar}>
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

export { TaskPage };