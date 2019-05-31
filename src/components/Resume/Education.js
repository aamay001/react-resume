import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

const Education = ({ education }) => (
  <section className="resume-education">
    <h2>Education</h2>
    <hr />
    <ul>
      {education.map(ed => (
        <li key={uuid()}>
          <h3>{ed.site}</h3>
          {ed.dateFrom
            &&
              <h3>
                {`${ed.dateFrom}${ed.dateTo ? ` - ${ed.dateTo}` : ''}`}
              </h3>}
          <em>{ed.studyDegree}</em>
        </li>
      ))}
    </ul>
  </section>
);

Education.defaultProps = {
  education: [],
};

Education.propTypes = {
  education: PropTypes.arrayOf(PropTypes.shape({})),
};

const mapStateToProps = state => ({
  education: state.resume.education,
});

export default connect(mapStateToProps)(Education);
