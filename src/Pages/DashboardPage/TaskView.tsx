import { useHistory } from "react-router-dom";
import { useTheme } from "styled-components";
import { PlaceFiller } from "../../AuxComponents/Filler";
import { StyledFlexBoxRow, StyledRecyclerView } from "../../AuxComponents/Flex";
import { StyledHeading } from "../../AuxComponents/PageContainer";
import { ITask } from "../../Interfaces";
import { FixedButton, SecondaryButton } from "../../MicroComponents/Button";
import { StyledCardContainer, StyledTeam, StyledUpcoming } from "../../MicroComponents/Card";
import { StyledItem } from "../../MicroComponents/Item";

interface IDashboardPageData{
    userName: string;
    teamName: string;
    teamMembers: string[];
    due: ITask[];
    completed: ITask[];
    isTeacher: boolean;
}

interface ITaskViewConfig{
    data: IDashboardPageData;
    isTeacher: boolean;
}

interface ITaskViewProps{
    config: ITaskViewConfig;
}

function TasksView(props: ITaskViewProps){
    const data = props.config.data;
    const isTeacher = props.config.isTeacher;
    const theme = useTheme() as any;
    const history = useHistory();

    return (
        <>
            <StyledHeading>
                <h3>Due</h3>
                <PlaceFiller/>
            </StyledHeading>
            <StyledRecyclerView>{
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
            {isTeacher && <FixedButton text="Add Tasks" onClick={()=>{console.log('clicked');history.push("/add-task")}} />}
        </>
    );
}

export { TasksView };