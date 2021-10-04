import styled, { useTheme } from "styled-components";
import googleLogo from "../Resources/googleLogo.png";
import { SVG } from "../AuxComponents/Svg";

const StyledEllipseTop = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
`;

const StyledEllipseBott = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
`;

const StyledPage = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: ${props => props.theme.secondaryBack};
`;

const StyledContent = styled.div`
    text-align: center;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: fit-content;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: auto;
    z-index: 3;
`;

const PrimaryButton = styled.button`
    height: 48px;
    margin: 20px auto;
    background: white;
    outline: none;
    font-weight: 700;
    font-size: 0.95em;
    cursor: pointer;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: ${props=>props.theme.box};
`;

const Caption = styled.div`
    position: absolute;
    text-align: center;
    width: fit-content;
    left: 50%;
    transform: translateX(-50%);
    margin: auto;
    font-family: ${props => props.theme.secondaryFont};
    bottom: 10px;
    font-size: 10px;
    z-index: 5;
    color: ${props => props.theme.secondaryText};
`;

function LoginPage(){
    const theme = useTheme() as any;

    return (
        <StyledPage>
            <StyledContent>
                <div style={{margin:50, marginTop: 0}}>
                    <h1>RASE</h1>
                    <div>Reporting Application</div>
                    <div>for Software Engineering</div>
                </div>
                
                <div>Sign in with your student</div>
                <div>mail id</div>
                <PrimaryButton  
                    style={{width: 300, boxShadow: theme.boxShadow, color: theme.primaryAccent }}
                >
                    <img style={{ height: "28px" }} src={googleLogo} alt="" />
                    <p style={{ marginLeft: "10px" }}>Sign in with Google</p>
                </PrimaryButton>
            </StyledContent>
            <StyledEllipseBott>
                {SVG.loginBotLeft}
            </StyledEllipseBott>
            <StyledEllipseTop>
                {SVG.loginTopRight}
            </StyledEllipseTop>
            <Caption>
                    <div style={{fontFamily: "inherit"}}>By the students of NITW for the students</div>
                    <div style={{fontFamily: "inherit"}}>of NITW</div>
            </Caption>
        </StyledPage>
    )
};

export default LoginPage;
