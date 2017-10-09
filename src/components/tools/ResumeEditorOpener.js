import React, {Component} from 'react';
import {connect} from 'react-redux';

import {openResumeEditor} from '../../actions';

export class ResumeEditorOpener extends Component{
  onClickEditResume = e => {
    this.props.dispatch(openResumeEditor());
  }

  render() {
    return (
      <div className="resume-tools-resume-editor">
        <label>JSON Editor</label>
        <button onClick={this.onClickEditResume}>
          {!this.props.showResumeEditor ? 'Open Editor' : 'Close Editor'}
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showResumeEditor: state.tools.showResumeEditor
});

const ConnectedResumeEditorOpener = connect(mapStateToProps)(ResumeEditorOpener);
export default ConnectedResumeEditorOpener;