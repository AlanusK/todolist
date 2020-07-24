import React, { Component } from 'react';
import './App.css';
import { HeaderComponent } from './HeaderComponent.js';
import ListContainer from './ListContainer.js';
import { Form } from './Form.js';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: ['Task 1', 'Task 2'],
      exist: false
    };
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  addTask(newTask) {
    let tasks = this.state.tasks.toString().toLocaleLowerCase();
    if (tasks.includes(newTask.toLowerCase()) === false) {
      this.setState(prevState => ({
        tasks: [...prevState.tasks, newTask],
        exist: false
      }));
    } else {
      this.setState({ exist: true });
    }
    document.getElementById('name').value = '';
  }


  deleteTask(index) {
    const newArray = this.state.tasks.filter((item, i) => i !== index);
    this.setState({ tasks: newArray });
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent numTasks={this.state.tasks.length} />
        <ListContainer tasks={this.state.tasks} onClick={this.deleteTask} />
        <Form onSubmit={this.addTask} exist={this.state.exist} />
      </div>
    );
  }
}

export default App;
