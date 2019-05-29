import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';
import Board from '../components/Board';

const Home = ({ boards, dispatch }) => (
  <Grid stackable={false} columns="equal">

  </Grid>
);

Home.defaultProps = {

};

Home.propTypes = {

};

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(Home);
