import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { v4 as uuid } from 'uuid';

function Certifications({ certification, font }) {
  return (
    <section data-testid="Certification" className="resume-certification">
      <h2 style={{ fontFamily: font }}>
        Certifications
      </h2>
      <hr />
      <ul>
        {certification.map(
          (cert) => cert.isVisible !== false && (
            <li key={uuid()}>
              <h3 style={{ fontFamily: font }}>
                {cert.issuedBy}
              </h3>
              {cert.dateFrom && (
                <h3 style={{ fontFamily: font }}>
                  {`${cert.dateFrom}${cert.dateTo ? ` - ${cert.dateTo}` : ''}`}
                </h3>
              )}
              <p>{cert.id}</p>
            </li>
          ),
        )}
      </ul>
    </section>
  );
}

Certifications.defaultProps = {
  certification: [],
};

Certifications.propTypes = {
  certification: PropTypes.arrayOf(PropTypes.shape({})),
  font: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  certification: state.resume.certification,
  font: state.tools.font,
});

export default connect(mapStateToProps)(Certifications);
