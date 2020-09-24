import React from 'react'

export default function Opponent(props) {
    const {onChange, onSubmit, name} = props
    return (
        <div>
            <label>Ton Prénom</label> 
            <input 
                type="text"
                name="Name" 
                onChange={onChange}/> 
            <button onClick={onSubmit} >Valider</button>
            {
                name && <div>Your name is {name}</div>
            }
        </div>
    )
}
