import React, { useState, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Label, Icon, Button, ButtonGroup, ButtonOr,
} from 'semantic-ui-react';
import { updateResume } from '../../../actions/app.actions';

const CLASSIC_LAYOUT = 0;
const MODERN_LAYOUT = 1;

function LayoutSelection({ dispatch, resume }) {
  const [layout, setLayout] = useState(CLASSIC_LAYOUT);

  const onSetClassicLayout = useCallback(() => {
    setLayout(CLASSIC_LAYOUT);
    dispatch(updateResume({
      ...resume,
      layout: CLASSIC_LAYOUT,
    }));
  }, []);

  const onSetModernLayout = useCallback(() => {
    setLayout(MODERN_LAYOUT);
    dispatch(updateResume({
      ...resume,
      layout: MODERN_LAYOUT,
    }));
  }, []);

  return (
    <div className="json-resume-tool">
      <Label size="big" basic>
        <Icon name="block layout" />
        Layout
      </Label>
      <ButtonGroup fluid style={{ maxWidth: 300 }}>
        <Button
          positive={layout === CLASSIC_LAYOUT}
          content="Classic"
          size="large"
          onClick={onSetClassicLayout}
          style={{
            display: 'block',
            backgroundColor: 'white',
            color: 'black',
          }}
        />
        <ButtonOr />
        <Button
          positive={layout === MODERN_LAYOUT}
          content="Modern"
          size="large"
          onClick={onSetModernLayout}
          style={{
            display: 'block',
            backgroundColor: 'white',
            color: 'black',
          }}
        />
      </ButtonGroup>
    </div>
  );
}

LayoutSelection.defaultProps = {
  resume: {},
  dispatch: () => {},
};

LayoutSelection.propTypes = {
  resume: PropTypes.shape({
    layout: PropTypes.number,
  }),
  dispatch: PropTypes.func,
};

const mapStateToProps = (state) => ({
  resume: state.resume,
});

export default connect(mapStateToProps)(LayoutSelection);
