import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function ProfessionalSummary({ professionalSummary, font }) {
  return (
    <section data-testid="ProfessionalSummary" className="resume-professional-summary">
      <h2 style={{ fontFamily: font }}>
        Professional Summary
      </h2>
      <hr />
      <p>
        {professionalSummary.text}
      </p>
    </section>
  );
}

ProfessionalSummary.propTypes = {
  professionalSummary: PropTypes.shape({
    text: PropTypes.string,
  }).isRequired,
  font: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  professionalSummary: state.resume.professionalSummary,
  font: state.tools.font,
});

export default connect(mapStateToProps)(ProfessionalSummary);
