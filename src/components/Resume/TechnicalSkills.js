import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import Stars from './Stars';

const defaultLevel = 4;

const retString = kw => (typeof kw === 'string' ? kw : kw.name);
const retObject = kw => (typeof kw === 'string' ? { name: kw, level: defaultLevel } : kw);

const TechnicalSkills = ({
  techSkills, showSkillLevel,
  font, darkMode,
}) => (
  <section className="resume-tech-skills">
    <h2 style={{ fontFamily: font }}>
      Technical Skills
    </h2>
    <hr />
    <div className="grid-container">
      {techSkills.map(
        (skill, index) => skill.isVisble !== false &&
          (index < 2 && (
            <div key={uuid()} className={`grid-column-${index + 1}`}>
              <h3 style={{ fontFamily: font }}>
                {skill.category}
              </h3>
              {showSkillLevel
                ? skill.keywords.map(kw => (
                  <div className="tech-skills-keyword" key={uuid()}>
                    <div className="keyword-name">{retObject(kw).name}</div>
                    <Stars lev={retObject(kw).level} darkMode={darkMode} />
                  </div>
                ))
                : skill.keywords.map((kw, skillIndex) => (skillIndex === skill.keywords.length - 1 ? retString(kw) : `${retString(kw)}, `))}
            </div>
          )),
      )}
    </div>
  </section>
);

TechnicalSkills.defaultProps = {
  techSkills: [],
  showSkillLevel: false,
  darkMode: false,
};

TechnicalSkills.propTypes = {
  techSkills: PropTypes.arrayOf(PropTypes.shape({})),
  showSkillLevel: PropTypes.bool,
  font: PropTypes.string.isRequired,
  darkMode: PropTypes.bool,
};

const mapStateToProps = state => ({
  techSkills: state.resume.technicalSkills,
  showSkillLevel: state.tools.showSkillLevel,
  font: state.tools.font,
  darkMode: state.tools.darkMode,
});

export default connect(mapStateToProps)(TechnicalSkills);
