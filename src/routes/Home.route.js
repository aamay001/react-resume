import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  CodeEditor,
  TopNavigation,
  Toolbar,
} from '../components';

const Home = ({ dispatch }) => (
  <>
    <TopNavigation />
    <Toolbar />
    <CodeEditor />
  </>
);

Home.defaultProps = {
  dispatch: () => {},
};

Home.propTypes = {
  dispatch: PropTypes.func,
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps)(Home);
