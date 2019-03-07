import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';
import Layout from './containers/main';

class App extends Component {
  render() {
    return (
      <div >
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
