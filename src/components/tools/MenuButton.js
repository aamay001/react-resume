import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../../styles/MenuButton.css'

import {toggleTools} from '../../actions';

export class MenuButton extends Component {
  onMenuButtonClick = e => {
    this.props.dispatch(toggleTools());
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
  showTools: state.tools.showTools
})

const ConnectedMenuButton = connect(mapStateToProps)(MenuButton);
export default ConnectedMenuButton;