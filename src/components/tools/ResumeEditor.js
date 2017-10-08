import React, {Component} from 'react';
import {connect} from 'react-redux';
import AceEditor from 'react-ace';

import {updateResume, openResumeEditor} from '../../actions';
import 'brace/mode/json';
import 'brace/theme/tomorrow';
import 'brace/ext/language_tools';

export class ResumeEditor extends Component {

  onEditorChange = updatedResume => {
    const cleanedResume = this.isValidJSON(updatedResume);
    if(cleanedResume) {
      this.props.dispatch(updateResume(cleanedResume));
    }
  }

  onClickCloseResume = e => {
    this.props.dispatch(openResumeEditor());
  }

  isValidJSON = data => {
    let cleanedResume;
    try {
      const newResume = JSON.parse(data);
      const keys = Object.keys(newResume);
      if( !('header' in keys) && typeof(newResume.header) !== 'object' ){
        return false;
      }
      if( !('experience' in keys) && !Array.isArray(newResume.experience) ){
        return false;
      }
      if( !('education' in keys) && !Array.isArray(newResume.education) ){
        return false;
      }
      if( !('technicalSkills' in keys) && !Array.isArray(newResume.technicalSkills) ){
        return false;
      }
      if( !('projects' in keys) && !Array.isArray(newResume.projects) ){
        return false;
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
    return(
        <div className="resume-edit-panel"
          style={{top: this.props.showResumeEditor ? '0' : '-82%'}}>
          <button onClick={this.onClickCloseResume}>X</button>
          <label htmlFor="resume-js-editor" >Resume Editor</label>
          <AceEditor
            mode= "json"
            theme="tomorrow"
            name="resume-js-editor"
            onChange={this.onEditorChange}
            value={JSON.stringify(this.props.resume, null, '\t')}
            height="90%"
            width="100%"
            wrapEnabled={true}
            enableBasicAutocompletion={true}
            enableLiveAutocompletion={true}
            showLineNumver={true}
            showPrintMargin={false}
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