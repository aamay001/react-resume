import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { connect } from 'react-redux';
import {
  Modal,
  Icon,
  Accordion,
} from 'semantic-ui-react';
import { SidebarCloseButton } from '../Navigation';
import { ItemToggleButton } from './Buttons';
import { toggleMoreVisibility, updateResume } from '../../actions/app.actions';

const sectionHeaderMap = {
  experience: 'Experience',
  education: 'Education',
  certification: 'Certification',
  technicalSkills: 'Technical Skills',
  projects: 'Projects',
};

const itemNamePropMap = {
  experience: item => `${item.company} - ${item.position}`,
  education: item => `${item.site} - ${item.studyDegree}`,
  certification: item => item.issuedBy,
  technicalSkills: item => item.category,
  projects: item => item.name,
};


const MoreVisibilityModal = ({
  open,
  dispatch,
  resume,
  autoSave,
  darkMode,
}) => {
  const [activeAccordion, setActiveAccordion] = useState('');
  return (
    <Modal
      open={open}
      closeIcon={false}
      closeOnDimmerClick={false}
      closeOnEscape={false}
      closeOnDocumentClick={false}
      centered={false}
      dimmer="inverted"
      className={classNames({ darkModal: darkMode })}
    >
      <Modal.Header style={{ padding: 0 }}>
        <SidebarCloseButton
          title="More Visibility"
          titleIcon="eye"
          closeToolbar={() => dispatch(toggleMoreVisibility())}
          toolbarOpen={open}
          backgroundColor="white"
        />
      </Modal.Header>
      <Modal.Content>
        <p>Use these toggle to enable and disable individual items in your resume.</p>
        <Accordion fluid styled>
          {Object.keys(sectionHeaderMap).map(section => (
            <Fragment key={section}>
              <Accordion.Title
                active={activeAccordion === section}
                index={0}
                onClick={() => {
                  if (activeAccordion !== section) {
                    setActiveAccordion(section);
                  } else {
                    setActiveAccordion('');
                  }
                }}
              >
                <Icon name="dropdown" />
                {sectionHeaderMap[section]}
              </Accordion.Title>
              <Accordion.Content active={activeAccordion === section}>
                <div
                  className="json-resume-tool"
                  style={{ marginTop: 0, padding: 0 }}
                >
                  {resume[section].map((sectionItem, itemIndex) => (
                    <ItemToggleButton
                      key={itemNamePropMap[section](sectionItem)}
                      label={itemNamePropMap[section](sectionItem)}
                      status={sectionItem.isVisible !== false}
                      onToggle={() => {
                        const updatedResume = resume;
                        updatedResume[section][itemIndex].isVisible =
                          !(sectionItem.isVisible !== false);
                        dispatch(updateResume(updatedResume, autoSave));
                      }}
                    />
                  ))}
                </div>
              </Accordion.Content>
            </Fragment>
          ))}
        </Accordion>
      </Modal.Content>
    </Modal>
  );
};


MoreVisibilityModal.propTypes = {
  dispatch: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  resume: PropTypes.shape({}).isRequired,
  autoSave: PropTypes.bool.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  open: state.app.moreVisibilityOpen,
  resume: state.resume,
  autoSave: state.tools.autoSave,
  darkMode: state.tools.darkMode,
});

export default connect(mapStateToProps)(MoreVisibilityModal);
