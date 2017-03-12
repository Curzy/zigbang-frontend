import React, { Component } from 'react';
import '../styles/BuildingInfo.css'

class BuildingInfo extends Component {
  render() {
    const building = this.props.building;
    return (
      <div className='BuildingInfo'>
        <h2>건물정보</h2>
        <div className='infobox'>
          <div className='horizontal-section'>
            <div className='building-pic-container'>
              <img src={building.img} alt='건물 사진'></img>
            </div>
          </div>
          <div className='horizontal-section'>
            <div className='section'>
              <ul className='building-basic-info'>
                <li className='building-name'>{building.name}</li>
                <li>{building.address1} {building.address2} {building.address3}</li>
              </ul>
            </div>
            <div className='section'>
              <ul className='building-detail-info'>
                <li>{building.floor}</li>
                <li>{building.rooms}</li>
                <li>{building.established}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BuildingInfo;
