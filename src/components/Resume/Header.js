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

export function Header({
  header,
  showEmail,
  showPhone,
  showGithub,
  showLinkedIn,
  showWebsite,
  showAddress,
  font,
  showIcon,
  refresh,
}) {
  if (header === undefined) {
    return null;
  }

  const { addressVisibility } = header;

  return (
    <header className="resume-header" style={{ fontFamily: font }} data-refresh={refresh}>
      <h1 style={{ fontFamily: font }}>{header.name}</h1>
      <ul>
        {showEmail
          && (
            <li data-testid="Email">
              <a href={`mailto:${header.email}?subject=Interview%20Request`}>
                {showIcon
                  ? <img src={mailIcon} className="header-icon normal-icon" alt="Mail Icon" />
                  : ''}
                {showIcon
                  ? <img src={mailDarkIcon} className="header-icon dark-icon" alt="Mail Icon" />
                  : ''}
                {header.email}
              </a>
            </li>
          )}
        {showPhone
          && (
            <li data-testid="Phone">
              <a href={`tel:${header.phone}`}>
                {showIcon ? <img src={phoneIcon} className="header-icon normal-icon" alt="Phone Icon" /> : ''}
                {showIcon ? <img src={phoneDarkIcon} className="header-icon dark-icon" alt="Phone Icon" /> : ''}
                {header.phone}
              </a>
            </li>
          )}
        {showGithub
          && (
            <li data-testid="Github">
              <a href={header.github} target="_new">
                {showIcon ? <img src={githubIcon} className="header-icon normal-icon" alt="Github Icon" /> : ''}
                {showIcon ? <img src={githubDarkIcon} className="header-icon dark-icon" alt="Github Icon" /> : ''}
                {header.github}
              </a>
            </li>
          )}
        {showLinkedIn
          && (
            <li data-testid="LinkedIn">
              <a href={header.linkedin} target="_new">
                {showIcon ? <img src={linkedinIcon} className="header-icon normal-icon" alt="LinkedIn Icon" /> : ''}
                {showIcon ? <img src={linkedinDarkIcon} className="header-icon dark-icon" alt="LinkedIn Icon" /> : ''}
                {header.linkedin}
              </a>
            </li>
          )}
        {showWebsite
          && (
            <li data-testid="Website">
              <a href={header.website} target="_new">
                {showIcon ? <img src={websiteIcon} className="header-icon normal-icon" alt="Website Icon" /> : ''}
                {showIcon ? <img src={websiteDarkIcon} className="header-icon dark-icon" alt="Website Icon" /> : ''}
                {header.website}
              </a>
            </li>
          )}
      </ul>
      {showAddress && (
        <ul data-testid="Address">
          {addressVisibility.address && <li>{header.address}</li>}
          {addressVisibility.city && <li>{header.city}</li>}
          {addressVisibility.state && <li>{header.state}</li>}
          {addressVisibility.zip && <li>{header.zip}</li>}
          {addressVisibility.country && <li>{header.country}</li>}
        </ul>
      )}
    </header>
  );
}

Header.defaultProps = {
  showAddress: true,
  showEmail: true,
  showPhone: true,
  showGithub: true,
  showLinkedIn: true,
  showWebsite: true,
  showIcon: true,
};

Header.propTypes = {
  header: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    github: PropTypes.string,
    linkedin: PropTypes.string,
    country: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    addressVisibility: PropTypes.shape({
      address: PropTypes.bool,
      city: PropTypes.bool,
      state: PropTypes.bool,
      zip: PropTypes.bool,
      country: PropTypes.bool,
    }),
  }).isRequired,
  showEmail: PropTypes.bool,
  showPhone: PropTypes.bool,
  showGithub: PropTypes.bool,
  showLinkedIn: PropTypes.bool,
  showWebsite: PropTypes.bool,
  showAddress: PropTypes.bool,
  font: PropTypes.string.isRequired,
  showIcon: PropTypes.bool,
  refresh: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  header: state.resume.header,
  showAddress: state.tools.showAddress,
  showEmail: state.tools.showEmail,
  showPhone: state.tools.showPhone,
  showGithub: state.tools.showGithub,
  showLinkedIn: state.tools.showLinkedIn,
  showWebsite: state.tools.showWebsite,
  font: state.tools.font,
  showIcon: state.tools.showIcon,
});

export default connect(mapStateToProps)(Header);
