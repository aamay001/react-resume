import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

const Certifications = ({ certification }) => (
  <section className="resume-certification">
    <h2>Certifications</h2>
    <hr />
    <ul>
      {certification.map(cert => (
        <li key={uuid()}>
          <h3>{cert.issuedBy}</h3>
          {cert.dateFrom
            &&
              <h3>
                {`${cert.dateFrom}${cert.dateTo ? ` - ${cert.dateTo}` : ''}`}
              </h3>}
          <p>{cert.id}</p>
        </li>
      ))}
    </ul>
  </section>
);


Certifications.defaultProps = {
  certification: [],
};

Certifications.propTypes = {
  certification: PropTypes.arrayOf(PropTypes.shape({})),
};

const mapStateToProps = state => ({
  certification: state.resume.certification,
});

export default connect(mapStateToProps)(Certifications);
