import React from 'react';

class ListContainer extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(index) {
    this.props.onClick(index);
  }


  render() {
    return (
      <div className="listContainer">
        {this.props.tasks.map((task, index) => (
          <div key={task} className='task'>
            {task}
            <button id="float" type="button" onClick={() => this.handleClick(index)}>X</button>
          </div>))
        }
      </div>
    );
  }
}

export default ListContainer;