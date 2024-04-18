import React, { createRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Label, Icon, Button } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import { updateResume } from '../../../actions/app.actions';

function LoadFromFileButton({ dispatch, autoSave }) {
  // eslint-disable-next-line prefer-const
  let fileRef = createRef();

  const onFileChange = useCallback(({ target }) => {
    const file = target.files && target.files.length && target.files[0];

    const onFileError = () => {
      toast('😟 Something went wrong while loading from file!', { autoClose: false });
    };

    const onFileRead = ({ target: t1 }) => {
      const { result } = t1;

      if (!result) {
        toast('😟 No data loaded from file!', { autoClose: false });
        return;
      }

      try {
        const resume = JSON.parse(result);

        dispatch(updateResume(resume, autoSave));

        toast('🙌 Resume loaded from file!');
      } catch (e) {
        toast('😟 Could not parse data file!', { autoClose: false });
      }
    };

    const resetFileRef = () => {
      fileRef = null;
      fileRef = createRef();
    };

    const readFile = (f1) => {
      const fileReader = new FileReader();
      fileReader.onload = onFileRead;
      fileReader.onerror = onFileError;
      fileReader.onloadend = resetFileRef;
      fileReader.readAsText(f1);
    };

    if (file) {
      readFile(file);
    }
  }, [fileRef]);

  return (
    <div className="json-resume-tool">
      <Label size="big" basic>
        <Icon name="upload" />
        Load From File
      </Label>
      <Button
        content="Select File"
        onClick={() => fileRef.current.click()}
        size="large"
        fluid
        style={{
          display: 'block',
          backgroundColor: 'white',
          color: 'black',
        }}
      />
      <input
        ref={fileRef}
        type="file"
        hidden
        onChange={onFileChange}
      />
    </div>
  );
}

LoadFromFileButton.defaultProps = {
  dispatch: () => {},
  autoSave: false,
};

LoadFromFileButton.propTypes = {
  dispatch: PropTypes.func,
  autoSave: PropTypes.bool,
};

export default LoadFromFileButton;
