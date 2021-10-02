import styled from "styled-components";

// ------------ Interfaces required in the page ------------------

interface ICardProps{
    style? : React.CSSProperties; 
}

// ------------ End of interfaces ---------------------

// ------------ Styled components required --------------

const StyledCard = styled.div`
    color: ${props => props.theme.primaryText};
    border: 2px solid ${props => props.theme.primaryBorder};
    border-radius: ${props => props.theme.cornerRad};
    width: 90%;
    margin: 0 auto;
    outline: none;
    padding: 20px 25px;
`;

const StyledCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const StyledTeam = styled.div`
    display: flex;
    flex-direction: column;
`;

const StyledUpcoming = styled.div`
    display: flex;
    flex-direction: column;
`;

// ------------------- End of the styled components ------------------

// ------------------- Components to be exported ---------------------

function Card(props: ICardProps){
    return(
        <StyledCard
            style = {props.style}
        >
        </StyledCard>
    );
};

// --------------------- End of components --------------------

export { Card, StyledCard, StyledCardContainer, StyledTeam, StyledUpcoming };