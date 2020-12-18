import React from 'react'
import './Home.css'
import Parallax from 'react-rellax'
import { motion } from 'framer-motion'

const titleVariant = {
    hidden: {
        opacity: 0,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        y: "-100vh"
    },
    visible: {
        y: 0,
        opacity: 1,
        textShadow: "0px 0px 0px rgb(255,255,255)",
        transition: {
            delay: 1,
            duration: 1,
            type: 'spring',
            stiffness: 120
        }
    }
}

const hoverAnimation = {
    visible: {
        x: [0, -20, 20, -20, 20, 0],
        transition: { delay: 2 }
    },
    hover: {
        scale: 1.1,

        boxShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            yoyo: Infinity,
            duration: 0.3
        }
    }
}

function Home() {
    return (
        <div className='home'>
            <Parallax speed={5}>
                <motion.h1 variants={titleVariant} initial="hidden" animate="visible">VALORANT</motion.h1>
            </Parallax>
        </div>
    )
}

export default Home
