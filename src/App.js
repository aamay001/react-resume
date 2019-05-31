<<<<<<< HEAD
import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "./components/Header";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Certification from "./components/Certification";
import TechnicalSkills from "./components/TechnicalSkills";
import Projects from "./components/Projects";
import ResumeTools from "./components/ResumeTools";
import ResumeEditor from "./components/tools/ResumeEditor";
//import {newResume} from './actions';

import {
  EDUCATION,
  TECH_SKILLS,
  PROJECTS,
  EXPERIENCE,
  CERTIFICATION
} from "./components/tools/resumeOrder";
import Notifications from "react-notify-toast";

class App extends Component {
  render() {
    const resume = this.props.resumeOrder.map((item, index) => {
      switch (item) {
        case EDUCATION:
          return this.props.showEducation ? <Education key={index} /> : "";
        case TECH_SKILLS:
          return this.props.showTechSkills ? (
            <TechnicalSkills key={index} />
          ) : (
            ""
          );
        case PROJECTS:
          return this.props.showProjects ? <Projects key={index} /> : "";
        case EXPERIENCE:
          return this.props.showExperience ? <Experience key={index} /> : "";
        case CERTIFICATION:
          return this.props.showCertification ? (
            <Certification key={index} />
          ) : (
            ""
          );
        default:
          return <p>Error with order.</p>;
      }
    });
    return (
      <div className="react-resume">
        <Notifications />
        <ResumeTools />
        <div
          className="resume"
          style={{
            fontFamily: this.props.font
          }}
        >
          <Header />
          {resume}
        </div>
        <ResumeEditor />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  font: state.tools.font,
  resumeOrder: state.tools.resumeOrder,
  showTechSkills: state.tools.showTechSkills,
  showProjects: state.tools.showProjects,
  showEducation: state.tools.showEducation,
  showCertification: state.tools.showCertification,
  showExperience: state.tools.showExperience,
  showTools: state.tools.showTools
=======
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, Router } from 'react-router';
import { connect } from 'react-redux';
import { createBrowserHistory } from 'history';
import { constants } from './config';
import { FocusTrap } from './helpers/app.helper';
import routes from './routes';
import './styles/App.css';

const history = createBrowserHistory();
const { ROUTES } = constants;
const { Home } = routes;

const App = ({ editorOpen }) => (
  <div className="App">
    <Router history={history}>
      <Switch>
        <Route exact path={ROUTES.HOME.PATH} component={Home} />
        <Route component={Home} />
      </Switch>
    </Router>
    <FocusTrap enabled={editorOpen} />
  </div>
);

App.defaultProps = {
  editorOpen: false,
};

App.propTypes = {
  editorOpen: PropTypes.bool,
};

const mapStateToProps = state => ({
  editorOpen: state.app.editorOpen,
>>>>>>> development
});

export default connect(mapStateToProps)(App);
