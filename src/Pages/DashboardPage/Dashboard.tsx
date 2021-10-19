import { useTheme } from "styled-components";
import { useContext, useState } from "react";
import { FixedButton, SecondaryButton } from "../../MicroComponents/Button";
import { StyledItem } from "../../MicroComponents/Item";
import { StyledRecyclerView, StyledFlexBoxRow, StyledFlexBoxCol } from "../../AuxComponents/Flex";
import { StyledPageContainer, StyledPageContent, StyledHeading } from "../../AuxComponents/PageContainer";
import { StyledCard, StyledCardContainer, StyledTeam, StyledUpcoming } from "../../MicroComponents/Card";
import { dashData, dashTasks } from "../../util/data";
import { useEffect } from "react";
import { PlaceFiller } from "../../AuxComponents/Filler";
import { SideBar } from "../../AuxComponents/Sidebar";
import { SVG } from "../../AuxComponents/Svg";
import { StyledTopBar } from "../../MicroComponents/TopBar";
import { IconContainer } from "../../MicroComponents/IconContainer";
import { ITask } from "../../Interfaces"
import { useHistory } from "react-router";
import { SideBarContext } from "../../util/Context";
import { TasksView } from "./TaskView";

interface IDashBoardPageProps{

}

interface IDashboardPageData{
    userName: string;
    teamName: string;
    teamMembers: string[];
    due: ITask[];
    completed: ITask[];
    isTeacher: boolean;
}

function DashboardPage(props: IDashBoardPageProps){
    const [data, setData] = useState<IDashboardPageData>();
    const [isTeacher, setIsTeacher] = useState<boolean>(false);
    const [isEmpty, setIsEmpty] = useState<boolean>(true);
    const sideBarContext = useContext(SideBarContext);
    const theme = useTheme() as any;

    useEffect(()=>{
        const currDate: any = new Date();
        const due: ITask[] = dashTasks.filter((task: ITask)=>{
            return (task.deadline as any - currDate) >= 0;
        });
        
        const data: IDashboardPageData = {
            userName: dashData.userName,
            teamName: dashData.teamName,
            teamMembers: dashData.teamMembers,
            due,
            completed: dashTasks.filter((task)=>{
                return !due.includes(task);
            }),
            isTeacher: dashData.isTeacher,
        }

        console.log(data);
        setData(data);
        setIsEmpty(data.due.length===0 && data.completed.length===0)
        setIsTeacher(data.isTeacher);
    }, []);

    return (
        <StyledPageContainer>
            <SideBar isSideBarOpen={sideBarContext.isSidebarOpen} toggleSideBar={sideBarContext.toggleSideBar} isTeacher={isTeacher}/>
            <StyledTopBar>
                <IconContainer onClick={sideBarContext.toggleSideBar}>
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