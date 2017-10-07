import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import ResumeTools from './components/Tools';
import {newResume} from './actions';

class App extends Component {
  componentWillMount() {
    this.props.dispatch(newResume());
  }

  render() {
    return (
      <div className="react-resume">
        <ResumeTools />
        <div className="resume" style={{'fontFamily': this.props.font}}>
          <Header />
          <Education />
          <TechnicalSkills />
          <Projects />
          <Experience />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  font : state.tools.font
});
export default connect(mapStateToProps)(App);
