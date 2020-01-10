import React from 'react'

import spinner from '../utilities/rotatingGlobe200w.webp';

const loadingStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: 'black',
  margin: '0 auto',
  marginTop: '30px',
  color: 'cyan',
  fontSize: '0.9em',
  height: '50%',
  width: '50%',
};

export default function Loading() {
  return (
    <div style={loadingStyle}>
      <img src={spinner} alt="Loading Spinner" />
      <br /><br />
      <span 
        style={
          { 
            marginTop: "70px",
            marginLeft: "-50px" 
          }
        }>Loading....</span><br />
    </div>
  );
}
