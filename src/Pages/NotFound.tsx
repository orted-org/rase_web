import { useHistory } from "react-router";
import styled from "styled-components";
import { StyledPageContainer, StyledPageContent } from "../AuxComponents/PageContainer";
import { PrimaryButton } from "../MicroComponents/Button";

function NotFound(){
    const history = useHistory();
    document.title = 'Not found | RASE';

    return (
        <StyledPageContainer>
            <StyledPageContent>
                <h1 style={{
                    fontSize: '80px', 
                    textAlign: 'center',
                }}
                >404</h1>
                <h2 style={{textAlign: 'center'}}>Page can not be found</h2>
                <PrimaryButton 
                    text="Go back to Dashboard" 
                    sty={{width: 'fit-content', padding: '15px'}} 
                    onClick={() => {
                        history.push("/");
                    }} 
                />
            </StyledPageContent>
        </StyledPageContainer>
    )
}

export default NotFound;