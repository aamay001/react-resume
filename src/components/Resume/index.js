import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import Certifications from './Certifications';
import Education from './Education';
import Experience from './Experience';
import ResumeHeader from './Header';
import Projects from './Projects';
import TechnicalSkills from './TechnicalSkills';
import {
  EDUCATION,
  TECH_SKILLS,
  PROJECTS,
  EXPERIENCE,
  CERTIFICATION,
  defaultResumeOrder,
} from '../../helpers/resume.helper';
import '../../styles/Resume.css';

const Resume = ({
  font,
  showEducation,
  showTechSkills,
  showProjects,
  showExperience,
  showCertification,
  order,
}) => (
  <div className="react-resume">
    <div
      className="resume"
      style={{ fontFamily: font }}
    >
      <ResumeHeader />
      {order.map((item) => {
        switch (item) {
          case EDUCATION:
            return showEducation
              && <Education key={uuid()} />;
          case TECH_SKILLS:
            return showTechSkills
              && <TechnicalSkills key={uuid()} />;
          case PROJECTS:
            return showProjects
              && <Projects key={uuid()} />;
          case EXPERIENCE:
            return showExperience
              && <Experience key={uuid()} />;
          case CERTIFICATION:
            return showCertification
              && <Certifications key={uuid()} />;
          default:
            return <p>Error with order.</p>;
        }
      })}
    </div>
  </div>
);

Resume.defaultProps = {
  font: undefined,
  showEducation: true,
  showTechSkills: true,
  showProjects: true,
  showExperience: true,
  showCertification: true,
  order: defaultResumeOrder,
};

Resume.propTypes = {
  font: PropTypes.string,
  showEducation: PropTypes.bool,
  showTechSkills: PropTypes.bool,
  showProjects: PropTypes.bool,
  showExperience: PropTypes.bool,
  showCertification: PropTypes.bool,
  order: PropTypes.arrayOf(PropTypes.number),
};

const mapStateToProps = state => ({
  showEducation: state.tools.showEducation,
  showTechSkills: state.tools.showTechSkills,
  showProjects: state.tools.showProjects,
  showExperience: state.tools.showExperience,
  showCertification: state.tools.showCertification,
  font: state.tools.font,
  order: state.tools.order,
});

export default connect(mapStateToProps)(Resume);
