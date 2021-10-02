import styled from 'styled-components';

const StyledPlaceFiller = styled.div`
    width: 20px;
    height: 20px;
`;

function PlaceFiller(props: any){
    return (
        <StyledPlaceFiller>
            {props.content}
        </StyledPlaceFiller>
    );
}

export { PlaceFiller };