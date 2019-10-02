import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import { Label, Icon, Button } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import { updateResume } from '../../../actions/app.actions';

class LoadFromFileButton extends Component {
  fileRef = createRef();

  readFile(file) {
    const fileReader = new FileReader()
    
    fileReader.onload = this.onFileRead
    fileReader.onerror = this.onFileError
    fileReader.readAsText(file)
  }

  onFileChange = ({ target }) => {
    const file = target.files && target.files.length && target.files[0];
    
    if(file) {
      this.readFile(file)
    }
  }

  onFileError = () => {
    toast('😟 Something went wrong while loading from file!', { autoClose: false });
  }

  onFileRead = ({ target }) => {
    const result = target.result

    if(!result) {
      toast('😟 No data loaded from file!', { autoClose: false });
      return
    }

    try {
      const resume = JSON.parse(result)

      this.props.dispatch(updateResume(resume, this.props.autoSave));
      toast('🙌 Resume loaded from file!');
    } catch(e) {
      toast('😟 Could not parse data file!', { autoClose: false });
      return
    }
  }

  render() {
    return (
      <div className="json-resume-tool">
        <Label size="big" basic>
          <Icon name="upload" />
          Load From File
        </Label>
        <Button
          content="Select File"
          onClick={() => this.fileRef.current.click()}
          size="large"
          fluid
          style={{
            display: 'block',
            backgroundColor: 'white',
            color: 'black',
          }}
        />
        <input 
          ref={this.fileRef}
          type="file"
          hidden
          onChange={this.onFileChange}
        />
      </div>
    )
  }
};

LoadFromFileButton.defaultProps = {
  dispatch: () => {},
  autoSave: false,
};

LoadFromFileButton.propTypes = {
  dispatch: PropTypes.func,
  autoSave: PropTypes.bool,
};

export default LoadFromFileButton;
