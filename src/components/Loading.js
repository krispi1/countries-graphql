import React from 'react'

import spinner from '../utilities/tiny_loader.gif';

const loadingStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  top: '50%',
  left: '50%',
};

export default function Loading() {
  return (
    <div style={loadingStyle}>
      <img src={spinner} alt="Loading Spinner" />
    </div>
  );
}
