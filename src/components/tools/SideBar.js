import React, {Component} from 'react';
import {connect} from 'react-redux';
import './SideBar.css';


export class SideBar extends Component {
  render() {
    return(
      <div className="resume-tools-bar" style={this.props.showTools ? {width: "20%"} : {}}>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showTools: state.showTools
});

const ConnectedSideBar = connect(mapStateToProps)(SideBar);
export default ConnectedSideBar;