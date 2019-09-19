import React from 'react'

export default function Error(props) {
  return (
    <div className="content-area">
      <p>
        <span style={{ color: 'red', fontSize: '1.9em' }}>Error: </span>
        {props.error.message} {console.log(props.error.message)} </p>
    </div>
  )
}
