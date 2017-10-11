import React from 'react'

export default function PrintButton(props){
  return (
    <div className="resume-tools-print-button">
    <label>Paperify</label>
    <button onClick={ () => window.print()}>Print</button>
  </div>
  );
}