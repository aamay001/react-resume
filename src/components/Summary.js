import React, {Component} from 'react';
import {connect} from 'react-redux'

export class Summary extends Component{
  render(){
    const summary = this.props.summary
    
    return (
      <section className='resume-summary'>
        <div>{summary}</div>
      </section>
    );
  }
}

Summary.defaultProps = {
  summary: '',
}

const mapStateToProps = state => ({
  summary: state.resume.summary,
});

export default connect(mapStateToProps)(Summary);