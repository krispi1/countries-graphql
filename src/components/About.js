import React from 'react';
import { Link } from 'react-router-dom';
import { style } from '../utilities/ButtonLinks';

const aboutStyle = {
  developer: {
    backgroundColor: '#fbe8ff'
  },
  project: {
    backgroundColor: '#bfbfbf'
  },
  devLink: {
    fontSize: '1.4em'
  }, 
}

function About() {
  return (
    <div className="content-area">
      <h3>About Scoutbase Frontend Siele</h3>
      <p>Scoutbase Frontend Siele is an assessment for 
      <a href="https://scoutbase.com" target="_blank" rel="noopener noreferrer"> Scoutbase</a></p>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Item</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style={aboutStyle.developer}>
            <td>Developer</td>
            <td style={aboutStyle.devLink}>
              <a href="https://github.com/krispi1" target="_blank" rel="noopener noreferrer">
                  GEOFFREY SIELE</a>
            </td>
          </tr>
          <tr style={aboutStyle.developer}>
            <td>Developer Contacts</td>
            <td>
              +254723921526, sielekrisp@gmail.com
            </td>
          </tr>
          <tr style={aboutStyle.developer}>
            <td>Developer Toolbelt</td>
            <td>
              Core JavaScript, Angular, React, HTML5, CSS3
            </td>
          </tr>
          <tr style={aboutStyle.developer}>
            <td>Currently learning</td>
            <td>
              Node.js, Express, RxJS, Redux, Styled-components etc..
            </td>
          </tr>
          <tr style={aboutStyle.developer}>
            <td>Availability for Hire</td>
            <td>
              IMMEDIATE
            </td>
          </tr>
          <tr style={aboutStyle.developer}>
            <td>Country, City, Timezone</td>
            <td>Kenya, Nairobi, UTC+3</td>
          </tr>
          <tr style={aboutStyle.developer}>
            <td>Attitude</td>
            <td>Front End Developer with a desire to serve well, 
              work with others, share knowledge, and learn more skills 
              including backend, AI, ML, IoT, etc..
            </td>
          </tr>
          <tr style={aboutStyle.project}>
            <td>Tools Used</td>
            <td>JavaScript, React, CSS, HTML, Bootstrap</td>
          </tr>
          <tr style={aboutStyle.project}>
            <td>Data Handling</td>
            <td>apollo-boost, @apollo/react-hooks, graphql</td>
          </tr>
          <tr style={aboutStyle.project}>
            <td>Data Sources</td>
            <td>
              <a href="https://countries.trevorblades.com/" target="_blank">Trevorblades</a>,
              <a href="https://www.countryflags.io/" target="_blank"> Countryflags</a>
              </td>
          </tr>
        </tbody>
      </table>
      <Link to="/">
        <button style={style.buttonStyle}>GO HOME</button>
      </Link>
      <Link to="/countries">
        <button style={style.buttonStyle}>COUNTRIES</button>
      </Link>    
    </div>
  );

} // end About()

export default About;