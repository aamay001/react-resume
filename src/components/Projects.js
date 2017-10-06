import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Projects extends Component{
  render(){
    const projs = this.props.projects.map( (project, index) => {
      return (
        <li key={index}>
        <h3>{project.name}</h3>
        <h3>{`${project.dateFrom}-${project.dateTo}`}</h3>
        <em>{project.teamBrief}</em>
        <ul>
          {
            project.details.map( (detail, detailIndex) => {
              return <li key={detailIndex}>{detail}</li>
            })
          }
        </ul>
        </li>
      );
    });
    return(
      <section className="resume-projects">
        <h2>Projects</h2>
        <hr/>
        <ul>{projs}</ul>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.resume.projects
});

const ConnectedProjects = connect(mapStateToProps)(Projects);

export default ConnectedProjects;