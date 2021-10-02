import styled from "styled-components";

// ---------------- Interfaces required --------------------

interface IItemProps{

}

// ---------------- End of interfaces --------------------

// ----------------- Styled components required -------------------

const StyledItem = styled.div`
    color: ${props => props.theme.primaryText};
    border: 3px solid ${props => props.theme.secondaryBorder};
    width: 90%;
    margin: 5px auto;
    outline: none;
    padding: 20px;
    transition: all 0.5s;
    &:hover{
        border: 3px solid ${props => props.theme.primaryAccent};
    }
`;

// -------------------- End of styled components ----------------

// ------------------- Components to be exported ----------------

function Item(props: IItemProps){
    return(
        <StyledItem>
        </StyledItem>
    );
};

// -------------------- End of components --------------------

export { Item, StyledItem };