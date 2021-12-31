import React from 'react'
import { FaGithub, FaLinkedin, FaMailBulk, FaInstagram, FaFacebook } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { sLinksLineAnime } from '../resources/Animation'

export default function SocialLinks (){

    return (    
        <div className='social_links_container'>
            <motion.span className='social_links_icon'
                initial={{transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', delay: 2.5}}
                whileHover={{ scale: 1.2, transition: { duration: 1, delay: 0.2}}}
            ><FaGithub /></motion.span>
            <motion.span className='social_links_icon' 
                initial={{transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', delay: 2.7}}
                whileHover={{ scale: 1.1, transition: { duration: 0.5, delay: 0.2}}}
            ><FaLinkedin /></motion.span>
            <motion.span className='social_links_icon' 
                initial={{transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', delay: 2.9}}
                whileHover={{ scale: 1.1, transition: { duration: 0.5, delay: 0.2}}}
            >< FaMailBulk /></motion.span>
            <motion.span className='social_links_icon'  
                initial={{transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', delay: 3.1}}
                whileHover={{ scale: 1.1, transition: { duration: 0.5, delay: 0.2}}}
            ><FaInstagram /></motion.span>
            <motion.span className='social_links_icon'     
                initial={{transform:"scale(0)"}}
                animate={{scale:[0,1,1.5,1]}}
                transition={{type:'spring', delay: 3.4}}
                whileHover={{ scale: 1.1, transition: { duration: 0.5, delay: 0.2}}}
            ><FaFacebook /></motion.span>
            <motion.div className='social_links_line' variants={sLinksLineAnime} initial='initial' animate='animate'/>
        </div>
    )
}

