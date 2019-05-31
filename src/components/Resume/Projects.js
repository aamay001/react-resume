import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

const Projects = ({ projects }) => (
  <section className="resume-projects">
    <h2>Projects</h2>
    <hr />
    <ul>
      {projects.map(project => (
        <li key={uuid()}>
          <h3>
            {project.link
              ? <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
              : project.name}
          </h3>
          <h3>{`${project.dateFrom}-${project.dateTo}`}</h3>
          <em>{project.teamBrief}</em>
          <ul>
            {project.details.map(detail => (
              <li key={uuid()}>
                {detail.search('http') > -1
                  ? <a href={detail} target="_blank" rel="noopener noreferrer">{detail}</a>
                  : detail}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </section>
);

Projects.defaultProps = {
  projects: [],
};

Projects.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({})),
};

const mapStateToProps = state => ({
  projects: state.resume.projects,
});

export default connect(mapStateToProps)(Projects);
