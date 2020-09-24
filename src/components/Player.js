import React from 'react'
import {weapons} from '../misc'

export default function Player(props) {
    return (
        <div>
            <h1>Player  : {props.name}</h1>
            <h2>Choisis ton arme</h2>

            <ul>
            {weapons.map( (weapon, index) => {
                return <li key={index+1} onClick={() => {
                    props.onPlayerChoice(props.name, weapon)
                }}> {weapon.name} </li>
            })}
            </ul>

            <p>Vous avez Choisis {props.choice.name}</p>
            <p>Vous score est de  {props.score}</p>
        </div>
    )
}
