import React, {Component} from 'react';
import {conenct} from 'react-redux'
import font from './fonts'

export class FontSelector extends Component {
    handleOnSubmit(){
        this.props.handleSubmit();
    }

    render() {
        return (
            <H1>Tools</H1>
        )
    }
}

const mapStateToProps = state => ({
    selectedFont: state.font
});

const ConnectedFontSelector = connect(mapStateToProps)(FontSelector);
export default ConnectedFontSelector;