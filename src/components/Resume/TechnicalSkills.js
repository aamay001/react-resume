import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';
import Stars from './Stars';

const defaultLevel = 4;

const retString = (kw) => (typeof kw === 'string' ? kw : kw.name);
const retObject = (kw) => (typeof kw === 'string' ? { name: kw, level: defaultLevel } : kw);

function TechnicalSkills({ techSkills, showSkillLevel, font }) {
  return (
    <section data-testid="TechSkills" className="resume-tech-skills">
      <h2 style={{ fontFamily: font }}>
        Technical Skills
      </h2>
      <hr />
      <div className="grid-container">
        {techSkills.map(
          (skill) => skill.isVisible !== false && (
            <div key={uuid()} className="grid-column" style={{ flexBasis: skill.columnWidthPercent || undefined }}>
              <h3 style={{ fontFamily: font }}>
                {skill.category}
              </h3>
              {showSkillLevel
                ? skill.keywords.map((kw) => (
                  <div className="tech-skills-keyword" key={uuid()}>
                    <div className="keyword-name">{retObject(kw).name}</div>
                    <Stars lev={retObject(kw).level} />
                  </div>
                ))
                : skill.keywords.map((kw, skillIndex) => (skillIndex === skill.keywords.length - 1 ? retString(kw) : `${retString(kw)}, `))}
            </div>),
        )}
      </div>
    </section>
  );
}

TechnicalSkills.defaultProps = {
  techSkills: [],
  showSkillLevel: false,
};

TechnicalSkills.propTypes = {
  techSkills: PropTypes.arrayOf(PropTypes.shape({})),
  showSkillLevel: PropTypes.bool,
  font: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  techSkills: state.resume.technicalSkills,
  showSkillLevel: state.tools.showSkillLevel,
  font: state.tools.font,
});

export default connect(mapStateToProps)(TechnicalSkills);
