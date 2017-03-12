import React, { Component } from 'react';
import '../styles/AgentInfo.css'

class AgentInfo extends Component {

  render() {
    const agent = this.props.agent;
    const agentName = agent.isRepresentative ? '대표공인중개사 (' + agent.name + ')' : '중개보조원 (' + agent.name + ')'

    return (
      <div className='AgentInfo'>
        <h2>중개사정보</h2>
        <div className='infobox'>
          <div className='section'>
            <div className='agent-pic'>
              <img src={agent.img} alt='중개사 사진'></img>
            </div>
            <ul className='agent-basic-info'>
              <li className='agent-name'>{agentName}</li>
              <li>{agent.email}</li>
              <li>{agent.agentPhone}</li>
            </ul>
          </div>
          <div className='section'>
            <h3>중개사무소 정보</h3>
          </div>
          <div className='section'>
            <ul className='office-basic-info'>
              <li>{agent.address1} {agent.address2}, {agent.office} ({agent.representative})</li>
              <li>대표번호: {agent.officePhone}</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default AgentInfo;
