import React, { Component } from "react";
import { connect } from "react-redux";

import { toggleShowItem } from "../../actions";

export class VisibilityChanger extends Component {
  handleCheckBoxChange = e => {
    let item = e.target.getAttribute("data-toggle");
    this.props.dispatch(toggleShowItem(item));
  };

  render() {
    return (
      <div className="resume-tools-visibility-changer">
        <label>Visibility</label>

        <div className="check-box-container">
          <label htmlFor="address-visibility">
            <input
              id="address-visibility"
              type="checkbox"
              checked={this.props.showAddress}
              onChange={this.handleCheckBoxChange}
              data-toggle="showAddress"
            />{" "}
            Show Address
          </label>
        </div>

        <div className="check-box-container">
          <label htmlFor="email-visibility">
            <input
              id="email-visibility"
              type="checkbox"
              checked={this.props.showEmail}
              onChange={this.handleCheckBoxChange}
              data-toggle="showEmail"
            />{" "}
            Show Email
          </label>
        </div>

        <div className="check-box-container">
          <label htmlFor="phone-visibility">
            <input
              id="phone-visibility"
              type="checkbox"
              checked={this.props.showPhone}
              onChange={this.handleCheckBoxChange}
              data-toggle="showPhone"
            />{" "}
            Show Phone
          </label>
        </div>

        <div className="check-box-container">
          <label htmlFor="github-visibility">
            <input
              id="github-visibility"
              type="checkbox"
              checked={this.props.showGithub}
              onChange={this.handleCheckBoxChange}
              data-toggle="showGithub"
            />{" "}
            Show Github
          </label>
        </div>

        <div className="check-box-container">
          <label htmlFor="linkedin-visibility">
            <input
              id="linkedin-visibility"
              type="checkbox"
              checked={this.props.showLinkedIn}
              onChange={this.handleCheckBoxChange}
              data-toggle="showLinkedIn"
            />{" "}
            Show LinkedIn
          </label>
        </div>

        <div className="check-box-container">
          <label htmlFor="education-visibility">
            <input
              id="education-visibility"
              type="checkbox"
              checked={this.props.showEducation}
              onChange={this.handleCheckBoxChange}
              data-toggle="showEducation"
            />{" "}
            Show Education
          </label>
        </div>

        <div className="check-box-container">
          <label htmlFor="certification-visibility">
            <input
              id="certification-visibility"
              type="checkbox"
              checked={this.props.showCertification}
              onChange={this.handleCheckBoxChange}
              data-toggle="showCertification"
            />{" "}
            Show Certification
          </label>
        </div>

        <div className="check-box-container">
          <label htmlFor="techskills-visibility">
            <input
              id="techskills-visibility"
              type="checkbox"
              checked={this.props.showTechSkills}
              onChange={this.handleCheckBoxChange}
              data-toggle="showTechSkills"
            />{" "}
            Show Technical Skills
          </label>
        </div>

        <div className="check-box-container">
          <label htmlFor="projects-visibility">
            <input
              id="projects-visibility"
              type="checkbox"
              checked={this.props.showProjects}
              onChange={this.handleCheckBoxChange}
              data-toggle="showProjects"
            />{" "}
            Show Projects
          </label>
        </div>

        <div className="check-box-container">
          <label htmlFor="experience-visibility">
            <input
              id="experience-visibility"
              type="checkbox"
              checked={this.props.showExperience}
              onChange={this.handleCheckBoxChange}
              data-toggle="showExperience"
            />{" "}
            Show Experience
          </label>
        </div>

        <div className="check-box-container">
          <label htmlFor="website-visibility">
            <input
              id="website-visibility"
              type="checkbox"
              checked={this.props.showWebsite}
              onChange={this.handleCheckBoxChange}
              data-toggle="showWebsite"
            />{" "}
            Show Website
          </label>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showAddress: state.tools.showAddress,
  showEmail: state.tools.showEmail,
  showPhone: state.tools.showPhone,
  showGithub: state.tools.showGithub,
  showTechSkills: state.tools.showTechSkills,
  showProjects: state.tools.showProjects,
  showEducation: state.tools.showEducation,
  showCertification: state.tools.showCertification,
  showExperience: state.tools.showExperience,
  showLinkedIn: state.tools.showLinkedIn,
  showWebsite: state.tools.showWebsite
});

const ConnectedVisibilityChanger = connect(mapStateToProps)(VisibilityChanger);
export default ConnectedVisibilityChanger;
