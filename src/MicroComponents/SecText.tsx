import styled from "styled-components";

export const StyledText = styled.p`
    color: ${props => props.theme.secondaryText};
    font-family: ${props => props.theme.secondaryFont};
    font-size: 0.8rem;
`;