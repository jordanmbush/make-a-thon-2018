import React, {Component} from 'react';
import withHeader from '../../templates/WithHeader.hoc';
import {Link} from 'react-router-dom';
import './LoginView.css';

class LoginView extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = ({target: {id, value}}) => {
    this.setState({
      [id]: value,
    })
  }

  handleLogin = () => {
    console.log('login')
  }

  render() {
    const {username, password} = this.state;
    return (
      <div className="login-view full-screen flex jc-center ai-center relative">
        <div className="input-container flex flex-col jc-space-between">
          <input className="input" placeholder="username" id="username" value={username} onChange={this.handleChange} />
          <input className="input" placeholder="password" id="password" value={password} onChange={this.handleChange} />
          <Link to="/dashboard">
            <button className="login-button">Login</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default withHeader()(LoginView);
