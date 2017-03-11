import React, { Component } from 'react';

class BuildingInfo extends Component {
  render() {
    return (
      <div className='BuildingInfo'>
        <h2>위치보기</h2>
        <div className='infobox'>
          <div id='map'></div>
        </div>
      </div>
    )
  }
}

export default BuildingInfo;
