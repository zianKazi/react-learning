import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      { key: 1, name: 'Zain', age: 32},
      { key: 2, name: 'Faraz', age: 31},
      { key: 3, name: 'Adeeba', age: 26},
    ]
  };

  //Alternate the 2 versions of the click handler to see the difference in the inference of this
  clickHandler = (name) => {
   console.log('Was Clicked');
   //console.log(t);
   // console.log(this);
    this.setState({
      people: [
        { key: 1, name: name, age: 32},
        { key: 2, name: 'Faraz Kazi', age: 31},
        { key: 3, name: 'Adeeba Hashmi', age: 26},
        { key: 4, name: 'Nabeela Abidi', age: 27}
      ],
      showPersons: false,
    })
  };

  // This is not recommended since the 'this' does not resolve to the containing component
  es5ClickHandler(t) {
    console.log('In the ES5 click handler');
    console.log(t);
    console.log(this);
  };

  changeHandler = (event, index) => {
    const peopleCopy = [...this.state.people];
    const personIndex = peopleCopy.findIndex(p => p.key === index);
    peopleCopy[personIndex].name = event.target.value;
    this.setState({ people: peopleCopy });
  };

  deleteHandler = (index) => {
    //const people = this.state.people.slice();
    const people = [...this.state.people];
    people.splice(index, 1);
    this.setState({ people: people});
  };

  toggleHandler = () => this.setState({ showPersons: !this.state.showPersons});

  render() {
    const style = {
      backgroundColor: this.state.showPersons ? 'red' : 'green',
      font: 'inherit',
      color: 'white',
      border: '1px solid blue',
      padding: '10px',
      cursor: 'pointer',
      ':hover': this.state.showPersons ? {
        color: 'black',
        backgroundColor: 'salmon'
      } : {
        color: 'black',
        backgroundColor: 'lightgreen'
      },
    };

    const classes = [];

    if(this.state.people.length <= 2) {
      classes.push('red');
    }
    if(this.state.people.length <= 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
          <h1>Hi! This is a react app</h1>
          <p className={classes.join(' ')}>This is really working!</p>
          <button style={style} onClick={this.toggleHandler}>Toggle Persons</button>
          {this.state.showPersons ?
            this.state.people.map((p, index) =>
              <Person
                key={p.key}
                name={p.name}
                age={p.age}
                clickHandler={() => this.deleteHandler(index)}
                changeHandler={(event) => this.changeHandler(event, p.key)}
              />) : null
          }
        </div>
    );
  }
}

export default App;
