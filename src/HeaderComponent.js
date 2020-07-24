import React from 'react';

export class HeaderComponent extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <h3>You Have {this.props.numTasks} Todos</h3>
        </header>
      </div>
    );
  }
}