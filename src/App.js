import React, { Component } from 'react';

import List from './components/list.js';
import DoInput from './components/input.js';
import AppTitle from './components/title.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <AppTitle className="App-title" titleName="myTODO"/>
          <DoInput placeholder="Do here..."/>
          <List />
        </div>
      </div>
    );
  }
}

export default App;
