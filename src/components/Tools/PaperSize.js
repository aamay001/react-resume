import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Label, Icon, Button } from 'semantic-ui-react';
import { v4 as uuid } from 'uuid';
import { changePaperSize } from '../../actions/app.actions';

export const paperSizes = [
  { tag: 'letter', name: 'Letter (8.5" x 11")' },
  { tag: 'a4', name: 'A4 (210mm × 297mm)' },
  { tag: 'legal', name: 'Legal (8.5" x 14")' },
];

class PaperSize extends Component {
  constructor(props) {
    super(props);
    this.handlePaperSizeChange = this.handlePaperSizeChange.bind(this);
  }

  handlePaperSizeChange(e) {
    const { dispatch } = this.props;
    const selection = e.target.selectedIndex;
    const paperSize = paperSizes[selection].tag;
    dispatch(changePaperSize(paperSize));
  }

  render() {
    const { paperSize } = this.props;

    return (
      <div className="json-resume-tool font-selector">
        <Label size="big" basic>
          <Icon name="file text outline" />
          Paper Size
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
            onChange={this.handlePaperSizeChange}
            value={paperSize}
          >
            {paperSizes
              .map((size) => (
                <option value={size.tag} key={uuid()}>
                  {size.name}
                </option>
              ))}
          </select>
        </Button>
      </div>
    );
  }
}

PaperSize.defaultProps = {
  dispatch: () => {},
  paperSize: '',
};

PaperSize.propTypes = {
  dispatch: PropTypes.func,
  paperSize: PropTypes.string,
};

const mapStateToProps = (state) => ({
  paperSize: state.tools.paperSize,
});

export default connect(mapStateToProps)(PaperSize);
