import styled from "styled-components";

const StyledTopBar = styled.div`
    position: fixed;
    width: 100vw;
    height: 60px;
    background-color: ${props => props.theme.primaryBack};
    box-shadow: ${props => props.theme.boxShadow};
    display: flex;
    flex-flow: row;
    font-weight: 700;
    justify-content: space-between;
    padding: 15px 15px;
    z-index: 5;
`;

export { StyledTopBar }