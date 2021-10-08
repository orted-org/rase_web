import { useTheme } from "styled-components";
import { useState } from "react";
import { FixedButton, SecondaryButton } from "../MicroComponents/Button";
import { StyledItem } from "../MicroComponents/Item";
import { StyledRecyclerView, StyledFlexBoxRow, StyledFlexBoxCol } from "../AuxComponents/Flex";
import { StyledPageContainer, StyledPageContent, StyledHeading } from "../AuxComponents/PageContainer";
import { StyledCard, StyledCardContainer, StyledTeam, StyledUpcoming } from "../MicroComponents/Card";
import { dashData, dashTasks } from "../util/data";
import { useEffect } from "react";
import { PlaceFiller } from "../AuxComponents/Filler";
import { SideBar } from "../AuxComponents/Sidebar";
import { SVG } from "../AuxComponents/Svg";
import { StyledTopBar } from "../MicroComponents/TopBar";
import { IconContainer } from "../MicroComponents/IconContainer";
import { ITask } from "../Interfaces"

// ---------------------------- Interfaces required --------------------------

interface IDashBoardPageProps{

}

interface ITaskPageData{
    userName: string;
    teamName: string;
    teamMembers: string[];
    due: ITask[];
    completed: ITask[];
    isTeacher: boolean;
}

interface ITaskViewConfig{
    data: ITaskPageData;
    isTeacher: boolean;
}

interface ITaskViewProps{
    config: ITaskViewConfig;
}

// ---------------------------- End of interfaces ---------------------------

// ---------------------------- Components to be exported -------------------

function TasksView(props: ITaskViewProps){
    const data = props.config.data;
    const isTeacher = props.config.isTeacher;
    const theme = useTheme() as any;

    return (
        <>
            <StyledHeading>
                <h3>Due</h3>
                <PlaceFiller/>
            </StyledHeading>
            <StyledRecyclerView>
                {
                    data.due.map((task: ITask)=>{
                        return <StyledItem>
                            <StyledCardContainer>
                                <StyledTeam style={{ width: '70%' }}>
                                    <p style={{fontSize: '1.3rem'}}>{task.title}</p>
                                    <StyledFlexBoxRow style={{ justifyContent: 'space-between', paddingTop: 5 }}>
                                        <p
                                            style={{
                                                fontFamily : theme.secondaryFont,
                                                fontSize : 12,
                                                color : theme.secondaryText
                                            }}
                                        >Deadline: {task.deadline.toLocaleDateString()}</p>
                                        <p
                                            style={{
                                                fontFamily : theme.secondaryFont,
                                                fontSize : 12,
                                                color : theme.secondaryText
                                            }}
                                        >Submission type: {task.submissionType}</p>
                                    </StyledFlexBoxRow>
                                </StyledTeam>
                                
                                <StyledUpcoming style={{alignSelf: 'center'}}>
                                    <SecondaryButton text="More"></SecondaryButton>
                                </StyledUpcoming>
                            </StyledCardContainer>
                        </StyledItem>
                    })
                }
            </StyledRecyclerView>
            <StyledHeading>
                <h3>Completed</h3>
                <PlaceFiller/>
            </StyledHeading>
            <StyledRecyclerView>
                {
                    data.completed.map((task: ITask)=>{
                        return <StyledItem>
                            <StyledCardContainer>
                                <StyledTeam style={{ width: '70%' }}>
                                    <p style={{fontSize: '1.3rem'}}>{task.title}</p>
                                    <StyledFlexBoxRow style={{ justifyContent: 'space-between', paddingTop: 5 }}>
                                        <p
                                            style={{
                                                fontFamily : theme.secondaryFont,
                                                fontSize : 12,
                                                color : theme.secondaryText
                                            }}
                                        >Deadline: {task.deadline.toLocaleDateString()}</p>
                                        <p
                                            style={{
                                                fontFamily : theme.secondaryFont,
                                                fontSize : 12,
                                                color : theme.secondaryText
                                            }}
                                        >Submission type: {task.submissionType}</p>
                                    </StyledFlexBoxRow>
                                </StyledTeam>
                                
                                <StyledUpcoming style={{alignSelf: 'center'}}>
                                    <SecondaryButton text="More"></SecondaryButton>
                                </StyledUpcoming>
                            </StyledCardContainer>
                        </StyledItem>
                    })
                }
            </StyledRecyclerView>
            {isTeacher && <FixedButton text="Add Tasks" />}
        </>
    );
}

function DashboardPage(props: IDashBoardPageProps){
    const [data, setData] = useState<ITaskPageData>();
    const [isTeacher, setIsTeacher] = useState<boolean>(false);
    const [isEmpty, setIsEmpty] = useState<boolean>(true);
    const [isSideBarOpen, setIsSidebarOpen] = useState<boolean>(false);

    useEffect(()=>{
        const currDate: any = new Date();
        const due: ITask[] = dashTasks.filter((task: ITask)=>{
            return (task.deadline as any - currDate) >= 0;
        });
        
        const data: ITaskPageData = {
            userName: dashData.userName,
            teamName: dashData.teamName,
            teamMembers: dashData.teamMembers,
            due,
            completed: dashTasks.filter((task)=>{
                return !due.includes(task);
            }),
            isTeacher: dashData.isTeacher,
        }

        setData(data);
        setIsEmpty(data.due.length===0 && data.completed.length===0)
        setIsTeacher(data.isTeacher);
    }, []);
    
    const theme = useTheme() as any;

    const toggleSideBar = ()=>{
        setIsSidebarOpen(prevState=>{
            return !prevState;
        });
    }

    return (
        <StyledPageContainer>
            <SideBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} isTeacher={isTeacher}/>
            <StyledTopBar>
                <IconContainer onClick={toggleSideBar}>
                    {SVG.menubar}
                </IconContainer>
                <h2>Dashboard</h2>
                <PlaceFiller></PlaceFiller>
            </StyledTopBar>
            
            <StyledPageContent>
                { (isEmpty) ? <></> : <StyledCard
                    style = {{backgroundColor: theme.secondaryBack, boxShadow: theme.boxShadow}}
                >
                    <StyledCardContainer>
                        <StyledTeam style={{ width: '70%' }}>
                            <h2 style={{ marginBottom: 5, color: theme.primaryAccent }}>{
                                    ((isTeacher) ? data?.userName : data?.teamName)
                            }</h2>
                            {
                                (!isTeacher) ? data?.teamMembers.map((name)=>{
                                        return <p
                                            style={{
                                                fontFamily : theme.secondaryFont,
                                                fontSize : 12,
                                                color : theme.secondaryText
                                            }}
                                        >{name}</p>
                                    }) : <p
                                    style={{
                                        fontFamily : theme.secondaryFont,
                                        fontSize : 12,
                                        color : theme.secondaryText
                                    }}
                                >Faculty</p>
                            }    
                        </StyledTeam>
                        
                        <StyledUpcoming>
                            <h4 style={{textAlign: 'right'}}>Upcoming</h4>
                            <p
                                style={{
                                    fontFamily : theme.secondaryFont,
                                    fontSize : 13,
                                    color : theme.secondaryText,
                                    marginTop: 5,
                                    textAlign: 'right'
                                }}
                            >{data?.due[0].title}</p>
                            <p
                                style ={{
                                    fontFamily : theme.secondaryFont,
                                    fontSize : 11,
                                    color : theme.secondaryText,
                                    marginTop: 5,
                                    textAlign: 'right'
                                }}
                            >{data?.due[0].deadline.toLocaleDateString()}</p>
                        </StyledUpcoming>
                    </StyledCardContainer>

                </StyledCard>}
                { (isEmpty) ? <></> : (data!==undefined && <TasksView config={{data, isTeacher}}/> ) }
            </StyledPageContent>
        </StyledPageContainer>
    );
};

// ----------------------------------- End of components to be exported ------------------------------------------

export default DashboardPage ;