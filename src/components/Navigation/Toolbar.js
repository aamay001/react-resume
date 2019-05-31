import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Sidebar } from 'semantic-ui-react';
import { SidebarCloseButton, ToolbarHeader } from '.';
import {
  EditorButton,
  PrintButton,
  VisibilityChanger,
} from '../Tools';
import { toggleToolbar } from '../../actions/app.actions';

const Toolbar = ({ toolbarOpen, dispatch }) => (
  <aside>
    <Sidebar
      animation="scale down"
      visible={toolbarOpen}
      width="wide"
      onHide={() => toolbarOpen && dispatch(toggleToolbar())}
      style={{ overflowX: 'hidden', backgroundColor: '#fcfcfc' }}
    >
      <SidebarCloseButton
        closeToolbar={() => dispatch(toggleToolbar())}
        toolbarOpen={toolbarOpen}
      />
      <ToolbarHeader />
      <PrintButton />
      <EditorButton dispatch={dispatch} />
      <VisibilityChanger />
    </Sidebar>
  </aside>
);

Toolbar.defaultProps = {
  dispatch: () => {},
  toolbarOpen: false,
};

Toolbar.propTypes = {
  dispatch: PropTypes.func,
  toolbarOpen: PropTypes.bool,
};

const mapStateToProps = state => ({
  toolbarOpen: state.app.toolbarOpen,
});

export default connect(mapStateToProps)(Toolbar);
