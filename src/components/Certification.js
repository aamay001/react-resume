import React, { Component } from "react";
import { connect } from "react-redux";

export class Certification extends Component {
  render() {
    const certifications = this.props.certification.map((ed, index) => {
      return (
        <li key={index}>
          <h3>{ed.issuedBy}</h3>
          {ed.dateFrom ? <h3>{`${ed.dateFrom}-${ed.dateTo}`}</h3> : <h3> </h3>}
        </li>
      );
    });
    return (
      <section className="resume-certification">
        <h2>Certification</h2>
        <hr />
        <ul>{certifications}</ul>
      </section>
    );
  }
}

Certification.defaultProps = {
  certification: []
};

const mapStateToProps = state => ({
  certification: state.resume.certification
});

const ConnectedCertification = connect(mapStateToProps)(Certification);

export default ConnectedCertification;
