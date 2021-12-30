import React, { useState, useEffect, useRef} from 'react'
import ParticlesIntro from '../resources/ParticlesIntro'
import NavBar from '../components/NavBar'
import Programmer from '../img/programmer.jpg'
import { init } from 'ityped'
import { motion } from 'framer-motion'
import { introH1Anime, introPAnime } from '../resources/Animation'

export default function Intro () {
    
    const [isAnimating, setIsAnimating] = useState(false)

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current,{
            showCursor: false,
            backDelay: 4000,
            backSpeed: 80,
            strings: [ 'Ola!','Meu nome é Cristiano', 'Desenvolvo aplicações web!', 'Navegue e confira!']
        })
    },[])  

    return ( 
        <div className='intro_container'>
            <ParticlesIntro />
            <NavBar />
            <motion.h1 variants={introH1Anime} initial='initial' animate='animate'>Seja Bem vindo!</motion.h1>
            <motion.p variants={introPAnime} initial='initial' animate='animate' ref={textRef}> </motion.p>
            <motion.img src={Programmer} drag dragConstraints={{right: 10, left: 10, top: 10, bottom: 10}} 
            onClick={()=> setIsAnimating(!isAnimating)} 
            initial={{ scale: 0.1, opacity: 0 }}
            animate={{
                x: isAnimating ? -205 : 0,
                y: isAnimating ? 330 : 0,
                opacity : isAnimating ? 1 : 0.5,
                rotate: isAnimating ? 360 : 0,
                scale: isAnimating ? 0.1 : 1,
                transition: { duration: 1.5, ease: 'easeInOut' }
            }}
           />   
        </div>
    )
}