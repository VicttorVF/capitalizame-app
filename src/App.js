import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

import AppNav from './components/AppNav'
//import Nav from './components/Nav'

class App extends Component {
  render(){
    return (
      <div className="App">
        <AppNav />
      </div>
    );
  }
}

export default App;
