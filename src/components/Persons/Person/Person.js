import React from 'react';
import classes from './Person.css';

const person = (props) => {
  return (
    <div className={classes.Person}>
      <p onClick={props.clickHandler}>I am {props.name} and my age is {props.age}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changeHandler} value={props.name}/>
    </div>
  )
};

export default person;