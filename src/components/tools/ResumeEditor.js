import React, {Component} from 'react';
import {connect} from 'react-redux';
import AceEditor from 'react-ace';

import {
  updateResume,
  updateResumeEditorStatus
} from '../../actions';
import 'brace/mode/json';
import 'brace/theme/tomorrow';
import 'brace/ext/language_tools';

import ResumeEditorStatus, {
  ERROR,
  UPDATED,
  VALIDATING
} from './ResumeEditorStatus';

import ResumeEditorCloseButton from './ResumeEditorCloseButton';

export class ResumeEditor extends Component {

  onResumeChange = data => {
    this.props.dispatch(updateResumeEditorStatus(VALIDATING));
    const updatedResume = this.isValidJSON(data);
    if(updatedResume) {
      this.props.dispatch(updateResume(updatedResume))
      this.props.dispatch(updateResumeEditorStatus(UPDATED));
      return;
    }

    this.props.dispatch(updateResumeEditorStatus(ERROR));
  }

  isValidJSON = data => {
    let cleanedResume;
    try {
      const newResume = JSON.parse(data);
      const keys = Object.keys(newResume);
      if( !('header' in keys) && typeof(newResume.header) !== 'object' ){
        return false;
      }

      let missingProp = false;
      [
        'name',
        'email',
        'phone',
        'github',
        'linkedin',
        'address',
        'city',
        'state',
        'zip',
        'country'
      ].forEach( key => {
        if ( !(key in newResume.header) ) {
          missingProp = true;
        }
      });

      if (missingProp) {
        throw new Error('');
      }

      if( !('experience' in keys) && !Array.isArray(newResume.experience) ){
        throw new Error('');
      }
      if( !('education' in keys) && !Array.isArray(newResume.education) ){
        throw new Error('');
      }
      if( !('technicalSkills' in keys) && !Array.isArray(newResume.technicalSkills) ){
        throw new Error('');
      }
      if( !('projects' in keys) && !Array.isArray(newResume.projects) ){
        throw new Error('');
      }
      cleanedResume = {
        header: newResume.header,
        experience: newResume.experience,
        education: newResume.education,
        technicalSkills: newResume.technicalSkills,
        projects: newResume.projects,
      }
    } catch (error) {
      return false;
    }
    return cleanedResume;
  }

  render(){
    this.updateOnOpenWindow = false;
    let editorValue = JSON.stringify(this.props.resume, null, '\t');
    return(
        <div className="resume-edit-panel"
          style={{top: this.props.showResumeEditor ? '0' : '-102%'}} >
          <label htmlFor="resume-js-editor" >JSON Editor</label>
          <ResumeEditorCloseButton />
          <ResumeEditorStatus />
          <AceEditor
            mode= "json"
            theme="tomorrow"
            name="resume-js-editor"
            value={editorValue}
            showLineNumber={true}
            showPrintMargin={false}
            tabSize={3}
            onChange={this.onResumeChange}
          />
        </div>
    );
  }
}

const mapStateToProps = state => ({
  showResumeEditor: state.tools.showResumeEditor,
  resume: state.resume
});

const ConnectedResumeEditor = connect(mapStateToProps)(ResumeEditor);
export default ConnectedResumeEditor;