import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Certifications = ({ certification }) => (
  <section className="resume-certification">
    <h2>Certification</h2>
    <hr />
    <ul>
      {certification.map(cert => (
        <li key={Symbol(cert.issuedBy)}>
          <h3>{cert.issuedBy}</h3>
          {cert.dateFrom
            ? <h3>{`${cert.dateFrom}-${cert.dateTo}`}</h3>
            : <h3> </h3>}
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
