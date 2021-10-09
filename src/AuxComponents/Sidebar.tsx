import styled from "styled-components";
import { StyledFlexBoxCol } from "./Flex";
import { IconContainer } from "../MicroComponents/IconContainer";
import { PrimaryButton } from "../MicroComponents/Button";
import { useTheme } from "styled-components";
import { SVG } from "./Svg";
import { useHistory } from "react-router";
import { useState } from "react";

// ------------------ Interfaces --------------------------

interface ISideBarProps{
    isTeacher: boolean;
    isSideBarOpen: boolean
    toggleSideBar: ()=>void;
}

// ------------------ Styled Components ---------------------------

const SideBarContainer = styled.div`
    position: fixed;
    width: 400px;
    background-color: ${props=>props.theme.secondaryBack};
    z-index: 10;
    height: 100vh;
    transition: all 0.5s;
    transition-timing-function: ease;
    top: 0;
    left: 0;
    @media (max-width: 480px) {
        min-width: 0;
        width: 100%;
    }
`;

const StyledSidebarOption = styled.a`
    cursor: pointer;
    transition: all 0.25s;
    width: 90%;
    font-size: 1.3rem;
    display: flex;
    justify-content: center;
    margin: 5px;
    border-radius: ${props => props.theme.cornerRad};
    padding: 10px;
    &:hover{
        background-color: ${props=>props.theme.primaryAccent};
        color: ${props=>props.theme.primaryBack}
    }
`;

const StyledSidebarSVG = styled.div`
    cursor: pointer;
    display: inline;
    margin-right: 10px;
    & > svg {
        height: 25px;
        width: 25px;
    }
    & > svg:hover {
        color:  ${props=>props.theme.primaryBack}
    }
`;

// ------------------ End of styled components ------------------------

function SideBar(props: ISideBarProps){
    const isTeacher = props.isTeacher;
    const toggleSideBar = props.toggleSideBar;
    
    // const [isSideBarOpen, setIsSidebarOpen] = useState<boolean>(false);
    // const [isTeacher, setIsTeacher] = useState<boolean>(true);
    const theme = useTheme() as any;
    const history = useHistory();
    

    return (
        <SideBarContainer style={{
            left: props.isSideBarOpen ? '0' : '-450px'
        }}>
            <IconContainer style={{
                position: 'absolute',
                top: 20,
                right: 20,
                color: theme.secondaryFont
            }}
                onClick = {toggleSideBar}
            >
                {SVG.cross}
            </IconContainer>
            <StyledFlexBoxCol style={{alignItems: 'center', paddingTop: 60}}>
                {isTeacher && <StyledSidebarOption
                    onClick= {()=>{
                        toggleSideBar();
                        console.log(history);
                        history.push("/search-teams");
                    }}
                >
                    <StyledSidebarSVG style={{
                        height: '25px',
                        width: '25px'
                    }}>{SVG.search}</StyledSidebarSVG>
                    Search Teams
                    </StyledSidebarOption>}
                {isTeacher ? <StyledSidebarOption
                    onClick= {()=>{
                        toggleSideBar();
                    }}
                >
                    <StyledSidebarSVG style={{
                        height: '25px',
                        width: '25px'
                    }}>{SVG.download}</StyledSidebarSVG>
                    Download all data</StyledSidebarOption> : <StyledSidebarOption>
                    <StyledSidebarSVG style={{
                        height: '25px',
                        width: '25px'
                    }}>{SVG.download}</StyledSidebarSVG>
                    Download team data</StyledSidebarOption>}

                <PrimaryButton text="Log out" sty={{
                        width: '90%', 
                        backgroundColor: theme.primaryBack, 
                        color: theme.primaryText, 
                        fontSize: '1.1rem', 
                        position: 'absolute', 
                        bottom: 20, 
                        left: '50%',
                        transform: 'translateX(-50%)'
                    }}
                    onClick={()=>{history.push('/')}}
                />
            </StyledFlexBoxCol>
        </SideBarContainer>
    );
}

export { SideBar };