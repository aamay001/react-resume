import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import uuid from "uuid/v4";

const Experience = ({ experience, font }) => (
  <section data-testid="Experience" className="resume-experience">
    <h2 style={{ fontFamily: font }}>Experience</h2>
    <hr />
    <ul>
      {experience.map(
        (exp) =>
          exp.isVisible !== false && (
            <li key={uuid()}>
              <h3 style={{ fontFamily: font }}>{exp.position}</h3>
              {exp.startDate && (
                <h3 style={{ fontFamily: font }}>
                  {`${exp.startDate}${exp.endDate ? ` - ${exp.endDate}` : ""}`}
                </h3>
              )}
              <em>{exp.company}</em>
              <p>{exp.summary}</p>
              <ul>
                {exp.highlights.map((highlight) => (
                  <li key={uuid()}>{highlight}</li>
                ))}
              </ul>
            </li>
          )
      )}
    </ul>
  </section>
);

Experience.defaultProps = {
  experience: [],
};

Experience.propTypes = {
  experience: PropTypes.arrayOf(PropTypes.shape({})),
  font: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  experience: state.resume.experience,
  font: state.tools.font,
});

export default connect(mapStateToProps)(Experience);
