import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tasks } from '../api/tasks.js';
 
// Task component - represents a single todo item
export default class Task extends Component {
  toggleChecked() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this.props.task._id, {
      $set: { checked: !this.props.task.checked },
    });
  }
 
  deleteThisTask() {
    Tasks.remove(this.props.task._id);
  }
 
  render() {
    // Give tasks a different className when they are checked off,
    // so that we can style them nicely in CSS
    const taskClassName = this.props.task.checked ? 'checked' : '';
 
    return (
      <li className={taskClassName}>
        <button className="delete" onClick={this.deleteThisTask.bind(this)}>
          &times;
        </button>

      //Zona diferente: inicio
        <button
          class="vote-btn" 
          data-default-text="Vote This Dish Up!"
          data-alt-text="Thanks for Voting">
    <span class="icon"></span> <span class="text">Vote This Dish Up!</span>
  </button>
 
       //Zona diferente: fin
 
        <span className="text">{this.props.task.text}</span>
      </li>
    );
  }
}
