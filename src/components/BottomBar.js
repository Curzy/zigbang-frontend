import React, { Component } from 'react';
import '../styles/BottomBar.css'

class BottomBar extends Component {
  render() {
    const agent = this.props.agent;
    const agentName = agent.isRepresentative ? '대표공인중개사 (' + agent.name + ')' : '중개보조원 (' + agent.name + ')'

    return (
      <div className='BottomBar'>
        <div className='section-container'>
          <div className='horizontal-section agent'>
            <ul className='agent-basic-info'>
              <li className='office'>{agent.office}({agent.representative})</li>
              <li className='agent'>{agentName}</li>
              <li className='phone'>{agent.agentPhone} <span>중개</span></li>
            </ul>
          </div>
          <div className='horizontal-section call'>
            <a href={'tel:' + agent.agentPhone} className='call'></a>
          </div>
        </div>
      </div>
    )
  }
}

export default BottomBar;
