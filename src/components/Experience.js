import React, {Component} from 'react';
import {connect} from 'react-redux'

export class Experience extends Component{
  render(){
    const experiences = this.props.experience.map( (exp, index) => {
      return (
        <li key={index}>
          <h3>{exp.company}</h3>
          <h3>{`${exp.dateFrom}-${exp.dateTo}`}</h3>
          <i>{`${exp.city}, ${exp.state}`}</i>
          <em>{exp.position}</em>
          <ul>
            <li>{exp.primaryWorkBrief}</li>
            <li>{exp.impact1}</li>
            <li>{exp.impact2}</li>
            { exp.impact3 ? <li>{exp.impact3}</li> : ''}
            { exp.impact4 ? <li>{exp.impact4}</li> : ''}
            { exp.impact5 ? <li>{exp.impact4}</li> : ''}
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
  experience: state.experience
});

export default connect(mapStateToProps)(Experience);