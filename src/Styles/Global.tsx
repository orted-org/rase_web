import { createGlobalStyle } from "styled-components";

const UniformTheme = {
    primaryBack: '#ffffff',
    secondaryBack: '#F3F3F3',
    primaryAccent: '#34A853',
    positiveAccent: '#3F72AF',
    negativeAccent: '#B85C38',
    primaryBorder: '#000000',
    secondaryBorder: '#DFDFDF',
    primaryText: '#000000',
    secondaryText: '#565656',
    primaryButtonText: '#ffffff',
    cornerRad: '10px',
    secondaryCornerRad: '5px',
    boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)',
    primaryFont: "'Cardo', serif", 
    secondaryFont: "'Roboto', sans-serif"
}

type ThemeType = typeof UniformTheme
const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Cardo', serif;
        scrollbar-color: ${(props) => props.theme.secondaryText};
        scrollbar-width: thin;         
        background-color: '#ffffff';
    }
    *::-webkit-scrollbar {
        width: 6px;
    }

    *::-webkit-scrollbar-track {
        background: ${(props) => props.theme.secondaryBack};
    }

    *::-webkit-scrollbar-thumb {
        background-color: ${(props) => props.theme.primaryAccent};
    }
    body{
        background: ${(props) => props.theme.primaryBack};
        position: relative;
    }
`;

export { GlobalStyle, UniformTheme }