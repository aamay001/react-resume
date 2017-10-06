import React, {Component} from 'react';
import {connect} from 'react-redux'

export class Header extends Component {
  render() {
    return (
      <header className="resume-header">
        <h1>{this.props.header.name}</h1>
          <ul>
            <li><a href={`mailto:${this.props.header.email}?subject=Interview%20Request`}>{this.props.header.email}</a></li>
            <li><a href={`tel:${this.props.header.phone}`}>{this.props.header.phone}</a></li>
            <li><a href={this.props.header.github} target='_new'>{this.props.header.github}</a></li>
          </ul>
          {this.props.includeAddress ?
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

const mapStateToProps = state => ({
  header: state.resume.header,
  includeAddress: state.includeAddress
});

const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader;

