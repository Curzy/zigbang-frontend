import React, { Component } from 'react';
import SafeAgent from './SafeAgent'
import Slider from 'react-slick';
import '../styles/RoomInfo.css';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';


class RoomInfo extends Component {
  render() {
    const item = this.props.item;
    const sliderSettings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000
    }

    return (
      <div className='RoomInfo'>
        <div className='slider-container'>
          <Slider {...sliderSettings}>
            {item.img.map((img, index) => {
              return (
                <div key={index}>
                  <img src={img} alt='방 사진' className='room-pic'></img>
                </div>
              )
            })}
          </Slider>
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
