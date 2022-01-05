import React from 'react'
import NavBar from '../components/NavBar'
import ButtomReturn from '../components/ButtomReturn'
import ParticlesPort from '../resources/ParticlesPort'
import { motion } from 'framer-motion'
import {  advertsGAnimation,  advertsIAnimation, pageAnime } from '../resources/Animation'
import { dataPortfolio } from '../resources/Data'
 
export default function Porftolio () {
    return (
        <motion.div className='portfolio_container'
        variants={pageAnime} initial='initial' animate='animate'>
            <NavBar />
            <ButtomReturn />
            <ParticlesPort />
            <motion.div className='portfolio_gallery' variants={advertsGAnimation} initial='initial' animate='animate'>
               {dataPortfolio.map((images, index)=>(
               <div key={index}>
                    <motion.img src={images.url} variants={advertsIAnimation} 
                    whileHover={{ scale: 1.1, transition: { duration: 1, delay: 0.2}}}/>  
               </div> 
            ))}   
            </motion.div>     
        </motion.div> 
    )
}