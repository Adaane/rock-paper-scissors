import React, {useState} from 'react'

export default function Player(props) {
    // Le choix du Jouer
    // const [choice, setChoice] = useState('');

    const items = [{
        name: 'Pierre',
        id: 'R'
    },
    {
        name: 'Papier',
        id: 'P'
    },
    {
        name: 'Ciseaux',
        id: 'S'
    }
]

    return (
        <div>
            <h1>Player  : {props.name}</h1>
            <h2>Choisis en un</h2>

            <ul>
            {items.map( (item, index) => {
                return <li key={index+1} onClick={() => {
                    props.onPlayerChoice(props.name, item)
                }}> {item.name} </li>
            })}
            </ul>

            <p>Vous avez Choisis {props.choice.name}</p>
            <p>Vous score est de  {props.score}</p>
        </div>
    )
}
