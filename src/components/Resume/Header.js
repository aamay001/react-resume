import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

export const Header = ({
  header,
  showEmail,
  showPhone,
  showGithub,
  showLinkedIn,
  showWebsite,
  showAddress,
}) => (
  <header className="resume-header">
    <h1>{header.name}</h1>
    <ul>
      {showEmail
        && (
          <li>
            <a href={`mailto:${header.email}?subject=Interview%20Request`}>
              {header.email}
            </a>
          </li>
        )}
      {showPhone
        && (
          <li>
            <a href={`tel:${header.phone}`}>
              {header.phone}
            </a>
          </li>
        )}
      {showGithub
        && (
          <li>
            <a href={header.github} target="_new">
              {header.github}
            </a>
          </li>
        )}
      {showLinkedIn
        && (
          <li>
            <a href={header.linkedin} target="_new">
              {header.linkedin}
            </a>
          </li>
        )}
      {showWebsite
        && (
          <li>
            <a href={header.website} target="_new">
              {header.website}
            </a>
          </li>
        )}
    </ul>
    {showAddress && (
      <ul>
        <li>{header.address}</li>
        <li>{header.city}</li>
        <li>{header.state}</li>
        <li>{header.zip}</li>
        <li>{header.country}</li>
      </ul>
    )}
  </header>
);

Header.defaultProps = {
  header: undefined,
  showAddress: true,
  showEmail: true,
  showPhone: true,
  showGithub: true,
  showLinkedIn: true,
  showWebsite: true,
};

Header.propTypes = {
  header: PropTypes.shape({}),
  showEmail: PropTypes.bool,
  showPhone: PropTypes.bool,
  showGithub: PropTypes.bool,
  showLinkedIn: PropTypes.bool,
  showWebsite: PropTypes.bool,
  showAddress: PropTypes.bool,
};

const mapStateToProps = state => ({
  header: state.resume.header,
  showAddress: state.tools.showAddress,
  showEmail: state.tools.showEmail,
  showPhone: state.tools.showPhone,
  showGithub: state.tools.showGithub,
  showLinkedIn: state.tools.showLinkedIn,
  showWebsite: state.tools.showWebsite,
});

export default connect(mapStateToProps)(Header);
