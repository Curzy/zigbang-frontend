import React, { Component } from 'react';
import '../styles/App.css';

import TopBar from './TopBar';
import RoomInfo from './RoomInfo';
import RoomDescription from './RoomDescription';
import AgentComment from './AgentComment';
import BuildingInfo from './BuildingInfo';
import Location from './Location';
import AgentInfo from './AgentInfo';
import AgentNoti from './AgentNoti';

import items from '../../public/items.json';
import buildings from '../../public/buildings.json';
import agents from '../../public/agents.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: items.datas[0],
      building: buildings.datas[0],
      agent: agents.datas[0]
    };
  }

  render() {
    const item = this.state.item;
    const building = this.state.building;
    const agent = this.state.agent;

    return (
      <div className='App'>
        <TopBar></TopBar>
        <RoomInfo item={item}></RoomInfo>
        <RoomDescription item={item}></RoomDescription>
        <AgentComment item={item}></AgentComment>
        <BuildingInfo building={building}></BuildingInfo>
        <Location building={building}></Location>
        <AgentInfo agent={agent}></AgentInfo>
        <AgentNoti></AgentNoti>
      </div>
    );
  }
}

export default App;
