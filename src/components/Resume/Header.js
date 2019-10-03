import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import linkedinIcon from '../../icons/linkedin.svg';
import mailIcon from '../../icons/mail.svg';
import phoneIcon from '../../icons/phone.svg';
import websiteIcon from '../../icons/internet.svg';
import githubIcon from '../../icons/github.svg';

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
              <img src={mailIcon} className="header-icon" alt="Mail Icon" />
              {header.email}
            </a>
          </li>
        )}
      {showPhone
        && (
          <li>
            <a href={`tel:${header.phone}`}>
              <img src={phoneIcon} className="header-icon" alt="Mail Icon" />
              {header.phone}
            </a>
          </li>
        )}
      {showGithub
        && (
          <li>
            <a href={header.github} target="_new">
              <img src={githubIcon} className="header-icon" alt="Mail Icon" />
              {header.github}
            </a>
          </li>
        )}
      {showLinkedIn
        && (
          <li>
            <a href={header.linkedin} target="_new">
              <img src={linkedinIcon} className="header-icon" alt="Mail Icon" />
              {header.linkedin}
            </a>
          </li>
        )}
      {showWebsite
        && (
          <li>
            <a href={header.website} target="_new">
              <img src={websiteIcon} className="header-icon" alt="Mail Icon" />
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
