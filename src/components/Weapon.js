import React from 'react'
import './Weapon.css'
import { motion } from 'framer-motion'



function Weapon({ source, deskripsi, type, title }) {
    return (
        <motion.div className="weapon">
            <img src={`img/weapons/${source}.png`} alt="weapon" />
            <div class="description">
                <h3>{title}</h3>
                <span>{type}</span>
                <p>{deskripsi}</p>
            </div>
        </motion.div>
    )
}

export default Weapon
