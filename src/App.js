import React from 'react';
import './App.css';
import LogiqueModale from './LogiqueModal';
import Modale from './Modale';



function App() {

  const {revele,toggle} = LogiqueModale();
  return (
    <div className="App">
      <button className="button" onClick={toggle}>Ouvre la modale</button>
      <Modale revele={revele} cache={toggle} />
    </div>
  );
}

export default App;
