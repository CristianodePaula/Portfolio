import React from 'react'
import './skills.css'
import NavBar from '../../components/NavBar/NavBar'
import ButtomReturn from '../../components/ButtonReturn/ButtomReturn'
import skills from '../../videos/skills.mp4'
import { motion } from 'framer-motion'
import { skillsB1Anime, skillsB2Anime, skillsB3Anime, pageAnime } from '../../resources/Animation'

export default function Skills() {

    const Progress = ({ done }) => {
        const [style, setStyle] = React.useState({});

        setTimeout(() => {
            const newStyle = {
                opacity: 1,
                width: `${done}%`
            }

            setStyle(newStyle);
        }, 200);

        return (
            <div className="skills_progress">
                <div className="skills_progress-done" style={style}>
                    {done}%
                </div>
            </div>
        )
    }

    return (
        <motion.div
            className='skills_container'
            variants={pageAnime}
            initial='initial'
            animate='animate'
        >
            <NavBar />
            <ButtomReturn />
            <video autoPlay
                muted
                loop
                style={{
                    position: "fixed",
                }}>
                <source src={skills} type='video/mp4' />
            </video>
            <motion.div
                className='skills_box'
                variants={skillsB1Anime}
                initial='initial'
                animate='animate'
            >
                <h1> Frond End</h1>
                <h3 > HTML </h3>
                <Progress done="100" />
                <h3> CSS </h3>
                <Progress done="100" />
                <h3> Javascript </h3>
                <Progress done="90" />
                <h3> React </h3>
                <Progress done="90" />
            </motion.div>
            <motion.div
                className='skills_box'
                variants={skillsB2Anime}
                initial='initial'
                animate='animate'
            >
                <h1> Back End</h1>
                <h3> Node Js </h3>
                <Progress done="80" />
                <h3> Express </h3>
                <Progress done="80" />
                <h3> MongoDB </h3>
                <Progress done="90" />
                <h3> SQL </h3>
                <Progress done="50" />
            </motion.div>
            <motion.div
                className='skills_box'
                variants={skillsB3Anime}
                initial='initial'
                animate='animate'
            >
                <h1> Complementares</h1>
                <h3> Framer-Motion </h3>
                <Progress done="100" />
                <h3> Styeld-Components </h3>
                <Progress done="100" />
                <h3> Redux </h3>
                <Progress done="50" />
                <h3> Docker </h3>
                <Progress done="50" />
            </motion.div>
        </motion.div>
    )
} 