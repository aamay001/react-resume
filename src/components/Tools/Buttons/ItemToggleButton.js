import React from 'react';
import PropTypes from 'prop-types';
import { Button, Checkbox } from 'semantic-ui-react';

const ItemToggleButton = ({
  onToggle,
  status,
  name,
  label,
}) => (
  <Button
    size="large"
    fluid
    onClick={() => onToggle(name)}
    style={{
      display: 'block',
      backgroundColor: 'white',
      color: 'black',
    }}
  >
    <Checkbox
      toggle
      label={label}
      style={{ float: 'left' }}
      checked={status}
    />
  </Button>
);

ItemToggleButton.defaultProps = {
  onToggle: () => {},
  status: false,
  name: '',
  label: 'No Label Set',
};

ItemToggleButton.propTypes = {
  onToggle: PropTypes.func,
  status: PropTypes.bool,
  name: PropTypes.string,
  label: PropTypes.string,
};

export default ItemToggleButton;
