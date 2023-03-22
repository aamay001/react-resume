import React from 'react';
import { Label, Icon, Button } from 'semantic-ui-react';

function PrintButton() {
  return (
    <div className="json-resume-tool">
      <Label size="big" basic>
        <Icon name="print" />
        Paperify
      </Label>
      <Button
        content="Print"
        size="large"
        fluid
        onClick={() => {
          // eslint-disable-next-line no-alert
          window.alert('For best print results, adjust your margins using the print dialog!');
          window.print();
        }}
        style={{
          display: 'block',
          backgroundColor: 'white',
          color: 'black',
        }}
      />
    </div>
  );
}

export default PrintButton;
