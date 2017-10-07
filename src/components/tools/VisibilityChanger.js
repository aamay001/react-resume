import React, {Component} from 'react';
import {connect} from 'react-redux'

import { toggleShowItem } from '../../actions'

export class VisibilityChanger extends Component {
  handleCheckBoxChange = e => {
    let item = e.target.getAttribute('data-toggle');
    this.props.dispatch(toggleShowItem(item));
  }

  render() {
    return (
      <div className="resume-tools-visibility-changer">
        <label htmlFor="address-visibility">
          <input id="address-visibility"
            type="checkbox"
            checked={this.props.showAddress}
            onChange={this.handleCheckBoxChange}
            data-toggle="showAddress"/> Show Address
        </label>

        <label htmlFor="email-visibility">
          <input id="email-visibility"
            type="checkbox"
            checked={this.props.showEmail}
            onChange={this.handleCheckBoxChange}
            data-toggle="showEmail"/> Show Email
        </label>

        <label htmlFor="phone-visibility">
          <input id="phone-visibility"
            type="checkbox"
            checked={this.props.showPhone}
            onChange={this.handleCheckBoxChange}
            data-toggle="showPhone"/> Show Phone
        </label>

        <label htmlFor="github-visibility">
          <input id="github-visibility"
            type="checkbox"
            checked={this.props.showGithub}
            onChange={this.handleCheckBoxChange}
            data-toggle="showGithub"/> Show Github
        </label>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showAddress: state.tools.showAddress,
  showEmail: state.tools.showEmail,
  showPhone: state.tools.showPhone,
  showGithub: state.tools.showGithub
});

const ConnectedVisibilityChanger = connect(mapStateToProps)(VisibilityChanger);
export default ConnectedVisibilityChanger;