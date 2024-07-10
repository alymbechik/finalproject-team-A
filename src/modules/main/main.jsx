import React from 'react'
import styles from './main.module.css'
import wtspp from '../../assets/icons/Social media.svg'
import phone from '../../assets/icons/Phone.svg'
import car from '../../assets/icons/Group 97.svg'
import time from '../../assets/icons/Time.svg'
import mail from '../../assets/icons/mail.svg'
import time2 from '../../assets/icons/Time (1).svg'
import phone2 from '../../assets/icons/Phone (1).svg'
import { motion } from 'framer-motion'

const Main = () => {
  return (
    <main>
        <div className={styles.main}>
        <div className={styles.up}
        // initial={{ opacity: 0, x: -150}}
        // animate={{ opacity: 1, x: 0}}
        // transition={{ duration: 0.5}}
        >
            <motion.div
            initial={{ opacity: 0, x: -150}}
            animate={{ opacity: 1, x: 0}}
            transition={{ duration: 0.5}}
            className={styles.up}
            >
            <h1>Персональные уроки по вождению</h1>
                <div className={styles.text_btns}>
                <div className={styles.text}>
                <p>Практические занятия дают 80% результата в <br />обучении. Обучайтесь правильно и выгодно!</p>
                <h4>Получите полную консультацию по звонку!</h4>
                </div>
                <div className={styles.btns}>
                    <a href="https://web.whatsapp.com/">
                    <button> 
                        <img src={wtspp} alt="" />
                        WhatsApp
                    </button></a>
                    <div className={styles.phone}>
                        <img src={phone} alt="" className={styles.phone1}/>
                        <img src={phone2} alt="" className={styles.phone2}/>
                        <a href="/">0552 209 809</a>
                    </div>
                </div>
            </div>
            
            </motion.div>
       
        <motion.div
        // initial={{ opacity: 0, scale: 5, x: -100 }}
        // animate={{ opacity: 1, scale: 1, x: 40, y: -550 }}
        // transition={{ duration: 0.5 }}
        // initial={{ opacity: 0, scale: 5, x: -100 }}
        // animate={{ opacity: 1, scale: 1, x: 40, y: -450 }}
        // transition={{ duration: 0.5 }}
        initial={{ opacity: 0, x: -150}}
        animate={{ opacity: 1, x: 0, y: -500}}
        transition={{ duration: 0.5}}
        >
            <img src={car} alt="" className={styles.car}/>
        </motion.div>
         </div>
        <div className={styles.down}>
            <div className={styles.graph}>
                <div className={styles.time}>
                    <img src={time} alt="" className={styles.time1}/>
                    <img src={time2} alt="" className={styles.time2} />
                    <h3>График работы</h3>
                </div>
                <h3>ПН-ВС; 09:00-18:00</h3>
            </div>
            <div className={styles.email}>
                <img src={mail} alt="" />
                <a href='/'>ruslanjakshylykov@gmail.com</a>
            </div>
        </div>
    </div>
    </main>
    
  )
}

export default Main