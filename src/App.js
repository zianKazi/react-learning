import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi! This is a react app</h1>
        <Person name="Zain" age="32"/>
        <Person name="Faraz" age="31"/>
        <Person name="Rahila" age="62">
          My hobby is reading!
        </Person>
      </div>
    );
  }
}

export default App;
