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
import ItemToggleButton from './ItemToggleButton';
import { toggleAutoSave, updateResume } from '../../../actions/app.actions';
import ls from '../../../helpers/localstorage.helper';

function LocalStorageToggle({ dispatch, status, resume }) {
  const [confirm, setConfirm] = useState(false);
  return (
    <div className="json-resume-tool">
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
        onCancel={() => setConfirm(false)}
        centered={false}
        onConfirm={() => {
          setConfirm(false);
          ls.clear();
          location.reload();
        }}
        content="Are you sure you want to clear everything in local storage? This cannot be undone!"
      />
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
  resume: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  resume: state.resume,
});

export default connect(mapStateToProps)(LocalStorageToggle);
