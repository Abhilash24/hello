import React, { Component } from 'react';
import Main from './components/MainComponent';
import { HashRouter, BrowserRouter } from 'react-router-dom';
import './App.css';

class App extends Component {

  render() {
    return (
      <HashRouter basename='https://abhilash24.github.io/my-app/'>
        <div>
          <Main />
        </div>
      </HashRouter>
    );
  }
}

export default App;
