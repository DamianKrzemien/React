import React, {Component} from 'react';
import classes from './Person.module.css';

class Person extends Component {
    render() {
        console.log('[Persons.js] remderig');
        return (
    <div className={classes.Person}>
        <p onClick={this.props.click}> I'm a {this.props.name} and I am {this.props.age} years old!</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}></input>
    </div>
    )
    }  
};

export default Person;