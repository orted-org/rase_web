import styled from "styled-components";
import { SVG } from "../AuxComponents/Svg";
import { useTheme } from "styled-components";

// ------------------ Interfaces required --------------------

interface ISearchBarProps{
    value: string;
    onChange: (e: any)=>void;
}

// ------------------ End of the interfaces -------------------

const StyledSearchBar = styled.input`
    border: none;
    outline: none;
    border-bottom: 2px solid ${props => props.theme.primaryAccent};
    width: 100%;
    margin: 10px auto;
    font-size: 1.1rem;
`;

function SearchBar(props: ISearchBarProps){
    const theme = useTheme() as any;

    return (
        <div style={{
            width: '90%',
            paddingLeft: 5,
            margin: '10px auto',
            display: 'flex',
            flexDirection: 'row',
        }}
            className = 'input'    
        >
            <StyledSearchBar
                type = "text"
                placeholder = "Search for teams"
                value = {props.value}
                onChange = {(e: any) => {
                    if (props.onChange) props.onChange(e);
                }}
            />
            <div style={{
                    width: 20,
                    height: 20,
                    margin: 'auto',
                    cursor: 'pointer',
                    color: theme.secondaryText,
                }}
            >
                {SVG.cross}
            </div>
        </div>
        
    );
}

export { SearchBar };