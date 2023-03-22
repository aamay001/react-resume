import React from 'react';
import PropTypes from 'prop-types';
import { Label, Icon, Button } from 'semantic-ui-react';

function DownloadButton({ resume }) {
  return (
    <div className="json-resume-tool">
      <Label size="big" basic>
        <Icon name="download" />
        Download
      </Label>
      <Button
        content="JSON File"
        as="a"
        download="resume.json"
        href={`data:text/plain;charset=utf-8,${encodeURIComponent(JSON.stringify(resume, null, '\t'))}`}
        size="large"
        fluid
        style={{
          display: 'block',
          backgroundColor: 'white',
          color: 'black',
        }}
      />
    </div>
  );
}

DownloadButton.defaultProps = {
  resume: {},
};

DownloadButton.propTypes = {
  resume: PropTypes.shape({}),
};

export default DownloadButton;
