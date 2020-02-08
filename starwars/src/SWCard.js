import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
border:1px dotted steelblue;
width: 500px;
margin: 0 auto;
background-color:white;
opacity: .5`


const Styledp = styled.p`
color: black`;

const SWCard = props => {


return (
  <StyledDiv>
      <Styledp>{props.name}</Styledp>

      <Styledp>{props.birth_year}</Styledp>

      <Styledp>{props.gender}</Styledp>
  </StyledDiv>
)
}

export default SWCard