import React, {Component} from 'react';
import {connect} from 'react-redux'

export class Header extends Component {
  render() {
    return (
      <header className="resume-header">
        <h1>{this.props.header.name}</h1>
          <ul>
            { this.props.showEmail ?
              <li>
                <a href={`mailto:${this.props.header.email}?subject=Interview%20Request`}>{this.props.header.email}</a>
              </li> : '' }
            { this.props.showPhone ?
              <li>
                <a href={`tel:${this.props.header.phone}`}>{this.props.header.phone}</a>
              </li> : '' }
            { this.props.showGithub ?
              <li>
                <a href={this.props.header.github} target='_new'>{this.props.header.github}</a>
              </li> : '' }
            { this.props.showLinkedIn ?
              <li>
                <a href={this.props.header.linkedin} target='_new'>{this.props.header.linkedin}</a>
              </li> : '' }
            { this.props.showWebsite ?
              <li>
                <a href={this.props.header.website} target='_new'>{this.props.header.website}</a>
              </li> : '' }
          </ul>
          {this.props.showAddress ?
          <ul>
            <li>{this.props.header.address}</li>
            <li>{this.props.header.city}</li>
            <li>{this.props.header.state}</li>
            <li>{this.props.header.zip}</li>
            <li>{this.props.header.country}</li>
          </ul> : '' }
      </header>
    );
  }
}

Header.defaultProps = {
  header: '',
  showAddress: true,
  showEmail: true,
  showPhone: true,
  showGithub: true,
  showLinkedIn: true
}

const mapStateToProps = state => ({
  header: state.resume.header,
  showAddress: state.tools.showAddress,
  showEmail: state.tools.showEmail,
  showPhone: state.tools.showPhone,
  showGithub: state.tools.showGithub,
  showLinkedIn: state.tools.showLinkedIn,
  showWebsite: state.tools.showWebsite
});

const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader;

