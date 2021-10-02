import styled from "styled-components";

const StyledRecyclerView = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: fit-content;
`;

const StyledFlexBoxRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;

const StyledFlexBoxCol = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

export { StyledFlexBoxRow, StyledFlexBoxCol, StyledRecyclerView };