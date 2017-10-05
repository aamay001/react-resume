import React, {Component} from 'react';
import {connect} from 'react-redux';
import './SideBar';

export class SideBar extends Component {
  render() {
    return(
      <h1>Side Bar</h1>
    );
  }
}

const mapStateToProps = state => ({

});

const ConnectedSideBar = connect(mapStateToProps)(SideBar);
export default ConnectedSideBar;