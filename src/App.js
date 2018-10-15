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
});
export default connect(mapStateToProps)(App);
