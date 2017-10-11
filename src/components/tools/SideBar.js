import React, {Component} from 'react';
import {connect} from 'react-redux';

import ResumeEditorOpener from './ResumeEditorOpener';
import FontSelector from './FontSelector';
import VisibilityChanger from './VisibilityChanger';
import OrderChanger from './OrderChanger';
import MenuButton from './MenuButton';
import PrintButton from './PrintButton';

export class SideBar extends Component {
  render() {
    return(
      <div className="resume-tools-bar"
        style={this.props.showTools ? {left: "0"} : {}}
        ref={sidebar => this.sidebar = sidebar}>
        <MenuButton />
        <div className="resume-tools-container" >
          <h1 style={{
            fontFamily: 'Cutive Mono, monospace',
            fontWeight: 100,
            marginBottom: 0
          }}>
          <span role="img" aria-label="curly page emoji">📃</span>resumeJS
          </h1>
          <em style={{
            fontFamily: 'Cutive Mono, monospace',
            fontWeight: 100
          }}>code your resume!</em>
          <hr/>
          <br/>
          <h1>Tools</h1>
          <PrintButton />
          <ResumeEditorOpener />
          <FontSelector />
          <VisibilityChanger />
          <OrderChanger />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showTools: state.tools.showTools
});

const ConnectedSideBar = connect(mapStateToProps)(SideBar);
export default ConnectedSideBar;