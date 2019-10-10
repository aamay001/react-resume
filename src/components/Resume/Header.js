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
  font,
}) => (
  <header className="resume-header" style={{ fontFamily: font }}>
    <h1 style={{ fontFamily: font }}>{header.name}</h1>
    <ul>
      {showEmail
        && (
          <li data-testid="Email">
            <a href={`mailto:${header.email}?subject=Interview%20Request`}>
              {header.email}
            </a>
          </li>
        )}
      {showPhone
        && (
          <li data-testid="Phone">
            <a href={`tel:${header.phone}`}>
              {header.phone}
            </a>
          </li>
        )}
      {showGithub
        && (
          <li data-testid="Github">
            <a href={header.github} target="_new">
              {header.github}
            </a>
          </li>
        )}
      {showLinkedIn
        && (
          <li data-testid="LinkedIn">
            <a href={header.linkedin} target="_new">
              {header.linkedin}
            </a>
          </li>
        )}
      {showWebsite
        && (
          <li data-testid="Website">
            <a href={header.website} target="_new">
              {header.website}
            </a>
          </li>
        )}
    </ul>
    {showAddress && (
      <ul data-testid="Address">
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
  font: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  header: state.resume.header,
  showAddress: state.tools.showAddress,
  showEmail: state.tools.showEmail,
  showPhone: state.tools.showPhone,
  showGithub: state.tools.showGithub,
  showLinkedIn: state.tools.showLinkedIn,
  showWebsite: state.tools.showWebsite,
  font: state.tools.font,
});

export default connect(mapStateToProps)(Header);



