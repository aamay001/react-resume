import React, {Component} from 'react';
import {connect} from 'react-redux';
import './MenuButton.css'

import {toggleTools} from '../../actions';

export class MenuButton extends Component {
  onMenuButtonClick(e){
    this.props.dispatch(toggleTools());
  }

  render() {
    return (
      <div className="resume-tools-menu-button" onClick={() => this.onMenuButtonClick()}>
      {this.props.showTools ? <span style={{'float':'right', 'fontSize':'20px' }}>Tools</span>: ''}
        <div className={this.props.showTools ? 'tools-shown' : ''}></div>
        <div className={this.props.showTools ? 'tools-shown' : ''}></div>
        <div className={this.props.showTools ? 'tools-shown' : ''}></div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showTools: state.showTools
})

const ConnectedMenuButton = connect(mapStateToProps)(MenuButton);
export default ConnectedMenuButton;