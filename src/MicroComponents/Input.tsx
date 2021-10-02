import styled from "styled-components";

// ----------------- Styled components to be exported --------------------------

const StyledInput = styled.input`
    border: 2px solid ${props=>props.theme.secondaryBack};
    outline: none;
    height: 35px;
    border-radius: ${props => props.theme.secondaryCornerRad};
    padding: 5px;
    width: 95%;
    margin: 0 auto;
    font-family: ${props => props.theme.secondaryFont};
    transition: all 0.5s;
    margin-bottom: 15px;
    &:focus {
        border: 2px solid ${props=>props.theme.primaryAccent};;
    }
`;

const StyledInputArea = styled.textarea`
    border: 2px solid ${props=>props.theme.secondaryBack};
    outline: none;
    height: 100px;
    border-radius: ${props => props.theme.secondaryCornerRad};
    padding: 5px;
    width: 95%;
    margin: 0 auto;
    font-family: ${props => props.theme.secondaryFont};
    transition: all 0.5s;
    margin-bottom: 15px;
    &:focus {
        border: 2px solid ${props=>props.theme.primaryAccent};;
    }
`;

const StyledSelect = styled.select`
    width: 95%;
    margin: 0 auto;
    height: 35px;
    outline: none;
    color: ${props => props.theme.secondaryText};
    border: 2px solid ${props=>props.theme.secondaryBack};
    border-radius: ${props => props.theme.secondaryCornerRad};
    background-color: white;
    font-family: ${props => props.theme.secondaryFont};
    padding: 5px;
    &:focus {
        border: 2px solid ${props=>props.theme.primaryAccent};;
    }
`;

const StyledOption = styled.option`
    background-color: ${props => props.theme.secondaryBack};
    font-family: ${props => props.theme.secondaryFont};
`;

const StyledLabel = styled.label`
    padding: 0 15px;
    font-size: 1.2rem;
    margin-bottom: 5px;
`;

// -------------------- End of components -----------------------

export { StyledInput, StyledInputArea, StyledSelect, StyledOption, StyledLabel };