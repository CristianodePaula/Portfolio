import React from 'react'
import '../App.css'
import { NavLink } from 'react-router-dom'
import SocialLinks from './SocialLinks'
import SoundBar from './SoundBar'
import { motion } from 'framer-motion'
import { navTopAnime, navBottomAnime, navLeftAnime, navRightAnime } from '../resources/Animation'

export default function NavBar(){

    return (
        <div className='navbar_container'>
            <SocialLinks />
            <SoundBar />
            <motion.div className='navbar_about' variants={navTopAnime} initial='initial' animate='animate'
            whileHover={{ scale: 1.2, transition: { duration: 0.5, delay: 0.2, ease: 'circOut'}}}>
            <NavLink className='navbar_link' to='/about' > Sobre </NavLink>
            </motion.div>
            <motion.div className='navbar_contact' variants={navBottomAnime} initial='initial' animate='animate'
              whileHover={{ scale: 1.2, transition: { duration: 0.5 , delay: 0.2, ease: 'circOut'}}}>
            <NavLink className='navbar_link' to='/contact'> Contato </NavLink>
            </motion.div>
            <motion.div className='navbar_skills' variants={navLeftAnime} initial='initial' animate='animate'
             whileHover={{ scale: 1.2, transition: { duration: 0.5 , delay: 0.2, ease: 'circOut'}}}>
            <NavLink className='navbar_link' to='/skills' > Habilidades </NavLink>
            </motion.div>
            <motion.div className='navbar_portfolio' variants={navRightAnime} initial='initial' animate='animate'
             whileHover={{ scale: 1.2, transition: { duration: 0.5 , delay: 0.2, ease: 'circOut'}}}>
            <NavLink className='navbar_link' to='/portfolio'> Porftólio </NavLink>
            </motion.div>        
        </div>
    )
}