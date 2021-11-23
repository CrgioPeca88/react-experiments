//Dependencies
import React, {Component} from 'react';

//Assets
import logo from './logo.svg';
import './dashboard.css';

class Dashboard extends Component {
  constructor() {
    super();
  }

  render() {
    return (
        <div className="Dashboard">
          <img src={logo} className="logo" alt="logo"/>
          <h2>React experiments - CP88!</h2>
        </div>
    );
  }
}

export default Dashboard;
