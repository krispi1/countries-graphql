import React from 'react'

import spinner from '../utilities/fidget-spinner-loading.gif';

const loadingStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  margin: '0 auto'
};

export default function Loading() {
  return (
    <div style={loadingStyle}>
      <img src={spinner} alt="Loading Spinner" />
    </div>
  );
}
