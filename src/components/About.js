import React from 'react';
import { Link } from 'react-router-dom';

import { style } from '../utilities/ButtonLinks';

const aboutStyle = {
  project: {
    backgroundColor: '#bfbfbf'
  }
}

function About() {
  return (
    <div className="content-area">
      <h3>About Countries GraphQL</h3>
      <p>A demo of how to consume data on a GraphQL backend</p>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Item</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style={aboutStyle.project}>
            <td>Tools Used</td>
            <td>JavaScript, React, CSS, HTML, Bootstrap, GraphQL</td>
          </tr>
          <tr style={aboutStyle.project}>
            <td>Data Handling</td>
            <td>apollo-boost, @apollo/react-hooks, graphql</td>
          </tr>
          <tr style={aboutStyle.project}>
            <td>Data Sources</td>
            <td>
              <a href="https://countries.trevorblades.com/" target="_blank" rel="noopener noreferrer">Trevorblades</a>,
              <a href="https://www.countryflags.io/" target="_blank" rel="noopener noreferrer"> Countryflags</a>
              </td>
          </tr>
        </tbody>
      </table>
      <Link to="/">
        <button style={style.buttonStyle}>HOME</button>
      </Link>
      <Link to="/countries">
        <button style={style.buttonStyle}>COUNTRIES</button>
      </Link>    
    </div>

  ); // return

} // About

export default About;
