import React from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox } from 'semantic-ui-react';

function ItemToggleButton({
  onToggle, status, name, label, disabled,
}) {
  return (
    <Button
      size="large"
      fluid
      onClick={() => onToggle(name, disabled)}
      style={{
        display: 'block',
        backgroundColor: 'white',
        color: 'black',
      }}
      data-testid={name}
    >
      <Checkbox
        toggle
        label={label}
        style={{ float: 'left' }}
        checked={status}
      />
    </Button>
  );
}

ItemToggleButton.defaultProps = {
  onToggle: () => {},
  status: false,
  name: '',
  label: 'No Label Set',
  disabled: false,
};

ItemToggleButton.propTypes = {
  onToggle: PropTypes.func,
  status: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default ItemToggleButton;
