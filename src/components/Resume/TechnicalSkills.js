import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

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
            skillIndex === skill.keywords.length - 1
              ? kw
              : `${kw}, `
          ))}
        </div>
      )))}
    </div>
  </section>
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
