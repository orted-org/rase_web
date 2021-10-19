import { useHistory } from "react-router-dom";
import { useTheme } from "styled-components";
import { PrimaryButton } from "../../MicroComponents/Button";
import { StyledCard } from "../../MicroComponents/Card";
import { StyledText } from "../../MicroComponents/SecText";

interface IStudentTaskViewProps{
    teamData: any;
}

function StudentTaskView(props: IStudentTaskViewProps){
    const data = props.teamData;
    const history = useHistory();
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
                    <PrimaryButton text="Submit" onClick={()=>{history.push('/task')}} />
                </StyledCard>
            </div>
        </div>
    );
}

export { StudentTaskView };