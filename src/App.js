import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from './components/Header';
import Experience from './components/Experience';

class App extends Component {
  render() {
    return (
      <div className="resume">
        <Header />
        <Experience />
      </div>
    );
  }
}

export default connect()(App);
