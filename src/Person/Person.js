import React from 'react';
import './Person.css';

const person = (props) => {
  const style = {
    '@media (min-width: 500px)': {
        width: '450px'
    }
  };

  return (
    <div className="Person" style={style}>
      <p onClick={props.clickHandler}>I am {props.name} and my age is {props.age}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changeHandler} value={props.name}/>
    </div>
  )
};

export default person;