import React, {Component} from 'react';
import {connect} from 'react-redux';

import MenuButton from './tools/MenuButton'
import SideBar from './tools/SideBar';

export class ResumeTools extends Component {
  render() {
    return (
      <div className="resume-tools">
        <aside>
          <MenuButton />
          <SideBar/>
        </aside>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showTools: state.showTools
});

const ConnectedReumseTools = connect(mapStateToProps)(ResumeTools);
export default ConnectedReumseTools;