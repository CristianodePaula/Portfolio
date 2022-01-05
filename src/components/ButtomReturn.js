import React from 'react'
import { NavLink } from 'react-router-dom'
import { GiReturnArrow } from 'react-icons/gi'
import { motion } from 'framer-motion'

export default function ButtomReturn() {
    
    return (
        <div>
            <motion.div>
            <NavLink to='/'> <GiReturnArrow className='buttom_return_icon'/> </NavLink>
            </motion.div>
        </div>
    )
}
