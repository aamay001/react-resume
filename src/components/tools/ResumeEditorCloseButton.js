import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../styles/MenuButton.css'

import {openResumeEditor, toggleTools} from '../../actions';

export class ResumeEditorCloseButton extends Component {
  onResumeEditorCloseButtonClick = e => {
    this.props.dispatch(openResumeEditor());
    this.props.dispatch(toggleTools());
  }

  render() {
    return (
      <div className={this.props.showResumeEditor ? 'menu-open resume-tools-menu-button' : 'resume-tools-menu-button'}
        onClick={this.onResumeEditorCloseButtonClick}>
        <div className={this.props.showResumeEditor ? 'tools-shown' : ''}></div>
        <div className={this.props.showResumeEditor ? 'tools-shown' : ''}></div>
        <div className={this.props.showResumeEditor ? 'tools-shown' : ''}></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showResumeEditor: state.tools.showResumeEditor
})

const ConnectedResumeEditorCloseButton = connect(mapStateToProps)(ResumeEditorCloseButton);
export default ConnectedResumeEditorCloseButton;