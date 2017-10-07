import React, {Component} from 'react';
import {connect} from 'react-redux';
import './SideBar.css';

import FontSelector from './FontSelector';
import VisibilityChanger from './VisibilityChanger';


export class SideBar extends Component {
  render() {
    return(
      <div className="resume-tools-bar" style={this.props.showTools ? {left: "0"} : {}}>
        <h1>Style Tools</h1>
        <FontSelector />
        <VisibilityChanger />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showTools: state.tools.showTools
});

const ConnectedSideBar = connect(mapStateToProps)(SideBar);
export default ConnectedSideBar;