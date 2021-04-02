import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MissionContainer } from './components/Mission';
import { MissionInfo } from './components/MissionInfo'

function App() {
  return (
    <div>
     <MissionContainer />
     <MissionInfo />
    </div>
  );
}

export default App;
