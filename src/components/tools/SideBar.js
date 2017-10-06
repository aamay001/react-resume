import React, {Component} from 'react';
import {connect} from 'react-redux';
import './SideBar.css';


export class SideBar extends Component {
  render() {
    return(
      <div className="resume-tools-bar" style={this.props.showTools ? {left: "0"} : {}}>
        <h1>Tools</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showTools: state.tools.showTools
});

const ConnectedSideBar = connect(mapStateToProps)(SideBar);
export default ConnectedSideBar;