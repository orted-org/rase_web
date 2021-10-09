import { useState, useEffect, useContext } from "react";
import { StyledTopBar } from "../MicroComponents/TopBar";
import { PrimaryButton } from "../MicroComponents/Button";
import { SVG } from "../AuxComponents/Svg";
import { PlaceFiller } from "../AuxComponents/Filler";
import { SideBar } from "../AuxComponents/Sidebar";
import { StyledInput, StyledInputArea, StyledSelect, StyledOption, StyledLabel } from "../MicroComponents/Input";
import { IconContainer } from "../MicroComponents/IconContainer";
import { StyledPageContainer, StyledPageContent } from "../AuxComponents/PageContainer";
import { Redirect, useHistory } from "react-router";
import { useTheme } from "styled-components";
import { SideBarContext } from "../util/Context";

interface AddTaskPageProps{

};

function AddTeamPage(props: AddTaskPageProps){
    const [isTeacher, setIsTeacher] = useState(false);
    // const [isSideBarOpen, setIsSidebarOpen] = useState(false);
    const [teamName, setTeamName] = useState('');
    const [desc, setDesc] = useState('');
    const history = useHistory();
    const sideBarContext = useContext(SideBarContext);
    const theme = useTheme() as any;

    // const toggleSideBar = ()=>{
    //     setIsSidebarOpen(prevState=>{
    //         return !prevState;
    //     });
    // }

    if(isTeacher){
        return (
            <Redirect to='/dashboard'/>
        )
    }

    return (
        <StyledPageContainer>
            <SideBar isSideBarOpen={sideBarContext.isSidebarOpen} toggleSideBar={sideBarContext.toggleSideBar} isTeacher={isTeacher}/>
            <StyledTopBar>
                <IconContainer onClick={sideBarContext.toggleSideBar}>
                    {SVG.menubar}
                </IconContainer>
                <h2>Add Team</h2>
                <PlaceFiller></PlaceFiller>
            </StyledTopBar>
            <StyledPageContent>
                <StyledLabel htmlFor = "teamName">Team Name</StyledLabel>
                <StyledInput
                    type = "text"
                    id = 'teamName'
                    name = 'teamName'
                    placeholder = "Title of the task"
                    value = {teamName}
                    onChange = {(e)=>{
                        setTeamName(e.target.value);
                    }}
                />
                <StyledLabel htmlFor = 'description'>Team Description</StyledLabel>
                <StyledInputArea
                    placeholder = 'Description'
                    id = 'description'
                    value = {desc}
                    onChange = {(e)=>{
                        setDesc(e.target.value);
                    }}
                />
                <StyledLabel htmlFor = 'Description'>Team Members</StyledLabel>
                <label style={{padding: '0 15px'}}>First member</label>
                <StyledInput
                    id = 'member'
                    value = {desc}
                    onChange = {(e)=>{
                        setDesc(e.target.value);
                    }}
                />
                <label style={{padding: '0 15px'}}>Second member</label>
                <StyledInput
                    id = 'member'
                    value = {desc}
                    onChange = {(e)=>{
                        setDesc(e.target.value);
                    }}
                />
                <label style={{padding: '0 15px'}}>Third member</label>
                <StyledInput
                    id = 'member'
                    value = {desc}
                    onChange = {(e)=>{
                        setDesc(e.target.value);
                    }}
                />
                <label style={{padding: '0 15px'}}>Fourth member (optional)</label>
                <StyledInput
                    id = 'member'
                    value = {desc}
                    onChange = {(e)=>{
                        setDesc(e.target.value);
                    }}
                />
                <PrimaryButton text='Add task'
                    sty={{position: 'absolute', bottom: 30, width: '90%', transform: 'translateX(-50%)', left: '50%'}}
                    onClick={()=>{history.push('/dashboard')}}
                ></PrimaryButton>
            </StyledPageContent>
        </StyledPageContainer>
    );
}

export default AddTeamPage;