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
import { EDITOR_STATUS, getStatusColor } from '../../helpers/tools.helper';

import 'brace/mode/json';
import 'brace/theme/tomorrow';
import 'brace/ext/language_tools';

class CodeEditor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorValue: JSON.stringify(props.resume, null, '\t'),
    };
    this.onResumeChange = this.onResumeChange.bind(this);
  }

  onResumeChange(data) {
    const { dispatch } = this.props;
    this.setState({
      editorValue: data,
    });
    dispatch(updateResumeEditorStatus(EDITOR_STATUS.VALIDATING));
    const updatedResume = isValidJSON(data);
    if (updatedResume) {
      dispatch(updateResume(updatedResume));
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
    } = this.props;
    const { editorValue } = this.state;
    const statusColor = getStatusColor(statusMessage);
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
          backgroundColor: 'white',
        }}
      >
        <SidebarCloseButton
          title="Code Editor"
          titleIcon="edit"
          statusMessage={statusMessage}
          statusMessageColor={statusColor}
          closeToolbar={() => dispatch(toggleEditor())}
          toolbarOpen={editorOpen}
          backgroundColor="white"
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
            style={{ height: '100%', width: '100%' }}
            color={statusColor}
          >
            <AceEditor
              mode="json"
              theme="tomorrow"
              name="json-resume-editor"
              enableBasicAutocompletion={false}
              enableLiveAutocompletion={false}
              value={editorValue}
              showLineNumber
              showPrintMargin={false}
              tabSize={3}
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
};

CodeEditor.propTypes = {
  dispatch: PropTypes.func,
  editorOpen: PropTypes.bool,
  resume: PropTypes.shape({}),
  statusMessage: PropTypes.string,
};

const mapStateToProps = state => ({
  editorOpen: state.app.editorOpen,
  resume: state.resume,
  statusMessage: state.tools.editorStatus,
});

export default connect(mapStateToProps)(CodeEditor);
