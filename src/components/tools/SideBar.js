import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../styles/SideBar.css';

import FontSelector from './FontSelector';
import VisibilityChanger from './VisibilityChanger';
import OrderChanger from './OrderChanger';


export class SideBar extends Component {
  render() {
    return(
      <div className="resume-tools-bar" style={this.props.showTools ? {left: "0"} : {}}>
        <h1>Tools</h1>
        <FontSelector />
        <VisibilityChanger />
        <OrderChanger />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showTools: state.tools.showTools
});

const ConnectedSideBar = connect(mapStateToProps)(SideBar);
export default ConnectedSideBar;