import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';
import Stars from './Stars';

const TechnicalSkills = ({ techSkills }) => (
  <section className="resume-tech-skills">
    <h2>Technical Skills</h2>
    <hr />
    <div className="grid-container">
      {techSkills.map((skill, index) => (index < 2
        && (
          <div key={uuid()} className={`grid-column-${index + 1}`}>
            <h3>{skill.category}</h3>
            {skill.keywords.map((kw, skillIndex) => (
              <div className="tech-skills-keyword" key={uuid()}>
                <div className="keyword-name">{kw.name}</div>
                <Stars lev={kw.level} />
                {console.log(kw)}
              </div>
            ))}
          </div>
        )))}
    </div>
  </section >
);

TechnicalSkills.defaultProps = {
  techSkills: [],
};

TechnicalSkills.propTypes = {
  techSkills: PropTypes.arrayOf(PropTypes.shape({})),
};

const mapStateToProps = state => ({
  techSkills: state.resume.technicalSkills,
});

export default connect(mapStateToProps)(TechnicalSkills);
