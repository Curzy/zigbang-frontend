import React, { Component } from 'react';
import '../styles/AgentNoti.css'

class AgentNoti extends Component {

  render() {
    return (
      <div className='AgentNoti'>
        <div className='infobox warning'>
          <p>
            이 방은 <strong>공인중개사가 등록한 중개 매물입니다.</strong><br/>
            공인중개사를 통해 <strong>안전하게 계약</strong>할 수 있으며,<br/>
            <strong>법정 중개 보수가 발생</strong>합니다.
          </p>
        </div>
      </div>
    )
  }
}

export default AgentNoti;
