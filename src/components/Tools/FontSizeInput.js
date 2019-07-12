import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Label, Icon, Button } from 'semantic-ui-react';
import { changeFontSize } from '../../actions/app.actions';

class FontSizeInput extends Component {
  constructor(props) {
    super(props);
    this.handleFontSizeChange = this.handleFontSizeChange.bind(this);
  }

  handleFontSizeChange(e) {
    const { dispatch } = this.props;
    const fontSize = parseInt(e.target.value, 10) || 0;
    dispatch(changeFontSize(fontSize));
  }

  render() {
    const { fontSize } = this.props;
    return (
      <div className="json-resume-tool font-selector">
        <Label size="big" basic>
          <Icon name="font" />
          FontSize
        </Label>

        <Button
          size="small"
          fluid
          style={{
            display: 'block',
            backgroundColor: 'white',
            color: 'black',
          }}
        >
          +
        </Button>

        <input
          onChange={this.handleFontSizeChange}
          value={fontSize}
        />
        <Button
          size="small"
          fluid
          style={{
            display: 'block',
            backgroundColor: 'white',
            color: 'black',
          }}
        >
        -
        </Button>

      </div>
    );
  }
}

FontSizeInput.defaultProps = {
  dispatch: () => {},
  fontSize: 16,
};

FontSizeInput.propTypes = {
  dispatch: PropTypes.func,
  fontSize: PropTypes.string,
};

const mapStateToProps = state => ({
  fontSize: state.tools.fontSize,
});

export default connect(mapStateToProps)(FontSizeInput);
