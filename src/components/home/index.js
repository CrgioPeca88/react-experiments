//Dependencies
import React, {Component} from 'react';

//Assets
import logo from './logo.svg';
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
          <img src={logo} className="logo" alt="logo"/>
          <h2>React Test - Read File Project</h2>
          <button id="start" onClick={this.handleStartClick}> Start! </button>
        </div>
    );
  }
}

export default Home;
