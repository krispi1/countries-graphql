import React from 'react'
import { Link } from 'react-router-dom';

export const style = {
  buttonStyle: {
    backgroundColor: '#aa00ff',
    color: 'white',
    margin: '0 5px',
    width: '110px',
    fontWeight: 'bold',
    marginBottom: '5px'
  }
}

export default function ButtonLinks() {
  return (
    <div>
      <Link to="/">
        <button style={style.buttonStyle}>GO HOME</button>
      </Link>
      <Link to="/countries">
        <button style={style.buttonStyle}>COUNTRIES</button>
      </Link>
      <Link to="/about">
        <button style={style.buttonStyle}>ABOUT</button>
      </Link>
    </div>
  )
}
