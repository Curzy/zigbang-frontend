import React, { Component } from 'react';
import '../styles/TopBar.css'

class TopBar extends Component {
  render() {
    return (
      <div className='TopBar'>
        <div className='button back'>
          <button></button>
        </div>
        <div className='button share'>
          <button></button>
        </div>
        <div className='button like'>
          <button></button>
        </div>
      </div>
    )
  }
}

export default TopBar;
