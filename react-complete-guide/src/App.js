import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {    
  persons: [
    { name: 'Damian', age: 26},
    { name: 'Manu', age: 29},
    { name: 'Stephanie', age: 28}
    ],
    otherState: 'some value'
  }

   switchNameHandler = (newname) => {
    //console.log('was clcked');
    this.setState({ 
     persons: [
      { name: newname, age: 26},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 27}
     ] 
    })
  }

  nameChangedHandler = (event) => {
    this.setState({ 
      persons: [
       { name: 'Damian', age: 26},
       { name: event.target.value, age: 29},
       { name: 'Stephanie', age: 27}
      ] 
     })
  }

  render () {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1p solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi i am React app</h1>
        <p>This is really working</p>
        <button 
          style ={style}
          onClick={() => this.switchNameHandler('Damian Krzemień!!!')}>Switch Name</button>
        <Person  
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} 
          click={this.switchNameHandler.bind(this, "Damian Krzemień!!!")} >My hobby is something</Person>
        <Person  
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}/>
        <Person  
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('H1', null, 'Does this work now?'))
  }
}

export default App;

