import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Sidebar } from 'semantic-ui-react';
import { SidebarCloseButton, ToolbarHeader } from '.';
import {
  EditorButton,
  PrintButton,
  VisibilityChanger,
  FontSelector,
  OrderChanger,
  DownloadButton,
  LoadFromFileButton,
  SaveToCloudButtons,
  LocalStorageToggle,
  PaperSize,
} from '../Tools';
import { toggleToolbar } from '../../actions/app.actions';

const Toolbar = ({
  toolbarOpen,
  dispatch,
  resume,
  autoSave,
}) => (
  <aside>
    <Sidebar
      animation="scale down"
      visible={toolbarOpen}
      width="wide"
      onHide={() => toolbarOpen && dispatch(toggleToolbar())}
      style={{ overflowX: 'hidden', backgroundColor: '#fcfcfc', paddingBottom: 25 }}
    >
      <SidebarCloseButton
        closeToolbar={() => dispatch(toggleToolbar())}
        toolbarOpen={toolbarOpen}
      />
      <ToolbarHeader />
      <SaveToCloudButtons />
      <EditorButton dispatch={dispatch} />
      <FontSelector />
      <VisibilityChanger />
      <OrderChanger />
      <PrintButton />
      <DownloadButton resume={resume} />
      <LoadFromFileButton
        dispatch={dispatch}
        autoSave={autoSave}
      />
      <PaperSize />
      <LocalStorageToggle
        dispatch={dispatch}
        status={autoSave}
      />
    </Sidebar>
  </aside>
);

Toolbar.defaultProps = {
  dispatch: () => {},
  toolbarOpen: false,
  resume: {},
  autoSave: false,
};

Toolbar.propTypes = {
  dispatch: PropTypes.func,
  toolbarOpen: PropTypes.bool,
  resume: PropTypes.shape({}),
  autoSave: PropTypes.bool,
};

const mapStateToProps = state => ({
  toolbarOpen: state.app.toolbarOpen,
  resume: state.resume,
  autoSave: state.tools.autoSave,
});

export default connect(mapStateToProps)(Toolbar);
