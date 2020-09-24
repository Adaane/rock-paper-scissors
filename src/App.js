import React, {useState} from 'react'
import './App.css';
import Player from './components/Player';
import {initialPlayers, arrayWinner} from './misc'


function App() {


  const [players, handlePlayers] = useState(initialPlayers);


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
    ChooseWinner(newPlayers)
  };

  const ChooseWinner = (players) => {

    const playerOne = players[0]
    const playerTwo = players[1]

      // Remise à zéro des choix des joueurs
      const resetPlayer = () => handlePlayers(players.reduce((acc, curr) => {
        curr.choice = ''
        return acc = [...acc, curr]
      }, []))

    // Si les deux joueurs on séléctionné leurs choix
    if (playerOne.choice.id && playerTwo.choice.id ){
    // On regarde si il y a une égalité 
      if (playerOne.choice.id === playerTwo.choice.id) {
        resetPlayer()
      }

      const evaluateGame = `${playerOne.choice.id}vs${playerTwo.choice.id}`

      Object.getOwnPropertyNames(arrayWinner).map((item, index) => {
        if (evaluateGame === item ) {

         const winnner =  players.reduce((acc, curr) => {
            if (curr.choice.id === arrayWinner[item]) {
              acc = curr
            }
            return acc
          }, '')

          handlePlayers(players.reduce((acc, curr) => {
            if (winnner.name === curr.name) curr.score++
          }, []))

        }
      })
      resetPlayer()
    }


  }

  return (
    <div className="App" style={{'display': 'flex'}}>
      {
        players.map((player, index) => {
          return <Player score={player.score} 
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
