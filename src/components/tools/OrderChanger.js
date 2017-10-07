import React, {Component} from 'react';
import {connect} from 'react-redux';

import {changeResumeOrder} from '../../actions';
import {
  EDUCATION,
  TECH_SKILLS,
  PROJECTS,
  EXPERIENCE
}
from './resumeOrder'

import Sortable from 'sortablejs'

export class OrderChanger extends Component {
  componentDidMount() {
    this.createSortableList();
  }

  createSortableList() {
    Sortable.create(this.orderList, {
      animation: 100,
      dataIdAttr: 'data-id',
      sort: true,
      onSort: this.onOrderChange
    });
  }

  shouldComponentUpdate(nextProps,nextState){
    return nextProps === this.props;
  }

  onOrderChange = e => {
    const newResumeOrder = Array.from(e.to.children).map( item => {
      return parseInt(item.getAttribute('data-id'), 10);
    });
    this.props.dispatch(changeResumeOrder(newResumeOrder));
  }

  getResumeOrderHandles(){
    let resumeSection = '';
    return this.props.resumeOrder.map( (item, index) => {
      switch(item) {
        case EDUCATION:
          resumeSection = 'Education'
          break;
        case TECH_SKILLS:
          resumeSection = 'Technical Skills'
          break;
        case PROJECTS:
          resumeSection = 'Projects'
          break;
        case EXPERIENCE:
          resumeSection = 'Experience'
          break;
        default:
          resumeSection = 'Unknown Section'
          break;
      }
      return (
        <li key={index} data-id={item}>
          <div>
            <span className="drag-handle">☰</span>
            <span className="section-name">{resumeSection}</span>
          </div>
        </li>
      );
    });
  }

  render() {
    const currentOrder = this.getResumeOrderHandles();
    return (
      <div className="resume-tools-order-changer">
        <label htmlFor="resume-order-changer">Resume Order</label>
        <ul id="#resume-order-changer" ref={list => {this.orderList = list;}} >
          {currentOrder}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  resumeOrder: state.tools.resumeOrder
});

const ConnectedOrderChanger = connect(mapStateToProps)(OrderChanger);
export default ConnectedOrderChanger;