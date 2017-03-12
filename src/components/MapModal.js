import React, { Component } from 'react';
import daum from 'daum';
import '../styles/MapModal.css';

class MapModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMap: true
    };
  }

  componentDidMount() {
    const building = this.props.building;

    const mapContainer = document.getElementById('modal-map');
    const position = new daum.maps.LatLng(building.latitude, building.longitude)
    const mapOptions = {
      center: position,
      level: 3
    };
    const mapTypeControl = new daum.maps.MapTypeControl();
    const zoomControl = new daum.maps.ZoomControl();
    const circle = new daum.maps.Circle({
      center: position,
      radius: 50,
      strokeWeight: 0,
      fillColor: '#fc7009',
      fillOpacity: 0.7
    });


    const map = new daum.maps.Map(mapContainer, mapOptions);
    console.log(map);
    map.addControl(mapTypeControl, daum.maps.ControlPosition.TOPRIGHT);
    map.addControl(zoomControl, daum.maps.ControlPosition.RIGHT);
    circle.setMap(map);

    const roadviewContainer = document.getElementById('modal-roadview');
    const roadviewPoint = {
      pan: 258,
      tilt: 3,
      zoom: 0
    }

    const roadview = new daum.maps.Roadview(roadviewContainer);
    const roadviewClient = new daum.maps.RoadviewClient();
    roadviewClient.getNearestPanoId(position, 50, (panoId) => {
      roadview.setPanoId(panoId, position);
    });

    roadview.setViewpoint(roadviewPoint);

    daum.maps.event.addListener(roadview, 'init', () => {
      new daum.maps.Marker({
        position: position,
        map: roadview
      })
    })
  }

  render() {
    return (
      <div className='MapModal'>
        <div id='map-container' className={this.state.toggleMap ? 'view-map' : 'view-roadview'}>
          <div id='mapWrapper' style={{ width: 100 + '%', height: 100 + '%', position: 'absolute', top: 0, left: 0, textAlign: 'left' }}>
            <div id='modal-map' style={{ width: 100 + '%', height: 100 + '%' }}></div>
            <button id='btn-roadview' onClick={() => {this.setState({toggleMap: false})}}>
              <img src='https://cloud.githubusercontent.com/assets/3931792/23828427/667ca186-0714-11e7-862d-99dbec452df7.jpg' height='43px' alt='로드뷰보기'></img>
              로드뷰보기
            </button>
          </div>
          <div id='roadviewWrapper' style={{ width: 100 + '%', height: 100 + '%', position: 'absolute', top: 0, left: 0, textAlign: 'left' }}>
            <div id='modal-roadview' style={{ height: 100 + '%' }}></div>
            <button id='btn-map' onClick={() => {this.setState({toggleMap: true})}}>
              <img src='https://cloud.githubusercontent.com/assets/3931792/23828428/66a7cdde-0714-11e7-812a-57c7d0cb89a5.jpg' height='35px' alt='지도보기'></img>
              지도보기
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default MapModal;
