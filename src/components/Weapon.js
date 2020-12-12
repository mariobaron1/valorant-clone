import React from 'react'
import './Weapon.css'

function Weapon({ source, deskripsi, type, title }) {
    return (
        <div className="weapon">
            <img src={`img/weapons/${source}.png`} alt="weapon" />
            <div class="description">
                <h3>{title}</h3>
                <span>{type}</span>
                <p>{deskripsi}</p>
            </div>
        </div>
    )
}

export default Weapon
