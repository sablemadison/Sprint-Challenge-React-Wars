import React, {useState, useEffect} from 'react';


const SWCard = props => {


return (
  <div>
    <p>
      {props.name}
      <img src={props.url}></img>
      </p>
  </div>
)
}

export default SWCard