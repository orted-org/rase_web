import styled, { useTheme } from "styled-components";

// -------------- Interfaces required in this file ------------------

interface IPrimaryButtonProps{
    sty?: React.CSSProperties;
    onClick?: ()=>void;
    text: string
};

interface ISecondaryButtonProps{
    style?: React.CSSProperties;
    onClick?: ()=>void;
    text: string
};

interface IFixedButtonProps{
    text: string;
};

// -------------- End of interfaces -----------------

// -------------- Styled components for the page -----------

const StyledPrimaryButton = styled.button`
    color: ${props => props.theme.primaryButtonText};
    border: 2px solid ${props => props.theme.primaryBorder};
    border-radius: ${props => props.theme.cornerRad};
    background-color: ${props => props.theme.primaryAccent};
    min-height: 40px;
    width: 100%;
    margin: 20px auto 0;
    box-shadow: ${props => props.theme.boxShadow};
    outline: none;
    font-size: 0.9rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    padding: 5px;
    transition: all 0.5s;
    &:hover{
        box-shadow: none;
    }
`;

const StyledSecondaryButton = styled.button`
    padding: 5px 15px;
    width: fit-content;
    border: 2px solid ${props => props.theme.secondaryBorder};
    color: ${props => props.theme.primaryAccent};
    border-radius: ${props => props.theme.secondaryCornerRad};
    height: fit-content;
    outline: none;
    font-size: 0.8rem;
    cursor: pointer;
    background-color: ${props => props.theme.primaryBack};
    font-family: ${props => props.theme.secondaryFont};
`;

// --------------- End of the styled components ---------------

// --------------- Components to be exported -----------------

function PrimaryButton(props: IPrimaryButtonProps){
    const theme = useTheme();

    return (
        <StyledPrimaryButton
            style = {props.sty}
            onClick = {props.onClick}
        >
            {props.text}
        </StyledPrimaryButton>
    );
};

function SecondaryButton(props: ISecondaryButtonProps){
    return (
        <StyledSecondaryButton
            style = {props.style}
            onClick = {props.onClick}
        >
            {props.text}
        </StyledSecondaryButton>
    );
};

function FixedButton(props: IFixedButtonProps){
    return (
        <PrimaryButton text={props.text} sty=
                {{
                    position: 'fixed', 
                    bottom: '20px', 
                    left: '50%', 
                    transform: 'translate(-50%)', 
                    width: 'fit-content', 
                    padding: '10px 20px'
                }}
            />
    );
}

// ------------- End of components ------------------

export { PrimaryButton, SecondaryButton, FixedButton };

