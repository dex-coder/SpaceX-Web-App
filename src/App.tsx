import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MissionContainer } from './components/Mission';
import { MissionInfo } from './components/MissionInfo'

function App() {
  const [id, setId] = useState(1);
  const handleChange = useCallback(newId=>{
    setId(newId);
  },[]);

  return (
    <div>
     <MissionContainer handleChange={handleChange} />
     <MissionInfo id={id}/>
    </div>
  );
}

export default App;
