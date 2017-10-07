import React, {Component} from 'react';
import {connect} from 'react-redux'

import {changeFont} from '../../actions';
import fonts from './fonts'

export class FontSelector extends Component {
    handleFontChange = e => {
        const selection = e.target.selectedIndex;
        const selectedFont = fonts[selection].font;
        this.props.dispatch(changeFont(selectedFont));
    }

    render() {
        const fontsList = fonts.sort( (f1, f2) => {
            return f1.name < f2.name ? -1 : f1.name > f2.name ? 1 :  0;
        }).map( ( font, index ) => {
            return <option value={font.font} key={index}>{font.name}</option>;
        });
        return (
            <div id="resume-tools-font-selector">
                <form>
                    <label htmlFor="font-selector">Font</label>
                    <select id="font-selector" onChange={this.handleFontChange}>
                        {fontsList}
                    </select>
                </form>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    selectedFont : state.tools.font
});

const ConnectedFontSelector = connect(mapStateToProps)(FontSelector);
export default ConnectedFontSelector;