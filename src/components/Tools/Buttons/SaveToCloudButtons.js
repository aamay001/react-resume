/* global gapi Dropbox OneDrive */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Label,
  Icon,
  Button,
  Modal,
  Segment,
  Dimmer,
  Loader,
  Header,
} from 'semantic-ui-react';
import axios from 'axios';
import { v4 as uuid } from 'uuid';
import { toast } from 'react-toastify';
import classNames from 'classnames';
import settings from '../../../config/settings';
import { toggleToolbar } from '../../../actions/app.actions';
import { FocusTrap } from '../../../helpers/app.helper';

const { API } = settings;
const { SAVE_KEY, FILE_KEY } = API;

const CLOUDS = {
  GOOGLE: 'gd',
  DROPBOX: 'db',
  ONEDRIVE: 'od',
};

class SaveToCloudButtons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preparingFile: false,
      fileReady: false,
      cloudSelection: undefined,
      fileSource: undefined,
      savingToCloud: false,
      saveComplete: false,
      showInfoBox: false,
    };
    this.prepareFile = this.prepareFile.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
    this.onSaveToDropBox = this.onSaveToDropBox.bind(this);
    this.onSaveToOneDrive = this.onSaveToOneDrive.bind(this);
    this.onClickInfoButton = this.onClickInfoButton.bind(this);
    this.onCloseInfoButton = this.onCloseInfoButton.bind(this);
  }

  onCloseModal() {
    this.setState({
      preparingFile: false,
      fileReady: false,
      cloudSelection: undefined,
      fileSource: undefined,
      savingToCloud: false,
      saveComplete: false,
    });
  }

  onClickInfoButton() {
    this.setState({
      showInfoBox: true,
    });
  }

  onCloseInfoButton() {
    this.setState({
      showInfoBox: false,
    });
  }

  onSaveToDropBox() {
    const { fileSource } = this.state;
    this.setState({
      savingToCloud: true,
    });
    Dropbox.save(
      fileSource,
      'resume.json',
      {
        success: () => {
          this.setState({
            savingToCloud: false,
            saveComplete: true,
          });
          this.onCloseModal();
          toast('🙌 Resume saved to Dropbox!');
        },
        cancel: () => {
          this.setState({
            savingToCloud: false,
            saveComplete: false,
          });
          this.onCloseModal();
          toast('✋ Save to Dropbox was cancelled!', { autoClose: 5000 });
        },
        error: () => {
          this.setState({
            savingToCloud: false,
            saveComplete: false,
          });
          this.onCloseModal();
          toast('😟 Something went wrong while saving to Dropbox!', { autoClose: false });
        },
      },
    );
  }

  onSaveToOneDrive() {
    const { fileSource } = this.state;
    this.setState({
      savingToCloud: true,
    });
    const odOptions = {
      clientId: 'f95c8ea4-b187-408f-9778-912af37c3b74',
      action: 'save',
      sourceUri: fileSource,
      fileName: 'resume.json',
      openInNewWindow: true,
      viewType: 'folders',
      success: () => {
        this.setState({
          savingToCloud: false,
          saveComplete: true,
        });
        this.onCloseModal();
        toast('🙌 Resume saved to OneDrive!');
      },
      cancel: () => {
        this.setState({
          savingToCloud: false,
          saveComplete: false,
        });
        this.onCloseModal();
        toast('✋ Save to OneDrive was cancelled!', { autoClose: 5000 });
      },
      error: () => {
        this.setState({
          savingToCloud: false,
          saveComplete: false,
        });
        this.onCloseModal();
        toast('😟 Something went wrong while saving to OneDrive!', { autoClose: false });
      },
    };
    OneDrive.save(odOptions);
  }

  prepareFile(selection) {
    const { resume, dispatch } = this.props;
    dispatch(toggleToolbar());
    this.setState({
      preparingFile: true,
      fileReady: false,
      cloudSelection: selection,
    });
    const dataId = uuid();
    axios.post(API.URL + API.SAVE(SAVE_KEY), { content: resume, jsId: dataId })
      .then((response) => {
        const { data } = response;
        const fileSource = API.URL + API.FILE(data, dataId, FILE_KEY);
        this.setState({
          preparingFile: false,
          fileReady: true,
          fileSource,
        }, () => {
          if (selection === CLOUDS.GOOGLE) {
            gapi.savetodrive.render(
              'gdrive-container',
              {
                src: fileSource,
                filename: 'resume.json',
                sitename: 'https://resumejs.netlify.app/',
              },
            );
          }
        });
      })
      .catch((error) => {
        this.setState({
          preparingFile: false,
          fileReady: false,
        });
        // eslint-disable-next-line no-console
        console.log(error);
        toast('⚠️ Error preparing file, Try again later!', { toastId: 'rrterrprepfile', autoClose: false });
      });
  }

  render() {
    const {
      preparingFile,
      fileReady,
      cloudSelection,
      savingToCloud,
      saveComplete,
      showInfoBox,
    } = this.state;
    const { darkMode } = this.props;
    return (
      <div className="json-resume-tool">
        <Label size="big" basic>
          <Icon name="cloud upload" />
          Cloud Save
        </Label>
        <Button
          circular
          icon="info"
          basic
          floated="right"
          title="Cloud saving information."
          onClick={() => this.onClickInfoButton()}
        />
        <div style={{ textAlign: 'center' }}>
          <Button
            color="yellow"
            icon="google drive"
            size="big"
            title="Google Drive"
            style={{ marginLeft: 5, marginRight: 5 }}
            onClick={() => this.prepareFile(CLOUDS.GOOGLE)}
          />
          <Button
            color="twitter"
            icon="dropbox"
            size="big"
            title="Dropbox"
            style={{ marginLeft: 5, marginRight: 5 }}
            onClick={() => this.prepareFile(CLOUDS.DROPBOX)}
          />
          <Button
            color="facebook"
            icon="cloud"
            size="big"
            title="OneDrive"
            style={{ marginLeft: 5, marginRight: 5 }}
            onClick={() => this.prepareFile(CLOUDS.ONEDRIVE)}
          />
        </div>
        <Modal className={classNames('save-to-cloud', { dark: darkMode })} open={preparingFile || fileReady} size="tiny" centered={false}>
          <Modal.Content>
            <Segment style={{ height: 300 }} basic clearing>
              {preparingFile &&
              <Dimmer active inverted>
                <Loader inverted content="Preparing your  resume file..." />
              </Dimmer>}
              {fileReady && cloudSelection === CLOUDS.GOOGLE &&
                <div>
                  <p>
                    Your file is ready to save to Google Drive. Click the button below to save.
                  </p>
                  <Button
                    id="gdrive-container"
                    // eslint-disable-next-line no-nested-ternary
                    icon={savingToCloud
                      ? 'spinner'
                      : saveComplete
                        ? 'check'
                        : 'google drive'}
                    loading={savingToCloud}
                    disabled={savingToCloud || saveComplete}
                    color="yellow"
                    size="big"
                    style={{ marginTop: 100 }}
                    fluid
                    content="Save to Google Drive"
                    onClick={() => this.onCloseModal()}
                  />
                </div>}
              {fileReady && cloudSelection === CLOUDS.DROPBOX &&
                <div>
                  <p>
                    Your file is ready to save to Dropbox. Click the button below to save.
                  </p>
                  <Button
                    // eslint-disable-next-line no-nested-ternary
                    icon={savingToCloud
                      ? 'spinner'
                      : saveComplete
                        ? 'check'
                        : 'dropbox'}
                    loading={savingToCloud}
                    disabled={savingToCloud || saveComplete}
                    color="twitter"
                    size="big"
                    style={{ marginTop: 100 }}
                    fluid
                    onClick={this.onSaveToDropBox}
                    content="Save to Dropbox"
                  />
                </div>}
              {fileReady && cloudSelection === CLOUDS.ONEDRIVE &&
                <div>
                  <p>
                    Your file is ready to save to OneDrive. Click the button below to save.
                  </p>
                  <Button
                    // eslint-disable-next-line no-nested-ternary
                    icon={savingToCloud
                      ? 'spinner'
                      : saveComplete
                        ? 'check'
                        : 'cloud'}
                    loading={savingToCloud}
                    disabled={savingToCloud || saveComplete}
                    color="facebook"
                    size="big"
                    style={{ marginTop: 100 }}
                    fluid
                    onClick={this.onSaveToOneDrive}
                    content="Save to OneDrive"
                  />
                </div>}
            </Segment>
          </Modal.Content>
          {fileReady &&
            <Modal.Actions>
              <Button
                content="Done"
                onClick={this.onCloseModal}
                icon="check"
                size="large"
                primary
                disabled={savingToCloud}
              />
            </Modal.Actions>}
        </Modal>
        <Modal
          className={classNames('save-to-cloud', { dark: darkMode })}
          open={showInfoBox}
          size="tiny"
          header={
            <Header>
              <Icon name="info" />
              Saving To Cloud
            </Header>
          }
          content="When saving to a cloud, your data will be temporarily stored in a MongoDB collection for 5 minutes; I use the MongDB TTL index to automatically delete the document. If you do not want your data sent over the internet, please download the JSON file instead."
          actions={[{
            key: 'ok', content: 'OK', onClick: this.onCloseInfoButton, primary: true,
          }]}
        />
        <FocusTrap enabled={preparingFile || fileReady} />
      </div>
    );
  }
}

SaveToCloudButtons.defaultProps = {
  dispatch: () => {},
  resume: {},
  darkMode: false,
};

SaveToCloudButtons.propTypes = {
  dispatch: PropTypes.func,
  resume: PropTypes.shape({}),
  darkMode: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  resume: state.resume,
  darkMode: state.tools.darkMode,
});

export default connect(mapStateToProps)(SaveToCloudButtons);
