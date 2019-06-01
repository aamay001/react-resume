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
} from '../Tools';
import { toggleToolbar } from '../../actions/app.actions';

const Toolbar = ({ toolbarOpen, dispatch, resume }) => (
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
      <PrintButton />
      <EditorButton dispatch={dispatch} />
      <FontSelector />
      <VisibilityChanger />
      <OrderChanger />
      <DownloadButton resume={resume} />
    </Sidebar>
  </aside>
);

Toolbar.defaultProps = {
  dispatch: () => {},
  toolbarOpen: false,
  resume: {},
};

Toolbar.propTypes = {
  dispatch: PropTypes.func,
  toolbarOpen: PropTypes.bool,
  resume: PropTypes.shape({}),
};

const mapStateToProps = state => ({
  toolbarOpen: state.app.toolbarOpen,
  resume: state.resume,
});

export default connect(mapStateToProps)(Toolbar);
