import React, { Component } from 'react';

class AgentComment extends Component {
  render() {
    return (
      <div className='AgentComment'>
        <h2 className='infobox-title'>담당자 한마디</h2>
        <div className='infobox'>
          <p>{this.props.item.agentComment}</p>
        </div>
      </div>
    )
  }
}

export default AgentComment;
