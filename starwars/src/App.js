import React, {useState, useEffect} from 'react';
import SWCard from './SWCard'
import './App.css';
import axios from 'axios';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
const [people, setPeople] = useState([])


  useEffect(()=> {
  axios.get('https://swapi.co/api/people')
  .then(dataObj => {
    console.log('data is here', dataObj)
    setPeople(dataObj.data.results)

    console.log('people', people)
    
  })
  .catch(error => {
    console.log('error message:', error)
  })
}, [] )


  return (
    
   <div className="App">
      <h1 className="Header">React Wars</h1>
      
        {people.map((object)=> { return (
        <SWCard name={object.name} birth_year={object.birth_year} gender={object.gender} />
         )
        })}
        
    </div>
    
  );
}

export default App;
