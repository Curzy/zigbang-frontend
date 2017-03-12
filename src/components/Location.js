import React, { Component } from 'react';
import daum from 'daum';
import '../styles/Location.css';
import MapModal from './MapModal';

class Location extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMapModal:  true
    }
  }
  componentDidMount() {
    const building = this.props.building;

    const mapContainer = document.getElementById('map');
    const position = new daum.maps.LatLng(building.latitude, building.longitude)
    const mapOptions = {
      center: position,
      draggable: false,
      level: 3,
      mapTypeId: daum.maps.MapTypeId.NORMAL
    };

    const map = new daum.maps.Map(mapContainer, mapOptions);
    const circle = new daum.maps.Circle({
      center: position,
      radius: 50,
      strokeWeight: 0,
      fillColor: '#fc7009',
      fillOpacity: 0.7
    });

    circle.setMap(map);
  }

  render() {
    let mapModal = null;

    if (this.state.toggleMapModal) {
      mapModal =
        <div className='map-modal-container'>
          <div className='modal-top-nav'>
            <h1>위치보기</h1>
            <button className='btn-close' onClick={() => {this.setState({toggleMapModal: false})}}>X</button>
          </div>
          <MapModal building={this.props.building}></MapModal>
        </div>;
    };

    return (
      <div className='Location'>
        <h2>위치보기</h2>
        <div className='infobox'>
          <div id='map' style={{ width: 676 + 'px', height: 404 + 'px' }}></div>
          <button className='btn-map-open' onClick={() => {this.setState({toggleMapModal: true})}}>
            <img src='https://cloud.githubusercontent.com/assets/3931792/23828428/66a7cdde-0714-11e7-812a-57c7d0cb89a5.jpg' height='35px' alt='지도보기'></img>
            지도보기
          </button>
          <button className='btn-map-open' onClick={() => {this.setState({toggleMapModal: true})}}>
            <img src='https://cloud.githubusercontent.com/assets/3931792/23828427/667ca186-0714-11e7-862d-99dbec452df7.jpg' height='43px' alt='로드뷰보기'></img>
            로드뷰보기
          </button>
        </div>
        {mapModal}
      </div>
    )
  }
}

export default Location;
