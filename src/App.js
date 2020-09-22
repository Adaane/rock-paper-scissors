import React from 'react';
import './App.css';
import Player from './components/Player';


// const Game = (choiceOfPlayerOne, choiceOfPlayerTwo ) => {

//   if choiceOfPlayerOne === 
//   return choiceOfPlayerOne;
// }

function App() {
  return (
    <div className="App" style={{'display': 'flex'}}>
      <Player score={0}/>
      <Player score={0}/>
    </div>
  );
}

export default App;
