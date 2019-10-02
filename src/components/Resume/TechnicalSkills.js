import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import Stars from './Stars';

const defaultLevel = 4;

const retString = kw => (typeof kw === 'string' ? kw : kw.name);
const retObject = kw => (typeof kw === 'string' ? { name: kw, level: defaultLevel } : kw);

const TechnicalSkills = ({ techSkills, showSkillLevel }) => (
  <section className="resume-tech-skills">
    <h2>Technical Skills</h2>
    <hr />
    <div className="grid-container">
      {techSkills.map(
        (skill, index) => skill.isVisble &&
          (index < 2 && (
            <div key={uuid()} className={`grid-column-${index + 1}`}>
              <h3>{skill.category}</h3>
              {showSkillLevel
                ? skill.keywords.map(kw => (
                  <div className="tech-skills-keyword" key={uuid()}>
                    <div className="keyword-name">{retObject(kw).name}</div>
                    <Stars lev={retObject(kw).level} />
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
};

TechnicalSkills.propTypes = {
  techSkills: PropTypes.arrayOf(PropTypes.shape({})),
  showSkillLevel: PropTypes.bool,
};

const mapStateToProps = state => ({
  techSkills: state.resume.technicalSkills,
  showSkillLevel: state.tools.showSkillLevel,
});

export default connect(mapStateToProps)(TechnicalSkills);
