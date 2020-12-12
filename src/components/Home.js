import React from 'react'
import './Home.css'
import Parallax from 'react-rellax'

function Home() {
    return (
        <div className='home'>
            <Parallax speed={5}>
                <h1>VALORANT</h1>
            </Parallax>
        </div>
    )
}

export default Home
