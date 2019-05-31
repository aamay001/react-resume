/* globals window */
import React from 'react';
import { Label, Icon, Button } from 'semantic-ui-react';

const PrintButton = () => (
  <div className="json-resume-tool">
    <Label size="big" basic>
      <Icon name="print" />
      Paperify
    </Label>
    <Button
      content="Print"
      size="large"
      fluid
      onClick={() => window.print()}
      style={{
        display: 'block',
        backgroundColor: 'white',
        color: 'black',
      }}
    />
  </div>
);

export default PrintButton;
