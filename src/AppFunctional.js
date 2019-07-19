import Person from "./Person/Person";
import React, { useState } from "react";
import './App.css';

const App = () => {
    const [personState, setPersonState] = useState({
      people: [
        {name: 'Zain Kazi', age: 32},
        {name: 'Faraz Kazi', age: 31},
      ]
    });
    const [otherState, setOtherState] = useState('other state');
    console.log(personState, otherState);

    const clickHandler = () => {
      setPersonState({
        people: [
          {name: 'Zain Kazi', age: 32},
          {name: 'Faraz Kazi', age: 31},
          {name: 'Adeeba Hashmi', age: 26},
          {name: 'Nabeela Abidi', age: 27},
        ]
      })
    };

    return (
      <div className="App">
        <h1>Hi! This is a react app</h1>
        {
          personState.people.map(p => <Person name={p.name} age={p.age}/>)
        }
        <button onClick={clickHandler}>Switch Name</button>
      </div>
    );
  }
;

export default App;