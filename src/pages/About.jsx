import React from 'react'
import NavBar from '../components/NavBar'
import ButtomReturn from '../components/ButtomReturn'
import ParticlesAbout from '../resources/ParticlesAbout'
import myphoto from '../img/myphoto.jpg'
import { motion } from 'framer-motion'
import { aboutTextAnime, aboutImgAnime, pageAnime } from '../resources/Animation'

export default function About() {
    return (
        <motion.div className='about_container'
        variants={pageAnime} initial='initial' animate='animate'
        >
            <NavBar />
            <ButtomReturn />
            <ParticlesAbout />
            <motion.p variants={aboutTextAnime} initial='initial' animate='animate'>
            Meu nome é Cristiano de Paula. Desenvolvo aplicações web, tais como portfólios, blogs e lojas virtuais.
            Confira minhas habilidades, portfólio e entre em contato. Será um privilégio trabalharmos juntos!  
            </motion.p>
            <motion.img variants={aboutImgAnime} initial='initial' animate='animate' src={myphoto} ></motion.img>
       </motion.div>       
    )
}
