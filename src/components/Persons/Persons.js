import Person from '../../components/Persons/Person/Person';
import React from 'react';

const persons = (props) => {
  return props.showPersons ?
    props.people.map((p, index) =>
      <Person
        key={p.key}
        name={p.name}
        age={p.age}
        clickHandler={() => props.deleteHandler(index)}
        changeHandler={(event) => props.changeHandler(event, p.key)}
      />) : null
};

export default persons;

