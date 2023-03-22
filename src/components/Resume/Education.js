import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

function Education({ education, font }) {
  return (
    <section data-testid="Education" className="resume-education">
      <h2 style={{ fontFamily: font }}>Education</h2>
      <hr />
      <ul>
        {education.map(
          (ed) => ed.isVisible !== false && (
            <li key={uuid()}>
              <h3 style={{ fontFamily: font }}>{ed.site}</h3>
              {ed.dateFrom &&
                <h3 style={{ fontFamily: font }}>
                  {`${ed.dateFrom}${ed.dateTo ? ` - ${ed.dateTo}` : ''}`}
                </h3>}
              <em>{ed.studyDegree}</em>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}

Education.defaultProps = {
  education: [],
};

Education.propTypes = {
  education: PropTypes.arrayOf(PropTypes.shape({})),
  font: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  education: state.resume.education,
  font: state.tools.font,
});

export default connect(mapStateToProps)(Education);
