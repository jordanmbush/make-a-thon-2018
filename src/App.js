import React, { Component } from 'react';
// import axios from 'axios';
import routes from './routes';
import './styles/reset.css';
import './styles/global.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {routes}
      </div>
    );
  }
}

export default App;
