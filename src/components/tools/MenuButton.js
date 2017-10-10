import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../styles/MenuButton.css'

import {toggleTools, openResumeEditor} from '../../actions';

export class MenuButton extends Component {
  onMenuButtonClick = e => {
    this.props.dispatch(toggleTools());
    if(this.props.showEditor){
      this.props.dispatch(openResumeEditor());
    }
  }

  render() {
    return (
      <div className={this.props.showTools ? 'menu-open resume-tools-menu-button' : 'resume-tools-menu-button'}
        onClick={this.onMenuButtonClick}>
        <div className={this.props.showTools ? 'tools-shown' : ''}></div>
        <div className={this.props.showTools ? 'tools-shown' : ''}></div>
        <div className={this.props.showTools ? 'tools-shown' : ''}></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showTools: state.tools.showTools,
  showEditor: state.tools.showResumeEditor
})

const ConnectedMenuButton = connect(mapStateToProps)(MenuButton);
export default ConnectedMenuButton;