import React, { Component } from 'react';
import SafeAgent from './SafeAgent'
import '../styles/RoomInfo.css';

class RoomInfo extends Component {
  render() {
    const item = this.props.item;
    return (
      <div className='RoomInfo'>
        <div className='room-pic-container'>
          <img src={item.img[0]} alt='대표사진' className='room-pic'></img>
        </div>
        <SafeAgent></SafeAgent>
        <h1 className='room-name'>신사동 예쁜 쓰리룸</h1>
        <div className='infobox'>
          <div className='price-pic-container'>
          </div>
          <table>
            <tbody>
              <tr>
                <th>보증금</th>
                <td><span className='money'>{item.deposit}</span> 만원</td>
              </tr>
              <tr>
                <th>월세</th>
                <td><span className='money'>{item.price}</span> 만원</td>
              </tr>
              <tr>
                <th>등록번호</th>
                <td>{item.id}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>주소</th>
                <td>{item.address1} {item.address2} {item.address3}</td>
              </tr>
              <tr>
                <th>인근전철역</th>
                <td>{item.nearStation.join(', ')}</td>
              </tr>
              <tr>
                <th>층/건물층수</th>
                <td>{item.roomFloor}/{item.buildingFloor}</td>
              </tr>
              <tr>
                <th>크기</th>
                <td><span className='square-meter'>전용면적 {item.roomSize[0]}m<sup>2</sup></span> <span className='P'>{item.roomSize[1]}P</span></td>
              </tr>
              <tr>
                <th>구조</th>
                <td>{item.roomType}</td>
              </tr>
              <tr>
                <th>건물형태</th>
                <td>{item.buildingType}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>옵션</th>
                <td>{item.options.join(', ')}</td>
              </tr>
              <tr>
                <th>관리비</th>
                <td>{item.maintenanceFee ? item.maintenanceFee + '만원' : '없음'}</td>
              </tr>
              <tr>
                <th>관리비 포함항목</th>
                <td>{item.maintenances.join(', ')}</td>
              </tr>
              <tr>
                <th>주차</th>
                <td>{item.parking ? '가능' : '불가능'}</td>
              </tr>
              <tr>
                <th>엘레베이터</th>
                <td>{item.elevator ? '있음' : '없음'}</td>
              </tr>
              <tr>
                <th>입주가능일</th>
                <td>{item.availableSince}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

export default RoomInfo;
