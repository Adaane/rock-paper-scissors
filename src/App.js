import React, {useState} from 'react'
import './App.css';
import Player from './components/Player';
import Opponent from './components/Opponent';
import {initialPlayers, arrayWinner, weapons} from './misc'


function App() {


  const [players, handlePlayers] = useState(initialPlayers);
  const [opponent, setOpponent] =  useState({})
  const [value, setValue] =  useState('')

  const setPlayers = (opponent) => {
    if (opponent) {
      players.push(opponent)
    }
  }

  const setRandomChoice = (choices) => {
    let index = Math.floor(Math.random() * choices.length);
    return choices[index]
  }

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

    playerOne.choice = setRandomChoice(weapons)

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

  const handleChange = (e) => {
    setValue(e.target.value)
  }


  const handleSubmit = () => {
    if (players.length === 2 ) return true
    setOpponent(
      opponent.name = value,
      opponent.choice = '',
      opponent.score = 0
    );
    setValue('')
    setPlayers(opponent)
  }

  return (
    <>
    <Opponent onChange={handleChange} onSubmit={handleSubmit} name={opponent.name}/>
      <div className="App" style={{'display': 'flex'}}>
        {
          opponent && players[1] &&
            <Player score={players[1].score} 
                        onPlayerChoice={onPlayerChoice} 
                        name={players[1].name}
                        choice={players[1].choice} />
        }   
      </div>
      </>
  );
}

export default App;
