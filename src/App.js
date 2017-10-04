import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';

class App extends Component {
  render() {
    return (
      <div className="resume">
        <Header />
        <Education />
        <TechnicalSkills />
        <Projects />
        <Experience />
      </div>
    );
  }
}

export default connect()(App);
