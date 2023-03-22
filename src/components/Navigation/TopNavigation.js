import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';
import { toggleToolbar } from '../../actions/app.actions';

function TopNavigation({ dispatch, toolbarOpen }) {
  return (
    <Menu attached="top" size="massive">
      <Menu.Item
        icon={toolbarOpen ? 'x' : 'bars'}
        onClick={() => dispatch(toggleToolbar())}
        style={{
          minWidth: 60,
        }}
      />
    </Menu>
  );
}

TopNavigation.defaultProps = {
  dispatch: () => {},
  toolbarOpen: false,
};

TopNavigation.propTypes = {
  dispatch: PropTypes.func,
  toolbarOpen: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  toolbarOpen: state.app.toolbarOpen,
});

export default connect(mapStateToProps)(TopNavigation);
