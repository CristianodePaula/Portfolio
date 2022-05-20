import React from 'react'
import './portfolio.css'
import NavBar from '../../components/NavBar/NavBar'
import ButtomReturn from '../../components/ButtonReturn/ButtomReturn'
import ParticlesPort from '../../resources/ParticlesPort'
import { motion } from 'framer-motion'
import {
    advertsGAnimation,
    advertsIAnimation,
    pageAnime
} from '../../resources/Animation'
import { dataPortfolio } from '../../data/Data'

export default function Porftolio() {
    return (
        <motion.div
            className='portfolio_container'
            variants={pageAnime}
            initial='initial'
            animate='animate'>
            <NavBar />
            <ButtomReturn />
            <ParticlesPort />
            <motion.div
                className='portfolio_gallery'
                variants={advertsGAnimation}
                initial='initial'
                animate='animate'
            >
                {dataPortfolio.map((images, index) => (
                    <div key={index}>
                        <motion.div className='portfolio_card' variants={advertsIAnimation}>
                            <div className='portfolio_title'>{images.title}</div>
                            <img
                                alt="projects"
                                className='portfolio_img'
                                src={images.url}
                                onClick={() => window.open (images.link, '_blank')}
                                variants={advertsIAnimation}
                            />
                        </motion.div>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    )
}




/* - efeito de hover em img
whileHover={{
    scale: 1.02,
    transition: {
    duration: 1,
    delay: 0.2
    }
}}
*/