import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

function Experience({ experience, font }) {
  return (
    <section data-testid="Experience" className="resume-experience">
      <h2 style={{ fontFamily: font }}>
        Experience
      </h2>
      <hr />
      <ul>
        {experience.map(
          (exp) => exp.isVisible !== false && (
            <li key={uuid()}>
              {' '}
              <h3 style={{ fontFamily: font }}>
                {exp.position}
              </h3>
              {exp.dateFrom &&
                <h3 style={{ fontFamily: font }}>
                  {`${exp.dateFrom}${exp.dateTo ? ` - ${exp.dateTo}` : ''}`}
                </h3>}
              <em>{`${exp.company}, ${exp.city}, ${exp.state}`}</em>
              <ul>
                <li>{exp.primaryWorkBrief}</li>
                {exp.impact1 && <li>{exp.impact1}</li>}
                {exp.impact2 && <li>{exp.impact2}</li>}
                {exp.impact3 && <li>{exp.impact3}</li>}
                {exp.impact4 && <li>{exp.impact4}</li>}
                {exp.impact5 && <li>{exp.impact5}</li>}
              </ul>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}

Experience.defaultProps = {
  experience: [],
};

Experience.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.shape({})),
  font: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  experience: state.resume.experience,
  font: state.tools.font,
});

export default connect(mapStateToProps)(Experience);
