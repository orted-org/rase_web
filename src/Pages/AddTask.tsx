import { useState, useEffect } from "react";
import { StyledTopBar } from "../MicroComponents/TopBar";
import { PrimaryButton } from "../MicroComponents/Button";
import { SVG } from "../AuxComponents/Svg";
import { PlaceFiller } from "../AuxComponents/Filler";
import { SideBar } from "../AuxComponents/Sidebar";
import { StyledInput, StyledInputArea, StyledSelect, StyledOption, StyledLabel } from "../MicroComponents/Input";
import { IconContainer } from "../MicroComponents/IconContainer";
import { StyledPageContainer, StyledPageContent } from "../AuxComponents/PageContainer";

interface AddTaskPageProps{

};



function AddTaskPage(props: AddTaskPageProps){
    const [isTeacher, setIsTeacher] = useState(true);
    const [isSideBarOpen, setIsSidebarOpen] = useState(false);
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [submissionType, setSubmissionType] = useState('');

    const toggleSideBar = ()=>{
        setIsSidebarOpen(prevState=>{
            return !prevState;
        });
    }

    const handleSelect = (e: any)=>{
        setSubmissionType(e.target.value);
    }

    return (
        <StyledPageContainer>
            <SideBar isSideBarOpen={isSideBarOpen} toggleSideBar={toggleSideBar} isTeacher={isTeacher}/>
            <StyledTopBar>
                <IconContainer onClick={toggleSideBar}>
                    {SVG.menubar}
                </IconContainer>
                <h2>Add Task</h2>
                <PlaceFiller></PlaceFiller>
            </StyledTopBar>
            <StyledPageContent>
                <StyledLabel htmlFor = "Title">Title</StyledLabel>
                <StyledInput
                    type = "text"
                    id = 'title'
                    name = 'title'
                    placeholder = "Title of the task"
                    value = {title}
                    onChange = {(e)=>{
                        setTitle(e.target.value);
                    }}
                />
                <StyledLabel htmlFor = 'Description'>Description</StyledLabel>
                <StyledInputArea
                    placeholder = 'Describe the task'
                    id = 'description'
                    value = {desc}
                    onChange = {(e)=>{
                        setDesc(e.target.value);
                    }}
                />
                <StyledLabel htmlFor = 'SubmissionType'>Submission Type</StyledLabel>
                <StyledSelect onChange={handleSelect}>
                    <StyledOption value="">Select a type</StyledOption>
                    <StyledOption value="PDF">PDF</StyledOption>
                    <StyledOption value="Text">Text</StyledOption>
                    <StyledOption value="Link">Link</StyledOption>
                </StyledSelect>
                <PrimaryButton text='Add task'
                    sty={{position: 'absolute', bottom: 30, width: '90%', transform: 'translateX(-50%)', left: '50%'}}
                ></PrimaryButton>
            </StyledPageContent>
        </StyledPageContainer>
    );
}

export default AddTaskPage;