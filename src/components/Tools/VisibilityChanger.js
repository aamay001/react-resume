import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Label, Icon } from 'semantic-ui-react';
import { toggleShowItem } from '../../actions/app.actions';
import { ItemToggleButton, MoreVisibilityButton } from './Buttons';

const controlledToggleMap = {
  showTechSkills: ['showSkillLevel'],
};

class VisibilityChanger extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle(item, disabled) {
    // eslint-disable-next-line react/destructuring-assignment
    const itemOn = this.props[item];
    if (disabled) return;
    const { dispatch } = this.props;
    const children = controlledToggleMap[item] || [];

    dispatch(toggleShowItem(item));
    children.forEach((child) => {
      // eslint-disable-next-line react/destructuring-assignment
      const childOn = this.props[child];
      if (itemOn && childOn) {
        dispatch(toggleShowItem(child));
      }
    });
  }

  render() {
    const {
      showAddress,
      showEmail,
      showPhone,
      showGithub,
      showTechSkills,
      showProjects,
      showEducation,
      showCertification,
      showExperience,
      showLinkedIn,
      showWebsite,
      showSkillLevel,
      showProfessionalSummary,
      showIcon,
      darkMode,
    } = this.props;
    return (
      <div data-testid="VisibilityChanger" className="json-resume-tool">
        <Label size="big" basic>
          <Icon name="eye" />
          Visibility
        </Label>
        <ItemToggleButton onToggle={this.handleToggle} name="darkMode" label="Dark Mode" status={darkMode} />
        <ItemToggleButton onToggle={this.handleToggle} name="showEmail" label="Show Email" status={showEmail} />
        <ItemToggleButton onToggle={this.handleToggle} name="showPhone" label="Show Phone" status={showPhone} />
        <ItemToggleButton onToggle={this.handleToggle} name="showGithub" label="Show Github" status={showGithub} />
        <ItemToggleButton onToggle={this.handleToggle} name="showLinkedIn" label="Show LinkedIn" status={showLinkedIn} />
        <ItemToggleButton onToggle={this.handleToggle} name="showWebsite" label="Show Website" status={showWebsite} />
        <ItemToggleButton onToggle={this.handleToggle} name="showIcon" label="Show Icons" status={showIcon} />
        <ItemToggleButton onToggle={this.handleToggle} name="showAddress" label="Show Address" status={showAddress} />
        <ItemToggleButton onToggle={this.handleToggle} name="showProfessionalSummary" label="Show Pro. Summary" status={showProfessionalSummary} />
        <ItemToggleButton onToggle={this.handleToggle} name="showCertification" label="Show Certifications" status={showCertification} />
        <ItemToggleButton onToggle={this.handleToggle} name="showEducation" label="Show Education" status={showEducation} />
        <ItemToggleButton onToggle={this.handleToggle} name="showExperience" label="Show Experience" status={showExperience} />
        <ItemToggleButton onToggle={this.handleToggle} name="showProjects" label="Show Projects" status={showProjects} />
        <ItemToggleButton onToggle={this.handleToggle} name="showTechSkills" label="Show Technical Skills" status={showTechSkills} />
        <ItemToggleButton onToggle={this.handleToggle} name="showSkillLevel" label="Show Skill Level" status={showSkillLevel} disabled={!showTechSkills} />
        <MoreVisibilityButton />
      </div>
    );
  }
}

VisibilityChanger.defaultProps = {
  dispatch: () => { },
  showAddress: true,
  showEmail: true,
  showPhone: true,
  showGithub: true,
  showTechSkills: true,
  showSkillLevel: false,
  showProjects: true,
  showEducation: true,
  showCertification: true,
  showExperience: true,
  showProfessionalSummary: true,
  showLinkedIn: true,
  showWebsite: true,
  showIcon: true,
  darkMode: false,
};

VisibilityChanger.propTypes = {
  dispatch: PropTypes.func,
  showAddress: PropTypes.bool,
  showEmail: PropTypes.bool,
  showPhone: PropTypes.bool,
  showGithub: PropTypes.bool,
  showTechSkills: PropTypes.bool,
  showSkillLevel: PropTypes.bool,
  showProjects: PropTypes.bool,
  showEducation: PropTypes.bool,
  showCertification: PropTypes.bool,
  showExperience: PropTypes.bool,
  showLinkedIn: PropTypes.bool,
  showWebsite: PropTypes.bool,
  showProfessionalSummary: PropTypes.bool,
  showIcon: PropTypes.bool,
  darkMode: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  showAddress: state.tools.showAddress,
  showEmail: state.tools.showEmail,
  showPhone: state.tools.showPhone,
  showGithub: state.tools.showGithub,
  showTechSkills: state.tools.showTechSkills,
  showSkillLevel: state.tools.showSkillLevel,
  showProjects: state.tools.showProjects,
  showEducation: state.tools.showEducation,
  showCertification: state.tools.showCertification,
  showExperience: state.tools.showExperience,
  showLinkedIn: state.tools.showLinkedIn,
  showWebsite: state.tools.showWebsite,
  showProfessionalSummary: state.tools.showProfessionalSummary,
  showIcon: state.tools.showIcon,
  darkMode: state.tools.darkMode,
});

export default connect(mapStateToProps)(VisibilityChanger);
