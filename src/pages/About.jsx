import React from 'react'
import NavBar from '../components/NavBar'
import ButtomReturn from '../components/ButtomReturn'
import myphoto from '../img/myphoto.jpg'
import ParticlesAbout from '../resources/ParticlesAbout'
import { motion } from 'framer-motion'
import { aboutTextAnime, aboutImgAnime } from '../resources/Animation'

export default function About() {
    return (
        <div className='about_container'>
            <NavBar />
            <ParticlesAbout />
            <ButtomReturn />
            <motion.p variants={aboutTextAnime} initial='initial' animate='animate'>
            Meu nome é Cristiano de Paula. Desenvolvo aplicações web, tais como portfólios, blogs e lojas virtuais.
            Confira minhas habilidades, portfólio e entre em contato. Será um privilégio trabalharmos juntos!  
            </motion.p>
            <motion.img variants={aboutImgAnime} initial='initial' animate='animate' src={myphoto} ></motion.img>
       </div>       
    )
}
