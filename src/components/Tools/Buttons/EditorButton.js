import React from 'react';
import PropTypes from 'prop-types';
import { Label, Icon, Button } from 'semantic-ui-react';
import { toggleEditor } from '../../../actions/app.actions';

const EditorButton = ({ dispatch }) => (
  <div className="json-resume-tool">
    <Label size="big" basic>
      <Icon name="edit" />
      Stringify
    </Label>
    <Button
      content="Code Editor"
      size="large"
      fluid
      onClick={() => dispatch(toggleEditor())}
      style={{
        display: 'block',
        backgroundColor: 'white',
        color: 'black',
      }}
    />
  </div>
);

EditorButton.defaultProps = {
  dispatch: () => {},
};

EditorButton.propTypes = {
  dispatch: PropTypes.func,
};

export default EditorButton;
