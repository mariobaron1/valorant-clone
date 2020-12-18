import React, { useState, useEffect } from 'react'
import './Agents.css'
import Parallax from 'react-rellax'
import { motion } from 'framer-motion'

const sideAnimationLeftVariants = {
    hidden: {
        x: "-100vw"
    },
    visible: {
        x: 0,
        transition: {
            duration: 1,
            delay: 1,
            ease: "easeInOut",
            type: 'spring',
            stiffness: 120
        }
    }
}

const sideAnimationRightVariants = {
    hidden: {
        x: "100vw"
    },
    visible: {
        x: 0,
        transition: {
            duration: 1,
            delay: 2,
            ease: "easeInOut",
            type: 'spring',
            stiffness: 120
        }
    },
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            yoyo: Infinity,
            duration: 0.3
        }
    }
}

const hoverAnimation = {
    hover: {
        scale: 1.1,
        textShadow: "0px 0px 8px rgb(255,255,255)",
        transition: {
            yoyo: Infinity,
            duration: 0.3
        }
    }
}

function Agents() {
    const [image, setImage] = useState("jett")
    const [skill, setSkill] = useState("Q")

    const setImages = (e) => {
        setImage(e.target.getAttribute("value"))
    }

    const setSkills = (e) => {
        setSkill(e.target.getAttribute("value"))
    }

    useEffect(() => {

    }, [skill])


    return (
        <div>
            <div div className='agents'>
                <video autoPlay loop muted>
                    <source src="video/agent-background-generic.mp4" type="video/mp4" />
                </video>
                <div className="agent">
                    <div className="list-agent">
                        <motion.div className="list-1" variants={sideAnimationLeftVariants} initial="hidden" animate="visible">
                            <motion.h2 value="jett" onClick={setImages} variants={hoverAnimation} whileHover="hover">jett</motion.h2>
                            <motion.h2 value="omen" onClick={setImages} variants={hoverAnimation} whileHover="hover">omen</motion.h2>
                            <motion.h2 value="sage" onClick={setImages} variants={hoverAnimation} whileHover="hover">sage</motion.h2>
                            <motion.h2 value="raze" onClick={setImages} variants={hoverAnimation} whileHover="hover">raze</motion.h2>
                            <motion.h2 value="phoenix" onClick={setImages} variants={hoverAnimation} whileHover="hover">pheonix</motion.h2>
                            <motion.h2 value="killjoy" onClick={setImages} variants={hoverAnimation} whileHover="hover">killjoy</motion.h2>
                        </motion.div>

                        <div className="list-main">
                            <Parallax speed={-2}>
                                <img src={`img/${image}.png`} alt={image} />
                            </Parallax>

                        </div>

                        <motion.div className="list-2" variants={sideAnimationRightVariants} initial="hidden" animate="visible">
                            <motion.h2 value="breach" onClick={setImages} variants={hoverAnimation} whileHover="hover">breach</motion.h2>
                            <motion.h2 value="sova" onClick={setImages} variants={hoverAnimation} whileHover="hover">sova</motion.h2>
                            <motion.h2 value="viper" onClick={setImages} variants={hoverAnimation} whileHover="hover">viper</motion.h2>
                            <motion.h2 value="cypher" onClick={setImages} variants={hoverAnimation} whileHover="hover">cypher</motion.h2>
                            <motion.h2 value="brimstone" onClick={setImages} variants={hoverAnimation} whileHover="hover">brim</motion.h2>
                            <motion.h2 value="reyna" onClick={setImages} variants={hoverAnimation} whileHover="hover">reyna</motion.h2>
                        </motion.div>
                    </div>
                </div>
            </div >

            <div className="skills-agents">
                <h1>Skills Agent</h1>

                <div class="skill-main">
                    <div className="info">
                        <div className="btn-skill">
                            <button className="btn btn-background-slide" value="C" onClick={setSkills}>skill 1</button>
                            <button className="btn btn-background-slide" value="E" onClick={setSkills}>skill 2</button>
                            <button className="btn btn-background-slide" value="Q" onClick={setSkills}>skill 3</button>
                            <button className="btn btn-background-slide" value="X" onClick={setSkills}>ultimate</button>
                        </div>
                        <h1>{image}</h1>
                    </div>

                    <div className="video-skill">
                        <video key={image + skill} id="pidio" className="my-video" muted autoPlay loop>
                            <source id="pidio-src" key={image} src={`video/${image}/${image}_${skill}_v001_web.mp4`} type="video/mp4" />
                        </video>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Agents
