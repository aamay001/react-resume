import React, {Component} from 'react';
import {connect} from 'react-redux';
import SideBar from './tools/SideBar';

import '../styles/SideBar.css';
import '../styles/OptionStyle.css'

export class ResumeTools extends Component {
  render() {
    return (
      <div className="resume-tools" style={{'fontFamily': 'Roboto, sans-serif'}}>
        <aside>
          <SideBar/>
        </aside>
      </div>
    );
  }
}

const ConnectedReumseTools = connect()(ResumeTools);
export default ConnectedReumseTools;