import React, {Component} from 'react';
import {connect} from 'react-redux';

import {updateResumeEditorStatus} from '../../actions';

export const UPDATED = 'resume updated';
export const WAITING = 'waiting for changes';
export const ERROR = 'invalid json';
export const VALIDATING = 'validating';
let resetTimer

export class ResumeEditorStatus extends Component {
  componentDidUpdate(prevProps, prevState){
    if( this.props.statusMessage === UPDATED ) {
      clearTimeout(resetTimer);
      resetTimer = setTimeout(
        () => this.props.dispatch(updateResumeEditorStatus(WAITING)),
        5000
      );
    }
  }

  render() {
    return (
      <em style={{
        color: this.props.statusMessage === UPDATED ? 'green' :
              this.props.statusMessage === ERROR ? 'red' : 'black'
      }}>{this.props.statusMessage}</em>
    );
  }
}

ResumeEditorStatus.defaultProps = {
  statusMessage: WAITING
}

const mapStateToProps = state => ({
  statusMessage: state.tools.editorStatus
});

const ConnectedResumeEditorStatus = connect(mapStateToProps)(ResumeEditorStatus);
export default ConnectedResumeEditorStatus;