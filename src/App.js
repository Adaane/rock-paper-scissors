import React, {useState} from 'react'
import './App.css';
import Player from './components/Player';




function App() {


  const [players, handlePlayers] = useState(
    [
      {
        name: 'Adaane',
        choice: ''
      },
      {
        name: 'recruteur',
        choice: ''
      }
    ]
  );


  const onPlayerChoice = (player, choice) => {

    // une nouvelle variale pour stocker le nouvelle état des joueurs
    // avec Reduce pour itérer le tableau des joueurs actuelles et y ajouter leurs choix
    const newPlayers = players.reduce((acc, curr) => {
      //si le joueur courant correspond au joueur sur lequelle j'ai cliqué
      if (player === curr.name ) {
        // Ajoute lui le choix que j'ai fais en cliquant
        curr.choice = choice
        // puis return l'accumulateur avec les nouveaux élément
      }
      return acc = [...acc, curr]

    }, [])
    //  On change le state de l'application avec le choix des joueurs 
    handlePlayers(newPlayers)
  };

  // const ChooseWinner = (players) => {

  // }

  return (
    <div className="App" style={{'display': 'flex'}}>
      {
        players.map((player, index) => {
          return <Player score={0} 
                    onPlayerChoice={onPlayerChoice} 
                    name={player.name}
                    choice={player.choice}
                    key={index}/>
        })
      }
    </div>
  );
}

export default App;
