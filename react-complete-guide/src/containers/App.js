import React, { Component } from 'react';
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {    
    persons: [
      {id: '1', name: 'Damian', age: 26},
      {id: '2', name: 'Manu', age: 29},
      {id: '3', name: 'Stephanie', age: 28}
      ],
      otherState: 'some value',
      showPersons: false
  }

  static getDerivedStateFromProp(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
  }

  componentDidMount() {
    console.log('[App.js]componnentDidMount')
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons});
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render () { 

  console.log('[App.js] render')
  let persons = null;

  if(this.state.showPersons) {   
      persons = <Persons 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} />;          
    }
      
      return (
        <div className={classes.App}>
         <Cockpit 
            title={this.props.appTitle}
            showPersons = {this.state.showPersons} 
            persons = {this.state.persons}
            clicked = {this.togglePersonsHandler} />
          {persons}
        </div>
      );
    }
  }

export default App;