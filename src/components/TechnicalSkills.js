import React, {Component} from 'react';
import {connect} from 'react-redux';

export class TechnicalSkills extends Component {

  render(){
    const skills = this.props.techSkills.map( (skill, index) => {
      return (
        <div key={index} className={`grid-column-${index+1}`}>
          <h3>{skill.category}</h3>
          {skill.keywords.map((kw, index) => {
              return index === skill.keywords.length - 1 ? kw : kw + ', '
            }
          )}
        </div>
      );
    });

    return (
      <section className='resume-tech-skills'>
        <h2>Technical Skills</h2>
        <hr/>
        <div className="grid-container">
          {skills}
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  techSkills: state.technicalSkills
});

const ConnectedTechnicalSkills = connect(mapStateToProps)(TechnicalSkills);

export default ConnectedTechnicalSkills;