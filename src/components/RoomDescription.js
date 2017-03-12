import React, { Component } from 'react';

class RoomDescription extends Component {
  render() {
    return (
      <div className='RoomDescription'>
        <h2 className='infobox-title'>상세설명</h2>
        <div className='infobox'>
          <p dangerouslySetInnerHTML={{ __html: this.props.item.description.replace(/\n/g, '<br/>') }}></p>
        </div>
      </div>
    )
  }
}

export default RoomDescription;
