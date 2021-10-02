import styled from "styled-components";

const StyledPageContainer = styled.div`
    width: 100%;
`;

const StyledPageContent = styled.section`
    max-width: 500px;
    position: relative;
    padding-top: 80px;
    margin: 0 auto;
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    background-color: ${props => props.theme.primaryBack};
`;

const StyledHeading = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px 30px;
    margin-top: 15px;
`;

export { StyledPageContainer, StyledPageContent, StyledHeading };