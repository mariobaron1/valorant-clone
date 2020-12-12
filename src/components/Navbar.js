import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innnerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)

    useEffect(() => {
        showButton()
    }, [])

    return (
        <div className='navbar'>
            <div class="navbar_container">
                <Link to="/" className="navbar_logo">
                    <img src="img/valorant-logo.png" alt="Logo" />
                </Link>
                <div class="menu_icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav_menu active' : 'nav_menu'}>
                    <li className='nav_items'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='nav_items'>
                        <Link to='/agents' className='nav-links' onClick={closeMobileMenu}>Agents</Link>
                    </li>
                    <li className='nav_items'>
                        <Link to='/weapons' className='nav-links' onClick={closeMobileMenu}>Weapons</Link>
                    </li>
                    <li className='nav_items'>
                        <Link to='/maps' className='nav-links' onClick={closeMobileMenu}>Maps</Link>
                    </li>
                </ul>

                <div class="navbar_button">
                    <button className="btn-nav">PLAY NOW</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
