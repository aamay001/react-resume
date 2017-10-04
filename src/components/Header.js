import React, {Component} from 'react';
import {connect} from 'react-redux'

export class Header extends Component {
  render() {
    return (
      <header className="resume-header">
        <h1>{this.props.name}</h1>
          <ul>
            <li><a href={`mailto:${this.props.email}?subject=Interview%20Request`}>{this.props.email}</a></li>
            <li><a href={`tel:${this.props.phone}`}>{this.props.phone}</a></li>
            <li><a href={this.props.github} target='_new'>{this.props.github}</a></li>
          </ul>
          {this.props.includeAddress ?
          <ul>
            <li>{this.props.address}</li>
            <li>{this.props.city}</li>
            <li>{this.props.state}</li>
            <li>{this.props.zip}</li>
            <li>{this.props.country}</li>
          </ul> : '' }
      </header>
    );
  }
}

const mapStateToProps = state => ({
  name: state.name,
  email: state.email,
  phone: state.phone,
  github: state.github,
  address: state.address,
  city: state.city,
  state: state.state,
  zip: state.zip,
  country: state.country,
  includeAddress: state.includeAddress
});

const ConnectedHeader = connect(mapStateToProps)(Header);

export default ConnectedHeader;

