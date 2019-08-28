import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
width: 200px;
height 200px;
border: 2px solid black;
`;

function starWarsCards ({imageURL}) {
    return (
        <StyledDiv>
         <img src={imageURL} />
        </StyledDiv>
    )
}

export default Cards;