import React, { useState, useEffect } from 'react'
import './Agents.css'

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
                {/* <img src="img/valorant-bg-agents.png" alt="background" /> */}
                <div className="agent">
                    <div className="list-agent">
                        <div className="list-1">
                            <h2 value="jett" onClick={setImages}>jett</h2>
                            <h2 value="omen" onClick={setImages}>omen</h2>
                            <h2 value="sage" onClick={setImages}>sage</h2>
                            <h2 value="raze" onClick={setImages}>raze</h2>
                            <h2 value="phoenix" onClick={setImages}>pheonix</h2>
                            <h2 value="killjoy" onClick={setImages}>killjoy</h2>
                        </div>

                        <div className="list-main">
                            <img src={`img/${image}.png`} alt={image} />
                        </div>

                        <div className="list-2">
                            <h2 value="breach" onClick={setImages}>breach</h2>
                            <h2 value="sova" onClick={setImages}>sova</h2>
                            <h2 value="viper" onClick={setImages}>viper</h2>
                            <h2 value="cypher" onClick={setImages}>cypher</h2>
                            <h2 value="brimstone" onClick={setImages}>brim</h2>
                            <h2 value="reyna" onClick={setImages}>reyna</h2>
                        </div>
                    </div>
                </div>
            </div >

            <div className="skills-agents">
                {/* <img src="img/valorants-bg-skills.png" alt="background" /> */}
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
