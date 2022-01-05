import React from 'react'
import { FaGithub, FaLinkedin, FaMailBulk, FaInstagram, FaFacebook } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { sLinksLineAnime } from '../resources/Animation'

export default function SocialLinks (){
    return (    
        <div className='social_links_container'>
           <motion.span 
           initial={{transform: 'scale(0)'}}
           animate={{scale:[0,1,1.5,1]}}
           transition={{type: 'spring', duration: 1, delay: '2'}}
           ><FaGithub /></motion.span>
           <motion.span 
             initial={{transform: 'scale(0)'}}
             animate={{scale:[0,1,1.5,1]}}
             transition={{type: 'spring', duration: 1, delay: '2.3'}}
           ><FaLinkedin /></motion.span>
           <motion.span 
             initial={{transform: 'scale(0)'}}
             animate={{scale:[0,1,1.5,1]}}
             transition={{type: 'spring', duration: 1, delay: '2.6'}}
           ><FaMailBulk /></motion.span>
           <motion.span 
             initial={{transform: 'scale(0)'}}
             animate={{scale:[0,1,1.5,1]}}
             transition={{type: 'spring', duration: 1, delay: '2.9'}}
           ><FaInstagram /></motion.span>
           <motion.span 
             initial={{transform: 'scale(0)'}}
             animate={{scale:[0,1,1.5,1]}}
             transition={{type: 'spring', duration: 1, delay: '3.1'}}
           ><FaFacebook /></motion.span>
            <motion.div className='social_links_line' variants={sLinksLineAnime} initial='initial' animate='animate'/>
        </div>
    )
}
