import React, {useState} from 'react'

export default function Player(props) {
    // Le choix du Jouer
    const [choice, setChoice] = useState('');

    return (
        <div>
            <h1>Player One</h1>
            <h2>Choisis en un</h2>

            <ul>
                <li onClick={() => setChoice('rock')}>Pierre</li>
                <li onClick={() => setChoice('paper')}> Papier</li>
                <li onClick={() => setChoice('scissors')}>Ciseaux</li>
            </ul>

            <p>Vous avez Choisis {choice}</p>
            <p>Vous score est de  {props.score}</p>
        </div>
    )
}
