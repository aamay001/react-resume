/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Sidebar, Segment } from 'semantic-ui-react';
import AceEditor from 'react-ace';
import { SidebarCloseButton } from '../Navigation';
import {
  toggleEditor,
  updateResume,
  updateResumeEditorStatus,
} from '../../actions/app.actions';
import { isValidJSON } from '../../helpers/resume.helper';
import { EDITOR_STATUS, getStatusColor, getDarkStatusColor } from '../../helpers/tools.helper';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-tomorrow_night_bright';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/ext-language_tools';

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorValue: JSON.stringify(props.resume, null, '\t'),
    };
    this.onResumeChange = this.onResumeChange.bind(this);
  }

  componentDidUpdate() {
    const { editorValue } = this.state;
    const { resume, editorOpen } = this.props;
    const resumeValue = JSON.stringify(resume, null, '\t');
    if (!editorOpen && editorValue !== resumeValue) {
      // eslint-disable-next-line
      this.setState({ editorValue: resumeValue });
    }
  }

  onResumeChange(data) {
    const { dispatch, autoSave } = this.props;
    this.setState({
      editorValue: data,
    });
    dispatch(updateResumeEditorStatus(EDITOR_STATUS.VALIDATING));
    const updatedResume = isValidJSON(data);
    if (updatedResume) {
      dispatch(updateResume(updatedResume, autoSave));
      dispatch(updateResumeEditorStatus(EDITOR_STATUS.UPDATED));
      return;
    }
    dispatch(updateResumeEditorStatus(EDITOR_STATUS.ERROR));
  }

  render() {
    const {
      editorOpen,
      dispatch,
      statusMessage,
      darkMode,
    } = this.props;
    const { editorValue } = this.state;
    const statusColor = darkMode ?
      getDarkStatusColor(statusMessage) : getStatusColor(statusMessage);
    return (
      <Sidebar
        animation="scale down"
        visible={editorOpen}
        direction="right"
        width="very wide"
        style={{
          width: '100vw',
          maxWidth: '100vw',
          maxHeight: '100vh',
          overflowX: 'hidden',
          backgroundColor: darkMode ? '#2d2d2d' : '#fff',
        }}
      >
        <SidebarCloseButton
          title="Code Editor"
          titleIcon="edit"
          statusMessage={statusMessage}
          statusMessageColor={statusColor}
          closeToolbar={() => dispatch(toggleEditor())}
          toolbarOpen={editorOpen}
          backgroundColor={darkMode ? '#2d2d2d' : '#fff'}
        />
        <div
          style={{
            paddingTop: 10,
            paddingLeft: 20,
            paddingRight: 20,
            paddingBottom: 20,
            height: '92%',
            overflowX: 'hidden',
          }}
        >
          <Segment
            style={{ height: '100%', width: '100%', backgroundColor: darkMode ? '#1f1f1f' : '#fff' }}
            color={statusColor}
          >
            <AceEditor
              mode="json"
              theme={darkMode ? 'tomorrow_night_bright' : 'tomorrow'}
              name="json-resume-editor"
              enableBasicAutocompletion={false}
              enableLiveAutocompletion={false}
              value={editorValue}
              showLineNumber
              showPrintMargin={false}
              tabSize={3}
              fontSize={14}
              setOptions={{
                useWorker: false,
              }}
              onChange={this.onResumeChange}
            />
          </Segment>
        </div>
      </Sidebar>
    );
  }
}

CodeEditor.defaultProps = {
  dispatch: () => {},
  editorOpen: false,
  resume: {},
  statusMessage: EDITOR_STATUS.WAITING,
  autoSave: false,
  darkMode: false,
};

CodeEditor.propTypes = {
  dispatch: PropTypes.func,
  editorOpen: PropTypes.bool,
  resume: PropTypes.shape({}),
  statusMessage: PropTypes.string,
  autoSave: PropTypes.bool,
  darkMode: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  editorOpen: state.app.editorOpen,
  resume: state.resume,
  statusMessage: state.tools.editorStatus,
  autoSave: state.tools.autoSave,
  darkMode: state.tools.darkMode,
});

export default connect(mapStateToProps)(CodeEditor);
