import React from 'react'

export default function Error(error) {
  return (
    <div>
      <p>
        <span style={{ color: 'red' }}>Error: </span>
        ${error.message} {console.log(error)} </p>;
    </div>
  )
}
