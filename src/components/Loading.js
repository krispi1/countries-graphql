import React from 'react'
import spinner from '../utilities/rotatingGlobe200w.webp';

export const loadingStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  backgroundColor: 'black',
  margin: '0 auto',
  marginTop: '30px',
  color: 'cyan',
  fontSize: '2em',
  height: '50%',
  width: '80%',
}

export default function Loading() {
  return (
    <div style={loadingStyle}>
      <img src={spinner} alt="Loading Spinner" />
      <br /><br />
      Loading....<br />
    </div>
  )
}
