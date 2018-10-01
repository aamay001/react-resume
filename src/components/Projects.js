import React, {Component} from 'react';
import {connect} from 'react-redux';

export class Projects extends Component{
  render(){
    const projs = this.props.projects.map( (project, index) => {
      return (
        <li key={index}>
        <h3>{project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a> : project.name }</h3>
        <h3>{`${project.dateFrom}-${project.dateTo}`}</h3>
        <em>{project.teamBrief}</em>
        <ul>
          {
            project.details.map( (detail, detailIndex) => {
              return <li key={detailIndex}>{detail.search('http') > -1 ? <a href={detail} target="_blank" rel="noopener noreferrer">{detail}</a> : detail }</li>
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

Projects.defaultProps = {
  projects: []
}

const mapStateToProps = state => ({
  projects: state.resume.projects
});

const ConnectedProjects = connect(mapStateToProps)(Projects);

export default ConnectedProjects;