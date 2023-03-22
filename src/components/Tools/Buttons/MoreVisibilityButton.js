import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { toggleMoreVisibility } from '../../../actions/app.actions';

function MoreVisibilityButton({ dispatch }) {
  return (
    <Button
      content="More Visibility"
      size="large"
      icon="arrow alternate circle right outline"
      labelPosition="right"
      fluid
      onClick={() => dispatch(toggleMoreVisibility())}
      style={{
        display: 'block',
        backgroundColor: 'white',
        color: 'black',
      }}
    />
  );
}

MoreVisibilityButton.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default connect()(MoreVisibilityButton);
