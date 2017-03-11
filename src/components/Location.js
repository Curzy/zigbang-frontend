import React, { Component } from 'react';

class Location extends Component {
  drawMap() {
    const container = document.getElementById('map')
    const options = {
    }
  }

  constructor(props) {
    super(props)
    this.drawMap = this.drawMap.bind(this)
  }

  render() {
    return (
      <div className='Location'>
      </div>
    )
  }
}

export default Location;
