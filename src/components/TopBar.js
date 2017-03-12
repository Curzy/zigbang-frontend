import React, { Component } from 'react';
import '../styles/TopBar.css'

class TopBar extends Component {
  render() {
    return (
      <div className='TopBar'>
        <div className='float-left'>
          <div className='button-container'>
            <div className='button back'></div>
          </div>
        </div>
        <div className='float-center'>
          <div className='title'>
            {this.props.item.name}
          </div>
        </div>
        <div className='float-right'>
          <div className='button-container'>
            <div className='button like'></div>
          </div>
        </div>
        <div className='float-right'>
          <div className='button-container'>
            <div className='button share'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default TopBar;
