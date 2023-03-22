import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Label, Icon, Button } from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';
import { changeFont } from '../../actions/app.actions';
import fonts from '../../helpers/font.helper';

class FontSelector extends Component {
  constructor(props) {
    super(props);
    this.handleFontChange = this.handleFontChange.bind(this);
  }

  handleFontChange(e) {
    const { dispatch } = this.props;
    const selection = e.target.selectedIndex;
    const selectedFont = fonts[selection].font;
    dispatch(changeFont(selectedFont));
  }

  render() {
    const { selectedFont } = this.props;
    return (
      <div className="json-resume-tool font-selector">
        <Label size="big" basic>
          <Icon name="font" />
          Font
        </Label>
        <Button
          size="large"
          fluid
          style={{
            display: 'block',
            backgroundColor: 'white',
            color: 'black',
          }}
        >
          <select
            className="options-selector"
            onChange={this.handleFontChange}
            value={selectedFont}
          >
            {fonts
              .sort((f1, f2) => (f1.name < f2.name ? -1 : 0))
              .map((font) => (
                <option value={font.font} key={uuid()}>
                  {font.name}
                </option>
              ))}
          </select>
        </Button>
      </div>
    );
  }
}

FontSelector.defaultProps = {
  dispatch: () => {},
  selectedFont: '',
};

FontSelector.propTypes = {
  dispatch: PropTypes.func,
  selectedFont: PropTypes.string,
};

const mapStateToProps = (state) => ({
  selectedFont: state.tools.font,
});

export default connect(mapStateToProps)(FontSelector);
