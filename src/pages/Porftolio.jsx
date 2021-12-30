import React from 'react'
import NavBar from '../components/NavBar'
import ButtomReturn from '../components/ButtomReturn'
import ParticlesPort from '../resources/ParticlesPort'
import templ01 from '../img/templ01.webp'
import templ02 from '../img/templ02.webp'
import templ03 from '../img/templ03.webp'
import { motion } from 'framer-motion'
import { portImg1Anime, portImg2Anime, portImg3Anime  } from '../resources/Animation'
 
export default function Porftolio() {
    return (
        <div className='portfolio_container'>
            <ParticlesPort />
            <NavBar />
            <ButtomReturn />
                <motion.img src={templ01}
                variants={portImg1Anime} initial='initial' animate='animate'
                whileHover={{scale: 1.1}}
                ></motion.img>
                <motion.img src={templ02}
                variants={portImg2Anime} initial='initial' animate='animate'
                whileHover={{scale: 1.1}}
                ></motion.img>
                <motion.img src={templ03}
                variants={portImg3Anime} initial='initial' animate='animate'
                whileHover={{scale: 1.1}}
                ></motion.img>
        </div> 
    )
}
