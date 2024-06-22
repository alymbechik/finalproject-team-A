import React from 'react'
import styles from './footer.module.css'
import title from '../../assets/icons/Logo (2).svg'
import whatsapp from '../../assets/icons/Social media.svg'
import instagram from '../../assets/icons/Social media (1).svg'
import telegram from '../../assets/icons/Social media (2).svg'
import phone from '../../assets/icons/Phone (3).svg'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <nav>
          <a href="/"><img src={instagram} alt="" /></a>
          <a href="https://web.whatsapp.com/"><img src={whatsapp} alt="" /></a>
          <a href="/"><img src={telegram} alt="" /></a>
        </nav>
        <img src={title} alt="" className={styles.title}/>
        <nav>
          <div>
            <img src={phone} alt=""/>
            <a href="/">0552 209 809</a>
          </div>
          <a href="/" className={styles.phone}>0552 209 809</a>
        </nav>
    </div>
  )
}

export default Footer