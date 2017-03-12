import React, { Component } from 'react';

class Location extends Component {
  componentDidmount() {
    const daum = window.daum;
    const container = document.getElementById('map');
    const options = {
      center: new daum.maps.LatLng(33.450701, 126.570667),
      level: 3
    };

    new daum.maps.Map(container, options);
  }

  render() {
    console.log(window.daum);
    return (
      <div className='Location'>
        <h2>위치보기</h2>
        <div className='infobox'>
          <div id='map' style={{ width: 684 + 'px', height: 404 + 'px' }}></div>
        </div>
      </div>
    )
  }
}

export default Location
