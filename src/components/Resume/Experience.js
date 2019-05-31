import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

const Experience = ({ experience }) => (
  <section className="resume-experience">
    <h2>Experience</h2>
    <hr />
    <ul>
      {experience.map(exp => (
        <li key={uuid()}>
          <h3>{exp.position}</h3>
          <h3>{`${exp.dateFrom}-${exp.dateTo}`}</h3>
          <em>
            {`${exp.company}, ${exp.city}, ${exp.state}`}
          </em>
          <ul>
            <li>{exp.primaryWorkBrief}</li>
            {exp.impact1 && <li>{exp.impact1}</li>}
            {exp.impact2 && <li>{exp.impact2}</li>}
            {exp.impact3 && <li>{exp.impact3}</li>}
            {exp.impact4 && <li>{exp.impact4}</li>}
            {exp.impact5 && <li>{exp.impact5}</li>}
          </ul>
        </li>
      ))}
    </ul>
  </section>
);

Experience.defaultProps = {
  experience: [],
};

Experience.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.shape({})),
};

const mapStateToProps = state => ({
  experience: state.resume.experience,
});

export default connect(mapStateToProps)(Experience);
