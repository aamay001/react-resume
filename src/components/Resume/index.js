import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import classNames from 'classnames';
import Certifications from './Certifications';
import Education from './Education';
import Experience from './Experience';
import ResumeHeader from './Header';
import Projects from './Projects';
import ProfessionalSummary from './ProfessionalSummary';
import TechnicalSkills from './TechnicalSkills';
import { paperSizes } from '../Tools/PaperSize';
import {
  EDUCATION,
  TECH_SKILLS,
  PROJECTS,
  EXPERIENCE,
  CERTIFICATION,
  PROFESSIONAL_SUMMARY,
  defaultResumeOrder,
} from '../../helpers/resume.helper';
import { setColorImportant } from '../../helpers/font.helper';
import '../../styles/Resume.css';

function Resume({
  font,
  showEducation,
  showTechSkills,
  showProjects,
  showExperience,
  showCertification,
  showProfessionalSummary,
  order,
  paperSizeObj,
  darkMode,
  refresh,
}) {
  return (
    <>
      <div style={{ height: '5VH', backgroundColor: 'transparent' }} className="no-print" />
      <div className={classNames('react-resume', paperSizeObj.tag, { dark: darkMode })} data-refresh={refresh}>
        <div
          className="resume"
          style={{ fontFamily: font }}
        >
          <ResumeHeader refresh={refresh} />
          {order.map((item) => {
            switch (item) {
              case PROFESSIONAL_SUMMARY:
                return showProfessionalSummary
                  && <ProfessionalSummary key={uuid()} />;
              case TECH_SKILLS:
                return showTechSkills
                  && <TechnicalSkills key={uuid()} />;
              case EXPERIENCE:
                return showExperience
                  && <Experience key={uuid()} />;
              case PROJECTS:
                return showProjects
                  && <Projects key={uuid()} />;
              case EDUCATION:
                return showEducation
                  && <Education key={uuid()} />;
              case CERTIFICATION:
                return showCertification
                  && <Certifications key={uuid()} />;
              default:
                return <p>Error with order.</p>;
            }
          })}
        </div>
      </div>
      <p
        className="page-limit-info"
        style={{
          color: darkMode ? 'white' : 'black',
          textAlign: 'center',
          position: 'static',
          width: '100vw',
          marginTop: 10,
        }}
      >
        <span role="img" aria-label="img" ref={(node) => setColorImportant(node, 'red')}> ⬆ ️</span>
        {`bottom limit of ${paperSizeObj.name} size page`}
        <span role="img" aria-label="img" ref={(node) => setColorImportant(node, 'red')}> ⬆ ️</span>
      </p>
      <div style={{ height: '25VH', backgroundColor: 'transparent' }} className="no-print" />
    </>
  );
}

Resume.defaultProps = {
  font: undefined,
  showEducation: true,
  showTechSkills: true,
  showProjects: true,
  showExperience: true,
  showCertification: true,
  showProfessionalSummary: true,
  order: defaultResumeOrder,
  paperSizeObj: paperSizes[0],
  darkMode: false,
};

Resume.propTypes = {
  font: PropTypes.string,
  showEducation: PropTypes.bool,
  showTechSkills: PropTypes.bool,
  showProjects: PropTypes.bool,
  showExperience: PropTypes.bool,
  showCertification: PropTypes.bool,
  showProfessionalSummary: PropTypes.bool,
  order: PropTypes.arrayOf(PropTypes.number),
  paperSizeObj: PropTypes.shape({
    name: PropTypes.string,
    tag: PropTypes.string,
  }),
  darkMode: PropTypes.bool,
  refresh: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  showEducation: state.tools.showEducation,
  showTechSkills: state.tools.showTechSkills,
  showProjects: state.tools.showProjects,
  showExperience: state.tools.showExperience,
  showCertification: state.tools.showCertification,
  showProfessionalSummary: state.tools.showProfessionalSummary,
  font: state.tools.font,
  order: state.tools.order,
  paperSizeObj: paperSizes.find((size) => size.tag === state.tools.paperSize),
  resume: state.resume,
  darkMode: state.tools.darkMode,
  refresh: state.app.refreshResume,
});

export default connect(mapStateToProps)(Resume);
