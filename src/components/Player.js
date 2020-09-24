import React from 'react'
import {items} from '../misc'

export default function Player(props) {
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
