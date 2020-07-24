import React from 'react';
import './App.css';

export class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = { task: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {
    this.setState({ task: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.task);
  }

  render() {
    return (
    <div className="form">
      <form onSubmit={this.handleSubmit} >
        <input type="text" id="name" name="todo" placeholder="Enter Todo" onChange={this.handleChange} required />
        <button type="submit" id="submit">Submit</button>
      </form>
      {this.props.exist ? <p id="warning" >Task already exist!</p> : '' }
    </div>
    );
  }
}




