import React, {Component, Fragment} from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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
    const { people, showPersons } = this.state;
    return (
        <Fragment>
          <Cockpit people={people} toggleHandler={this.toggleHandler}/>
          <Persons
            showPersons={showPersons}
            people={people}
            deleteHandler={this.deleteHandler}
            changeHandler={this.changeHandler}
          />
        </Fragment>
    );
  }
}

export default App;
