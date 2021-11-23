//Dependencies
import React, {Component} from 'react';

//Assets
import './home.css';

class Home extends Component {
  constructor() {
    super();
    this.handleStartClick = this.handleStartClick.bind(this);
  }

  handleStartClick() {
     this.props.history.push("/upload");
  }

  render() {
    return (
        <div className="Home">
          <h2>React Test - Read File Project</h2>
          <button id="start" onClick={this.handleStartClick}> Start! </button>
        </div>
    );
  }
}

export default Home;
