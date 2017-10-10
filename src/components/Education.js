import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Education extends Component{
  render() {
    const educations = this.props.education.map( (ed, index) => {
      return(
        <li key={index}>
          <h3>{ed.site}</h3>
          <h3>{`${ed.dateFrom}-${ed.dateTo}`}</h3>
          <em>{ed.studyDegree}</em>
        </li>
      )
    });
    return (
      <section className='resume-education'>
        <h2>Education</h2>
        <hr/>
        <ul>{educations}</ul>
      </section>
    );
  }
}

Education.defaultProps = {
  education: []
}

const mapStateToProps = state => ({
  education: state.resume.education
});

const ConnectedEducation = connect(mapStateToProps)(Education);

export default ConnectedEducation;