import React, { Component } from 'react';
import {connect} from 'react-redux';

import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import ResumeTools from './components/Tools';
import {newResume} from './actions';

import {
  EDUCATION,
  TECH_SKILLS,
  PROJECTS,
  EXPERIENCE
}
from './components/tools/resumeOrder'

class App extends Component {
  componentWillMount() {
    this.props.dispatch(newResume());
  }

  render() {
    const resume = this.props.resumeOrder.map( (item, index) => {
      switch(item) {
        case EDUCATION:
          return <Education key={index}/>
        case TECH_SKILLS:
          return <TechnicalSkills key={index}/>
        case PROJECTS:
          return <Projects key={index}/>
        case EXPERIENCE:
          return <Experience key={index}/>
        default:
          return <p>Error with order.</p>
      }
    });
    return (
      <div className="react-resume">
        <ResumeTools />
        <div className="resume" style={{'fontFamily': this.props.font}}>
          <Header />
          {resume}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  font: state.tools.font,
  resumeOrder: state.tools.resumeOrder
});
export default connect(mapStateToProps)(App);
