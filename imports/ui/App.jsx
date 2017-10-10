//No importa más clases de react ¿?
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import ReactDOM from 'react-dom';
import { Tasks } from '../api/tasks.js';

import Task from './Task.jsx';
 
// App component - represents the whole app
class App extends Component {

   handleSubmit(event) {
    event.preventDefault();
 
    // Ojo con el tipo de variable que usa
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();
 
    Tasks.insert({
      text,
      createdAt: new Date(), // current time
    });
 
    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderTasks() {
    return this.props.tasks.map((task) => (
      <Task key={task._id} task={task} />
    ));
  }
 
  render() {
    return (
      <div className="content">

      <h4>¿Quieres publicar un chiste?</h4>
       

        <form className="new-task" onSubmit={this.handleSubmit.bind(this)} >
            <input
              type="text"
              ref="textInput"
              placeholder="Escribe aquí tu chiste"
            />
          </form>

          <div class="post-preview">
            
              <h2 class="post-title">
                Joke:
              </h2>
              <h3 class="post-subtitle">
                {this.renderTasks()}
              </h3>
            
            
          </div>
 
        
      </div>
    );
  }
}

//Si no hay constructor, el proptypes no sirve.
App.propTypes = {
  tasks: PropTypes.array.isRequired,
};
 
export default createContainer(() => {
  return {
    tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),   

  };
}, App);
