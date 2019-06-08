/* global location */
/* eslint-disable no-restricted-globals */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Label,
  Icon,
  Button,
  Confirm,
} from 'semantic-ui-react';
import ItemToggleButton from './ItemToggleButton';
import { toggleAutoSave } from '../../../actions/app.actions';
import ls from '../../../helpers/localstorage.helper';

const LocalStorageToggle = ({ dispatch, status }) => {
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
        onToggle={() => dispatch(toggleAutoSave())}
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
};

LocalStorageToggle.defaultProps = {
  dispatch: () => {},
  status: false,
};

LocalStorageToggle.propTypes = {
  dispatch: PropTypes.func,
  status: PropTypes.bool,
};

export default LocalStorageToggle;
