import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import fakeData from './fakeData/fakeData.json';
import Players from './components/Players/Players';
import Selected from './components/Selected/Selected';

function App() {
  const [players, setPlayers] = useState([]);
  useEffect( ()=> setPlayers(fakeData), []);

  const [selected, setSelected] = useState([]) 
  const handelAddSelected = (player) => {
    const newSelected = [...selected, player]
    setSelected(newSelected)
  }
  return (
    <div className="App">
      <div className="section">
        {
          players.map( player => <Players key={player.id} player={player} handelAddSelected={handelAddSelected}></Players>)
        }
      </div>
      <Selected className="selected-players" selected={selected}></Selected>
    </div>
  );
}

export default App;
