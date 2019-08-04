import React, { Fragment } from 'react';
import classes from './Cockpit.css';

const cockpit = ({ people, toggleHandler }) => {
  const assignedClasses = [];
  let buttonStyle = classes.green;
  if (people.length <= 2) {
    assignedClasses.push(classes.red);
    buttonStyle = classes.red;
  }
  if (people.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hi! This is a react app</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <button className={buttonStyle} onClick={toggleHandler}>Toggle Persons</button>
    </div>

  );
};

export default cockpit;