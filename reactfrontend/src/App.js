import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Our Users</h3>
        <p>
          {this.state.users.map(user => <li>{user.user} - {user.job}</li>)}
        </p>
      </header>
    </div>
    );
  }
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
      axios.get('http://localhost:5000/users/').then(
        res => {
          const users = res.data;
          this.setState({ users });
        });
  }
}

