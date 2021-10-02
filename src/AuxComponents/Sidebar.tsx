import styled from "styled-components";
import { StyledFlexBoxCol } from "./Flex";
import { IconContainer } from "../MicroComponents/IconContainer";
import { PrimaryButton } from "../MicroComponents/Button";
import { useTheme } from "styled-components";
import { SVG } from "./Svg";

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

const StyledOption = styled.a`
    cursor: pointer;
    transition: all 0.25s;
    width: 90%;
    font-size: 1.3rem;
    text-align: center;
    margin: 5px;
    border-radius: ${props => props.theme.cornerRad};
    padding: 10px;
    &:hover{
        background-color: ${props=>props.theme.primaryAccent};
        color: ${props=>props.theme.primaryBack}
    }
`;

// ------------------ End of styled components ------------------------

function SideBar(props: ISideBarProps){
    const isTeacher = props.isTeacher;
    const toggleSideBar = props.toggleSideBar; 
    const theme = useTheme() as any;

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
                {isTeacher && <StyledOption>Search Teams</StyledOption>}
                {isTeacher ? <StyledOption>Download all data</StyledOption> : <StyledOption>Download team data</StyledOption>}

                <PrimaryButton text="Log out" sty={{
                    width: '90%', 
                    backgroundColor: theme.primaryBack, 
                    color: theme.primaryText, 
                    fontSize: '1.1rem', 
                    position: 'absolute', 
                    bottom: 20, 
                    left: '50%',
                    transform: 'translateX(-50%)'
                }}/>
            </StyledFlexBoxCol>
        </SideBarContainer>
    );
}

export { SideBar };