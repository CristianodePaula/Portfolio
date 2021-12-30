import React, {useState, useRef} from 'react'
import backgroundmusic from '../music/backgroundmusic.mp3'
import { FaMusic } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { soundBarAnime } from '../resources/Animation'

export default function SoundBar (){

    const ref = useRef(null);
    const [click, setClick] = useState(false);

    const handleClick = () => {
        setClick(!click);

        if(!click){
            ref.current.play();
        }else{
            ref.current.pause(); 
        }
    }
    
    return (            
        <motion.div className='sound_bar_container' onClick={()=> handleClick()} variants={soundBarAnime} initial='initial' animate='animate'>
                <FaMusic />   
                <audio src={backgroundmusic} ref={ref} loop />           
        </motion.div> 
    )
}
