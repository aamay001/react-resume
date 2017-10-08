import React, {Component} from 'react';
import {connect} from 'react-redux';

import MenuButton from './tools/MenuButton'
import SideBar from './tools/SideBar';

export class ResumeTools extends Component {
  render() {
    return (
      <div className="resume-tools" style={{'fontFamily': 'Roboto, sans-serif'}}>
        <aside>
          <MenuButton />
          <SideBar/>
        </aside>
      </div>
    );
  }
}

const ConnectedReumseTools = connect()(ResumeTools);
export default ConnectedReumseTools;