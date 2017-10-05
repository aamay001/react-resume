import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import font from './fonts'

export class FontSelector extends Component {
    handleOnSubmit(){
        this.props.handleSubmit();
    }

    render() {
        return (
            <form onSubmit={handleSubmit}>
                
            </form>
        );
    }
}

const mapStateToProps = state => ({
    font: state.font
});

const ConnectedFontSelector = reduxForm({
    form: 'font-selector'
})(FontSelector);
export default ConnectedFontSelector;