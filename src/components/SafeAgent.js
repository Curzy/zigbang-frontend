import React, { Component } from 'react';
import SafeAgentImg from '../../public/SafeAgent.jpg'


class SafeAgent extends Component {
  render() {
    return (
      <div className='SafeAgent'>
        <img src={SafeAgentImg} alt='안심중개사' width='100%'></img>
      </div>
    )
  }
}

export default SafeAgent;
