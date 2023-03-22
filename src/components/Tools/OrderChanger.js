import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Label, Icon } from 'semantic-ui-react';
import Sortable from 'sortablejs';
import { changeResumeOrder } from '../../actions/app.actions';
import {
  EDUCATION,
  TECH_SKILLS,
  PROJECTS,
  EXPERIENCE,
  CERTIFICATION,
  PROFESSIONAL_SUMMARY,
} from '../../helpers/resume.helper';

class OrderChanger extends Component {
  constructor(props) {
    super(props);
    this.createSortableList = this.createSortableList.bind(this);
    this.onOrderChange = this.onOrderChange.bind(this);
    this.getResumeOrderHandles = this.getResumeOrderHandles.bind(this);
  }

  componentDidMount() {
    this.createSortableList();
  }

  onOrderChange(e) {
    const { dispatch } = this.props;
    const newResumeOrder = Array.from(e.to.children)
      .map((item) => parseInt(item.getAttribute('data-id'), 10));
    dispatch(changeResumeOrder(newResumeOrder));
  }

  getResumeOrderHandles() {
    const { order } = this.props;
    let resumeSection = '';
    return order.map((item) => {
      switch (item) {
        case PROFESSIONAL_SUMMARY:
          resumeSection = 'Proessional Summary';
          break;
        case TECH_SKILLS:
          resumeSection = 'Technical Skills';
          break;
        case EXPERIENCE:
          resumeSection = 'Experience';
          break;
        case PROJECTS:
          resumeSection = 'Projects';
          break;
        case EDUCATION:
          resumeSection = 'Education';
          break;
        case CERTIFICATION:
          resumeSection = 'Certifications';
          break;
        default:
          resumeSection = 'Unknown Section';
          break;
      }
      return (
        <li key={resumeSection} data-id={item}>
          <Button
            content={resumeSection}
            icon="bars"
            labelPosition="right"
            size="large"
            fluid
            style={{
              display: 'block',
              backgroundColor: 'white',
              color: 'black',
            }}
          />
        </li>
      );
    });
  }

  createSortableList() {
    Sortable.create(this.orderList, {
      animation: 100,
      dataIdAttr: 'data-id',
      sort: true,
      onUpdate: this.onOrderChange,
    });
  }

  render() {
    const currentOrder = this.getResumeOrderHandles();
    return (
      <div className="json-resume-tool">
        <Label size="big" basic>
          <Icon name="ordered list" />
          Order
        </Label>
        <ul
          id="#resume-order-changer"
          ref={(list) => { this.orderList = list; }}
        >
          {currentOrder}
        </ul>
      </div>
    );
  }
}

OrderChanger.defaultProps = {
  dispatch: () => {},
  order: [],
};

OrderChanger.propTypes = {
  dispatch: PropTypes.func,
  order: PropTypes.arrayOf(PropTypes.number),
};

const mapStateToProps = (state) => ({
  order: state.tools.order,
});

export default connect(mapStateToProps)(OrderChanger);
