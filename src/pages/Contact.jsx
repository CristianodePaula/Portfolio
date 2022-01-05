import React from 'react'
import NavBar from '../components/NavBar'
import ButtomReturn from '../components/ButtomReturn'
import contact from '../video/contact.mp4'
import { FaMailBulk, FaPhoneAlt, FaCity  } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { contactInfoAnime, contactFormAnime, pageAnime } from '../resources/Animation'

export default function Contact() {
    return (
        <motion.div className='contact_container'
        variants={pageAnime} initial='initial' animate='animate'
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
            <motion.div className='contact_info' variants={contactInfoAnime} initial='initial' animate='animate'>
          <div>
              <FaCity />
              <h2> Endereço </h2>
          </div>
          <div>
              <p>Edorado / Contagem - MG Brazil</p>
          </div>
          <div>
              <FaPhoneAlt />
              <h2> Telefone </h2>
          </div>
          <div>
              <p>55 (31) 9 8586 1341</p>
          </div>
          <div>
              <  FaMailBulk  />
              <h2> Email </h2>
          </div>
          <div>
              <p>christianodipaulla@gmail.com</p>
          </div>
      </motion.div>
      <motion.div className='contact_form' variants={contactFormAnime} initial='initial' animate='animate'>
            <form>
            <h2>Envie uma mensagem</h2>
              <div>
                  <span>Nome</span>
                  <input type='text' />
              </div>
              <div>
                  <span>Email</span>
                  <input type='text' />
              </div>
              <div>
                  <span>Mensagem</span>
                  <textarea type='text' />
              </div>
              <div>
              <span></span>
                  <button type='submit'>Enviar</button>
              </div>
            </form>
      </motion.div>
    </motion.div>
    )
}

