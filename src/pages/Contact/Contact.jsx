import React from 'react'
import './contact.css'
import NavBar from '../../components/NavBar/NavBar'
import ButtomReturn from '../../components/ButtonReturn/ButtomReturn'
import contact from '../../videos/contact.mp4'
import {
    FaMailBulk,
    FaPhoneAlt,
    FaCity
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import {
    contactInfoAnime,
    contactFormAnime,
    pageAnime
} from '../../resources/Animation'

export default function Contact() {
    return (
        <motion.div
            className='contact_container'
            variants={pageAnime}
            initial='initial'
            animate='animate'
        >
            <NavBar />
            <ButtomReturn />
            <video autoPlay
                muted
                loop
                style={{
                    position: "fixed",
                }}
            >
                <source src={contact} type='video/mp4' />
            </video>
            <motion.div
                className='contact_info'
                variants={contactInfoAnime}
                initial='initial'
                animate='animate'
            >
                <div className='contact_desc'>
                    <FaCity style={{ color: 'dimgray' }} />
                    <h1> Endereço </h1>
                </div>
                    <p>Edorado / Contagem - MG Brazil</p>
                <div className='contact_desc'>
                    <FaPhoneAlt style={{ color: 'dimgray' }} />
                    <h1> Telefone </h1>
                </div >
                    <p>55 (31) 9 8586 1341</p>
                <div className='contact_desc'>
                    <FaMailBulk style={{ color: 'dimgray' }} />
                    <h1> Email </h1>
                </div>
                    <p>christianodipaulla@gmail.com</p>
            </motion.div>


            <motion.div
                className='contact_form'
                variants={contactFormAnime}
                initial='initial'
                animate='animate'
            >
                <form>
                    <div>
                        <h1>Fale comigo!</h1>
                        <input type='text' placeholder='Nome' />
                        <input type='text' placeholder='Email' />
                        <textarea type='text' placeholder='Menssagem' />
                        <button type='submit'>Enviar</button>
                    </div>
                </form>
            </motion.div>
        </motion.div>
    )
}

/*
  <motion.div
                className='contact_info'
                variants={contactInfoAnime}    
                initial='initial'
                nimate='animate'
            >
                    <div className='contact_desc'>
                        <FaCity style={{ color: 'dimgray' }} />
                        <h1> Endereço </h1>
                    </div>
                        <p>Edorado / Contagem - MG Brazil</p>
                    <div className='contact_desc'>
                        <FaPhoneAlt style={{ color: 'dimgray' }} />
                        <h1> Telefone </h1>
                    </div >
                        <p>55 (31) 9 8586 1341</p>
                    <div className='contact_desc'>
                        <FaMailBulk style={{ color: 'dimgray' }} />
                        <h1> Email </h1>
                    </div>
                        <p>christianodipaulla@gmail.com</p>
            </motion.div>


*/