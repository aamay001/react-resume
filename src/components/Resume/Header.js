import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import linkedinIcon from '../../icons/linkedin.svg';
import mailIcon from '../../icons/mail.svg';
import phoneIcon from '../../icons/phone.svg';
import websiteIcon from '../../icons/internet.svg';
import githubIcon from '../../icons/github.svg';

import linkedinDarkIcon from '../../icons/dark/linkedin.svg';
import mailDarkIcon from '../../icons/dark/mail.svg';
import phoneDarkIcon from '../../icons/dark/phone.svg';
import websiteDarkIcon from '../../icons/dark/internet.svg';
import githubDarkIcon from '../../icons/dark/github.svg';

export const Header = ({
  header,
  showEmail,
  showPhone,
  showGithub,
  showLinkedIn,
  showWebsite,
  showAddress,
  font,
  showIcon,
  darkMode,
}) => (
  <header className="resume-header" style={{ fontFamily: font }}>
    <h1 style={{ fontFamily: font }}>{header.name}</h1>
    <ul>
      {showEmail
        && (
          <li>
            <a href={`mailto:${header.email}?subject=Interview%20Request`}>
              { showIcon ? <img src={darkMode ? mailDarkIcon : mailIcon} className="header-icon" alt="Mail Icon" /> : '' }
              {header.email}
            </a>
          </li>
        )}
      {showPhone
        && (
          <li>
            <a href={`tel:${header.phone}`}>
              { showIcon ? <img src={darkMode ? phoneDarkIcon : phoneIcon} className="header-icon" alt="Phone Icon" /> : '' }
              {header.phone}
            </a>
          </li>
        )}
      {showGithub
        && (
          <li>
            <a href={header.github} target="_new">
              { showIcon ? <img src={darkMode ? githubDarkIcon : githubIcon} className="header-icon" alt="Github Icon" /> : '' }
              {header.github}
            </a>
          </li>
        )}
      {showLinkedIn
        && (
          <li>
            <a href={header.linkedin} target="_new">
              { showIcon ? <img src={darkMode ? linkedinDarkIcon : linkedinIcon} className="header-icon" alt="LinkedIn Icon" /> : '' }
              {header.linkedin}
            </a>
          </li>
        )}
      {showWebsite
        && (
          <li>
            <a href={header.website} target="_new">
              { showIcon ? <img src={darkMode ? websiteDarkIcon : websiteIcon} className="header-icon" alt="Website Icon" /> : '' }
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
  showIcon: true,
  darkMode: false,
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
  showIcon: PropTypes.bool,
  darkMode: PropTypes.bool,
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
  showIcon: state.tools.showIcon,
  darkMode: state.tools.darkMode,
});

export default connect(mapStateToProps)(Header);
