/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Label,
  Icon,
  Button,
  Confirm,
} from 'semantic-ui-react';
import classNames from 'classnames';
import ItemToggleButton from './ItemToggleButton';
import { toggleAutoSave, updateResume } from '../../../actions/app.actions';
import ls from '../../../helpers/localstorage.helper';

function LocalStorageToggle({
  dispatch, status, resume, darkMode,
}) {
  const [confirm, setConfirm] = useState(false);
  return (
    <div className="json-resume-tool" style={{ marginBottom: 200 }}>
      <Label size="big" basic>
        <Icon name="save outline" />
        Local Storage
      </Label>
      <Button
        circular
        icon="trash alternate outline"
        basic
        floated="right"
        title="Clear local storage."
        onClick={() => setConfirm(true)}
      />
      <ItemToggleButton
        onToggle={() => {
          dispatch(toggleAutoSave());
          if (!status) {
            dispatch(updateResume(resume, true));
          }
        }}
        status={status}
        name="autoSave"
        label="Auto Save"
      />
      <Confirm
        open={confirm}
        className={classNames('save-to-cloud', { dark: darkMode })}
        onCancel={() => setConfirm(false)}
        centered
        onConfirm={() => {
          setConfirm(false);
          ls.clear();
          location.reload();
        }}
        content="Are you sure you want to clear everything in local storage? This cannot be undone!"
      />
      <em style={{ marginTop: 5, display: 'inline-block' }}>Only turn this on if you are on a private computer!</em>
    </div>
  );
}

LocalStorageToggle.defaultProps = {
  dispatch: () => {},
  status: false,
};

LocalStorageToggle.propTypes = {
  dispatch: PropTypes.func,
  status: PropTypes.bool,
  resume: PropTypes.shape({}).isRequired,
  darkMode: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  resume: state.resume,
  darkMode: state.tools.darkMode,
});

export default connect(mapStateToProps)(LocalStorageToggle);
