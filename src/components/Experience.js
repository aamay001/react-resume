import React, {Component} from 'react';
import {connect} from 'react-redux'

export class Experience extends Component{
  render(){
    const experiences = this.props.experience.map( (exp, index) => {
      return (
        <li key={index}>
          <h3>{exp.position}</h3>
          <h3>{`${exp.dateFrom}-${exp.dateTo}`}</h3>
          <em>{exp.company}, {`${exp.city}, ${exp.state}`}</em>
          <ul>
            <li>{exp.primaryWorkBrief}</li>
            { exp.impact1 ? <li>{exp.impact1}</li> : ''}
            { exp.impact2 ? <li>{exp.impact2}</li> : ''}
            { exp.impact3 ? <li>{exp.impact3}</li> : ''}
            { exp.impact4 ? <li>{exp.impact4}</li> : ''}
            { exp.impact5 ? <li>{exp.impact5}</li> : ''}
          </ul>
        </li>
      );
    });

    return (
      <section className='resume-experience'>
        <h2>Experience</h2>
        <hr />
        <ul>{experiences}</ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  experience: state.resume.experience
});

export default connect(mapStateToProps)(Experience);