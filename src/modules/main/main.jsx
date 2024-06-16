import React from 'react'
import styles from './main.module.css'
import wtspp from '../../assets/icons/Social media.svg'
import phone from '../../assets/icons/Phone.svg'
import car from '../../assets/icons/Group 97.svg'
import time from '../../assets/icons/Time.svg'
import mail from '../../assets/icons/mail.svg'

const Main = () => {
  return (
    <div className={styles.main}>
        <div className={styles.up}>
                <h1>Персональные уроки по <br />вождению</h1>
                <div className={styles.text_btns}>
                <div className={styles.text}>
                <p>Практические занятия дают 80% результата в <br />обучении. Обучайтесь правильно и выгодно!</p>
                <h4>Получите полную консультацию по звонку!</h4>
                </div>
                <div className={styles.btns}>
                    <button>
                        <img src={wtspp} alt="" />
                        WhatsApp
                    </button>
                    <div className={styles.phone}>
                        <img src={phone} alt="" />
                        <a href="#">0552 209 809</a>
                    </div>
                </div>
            </div>
            <img src={car} alt="" className={styles.car}/>
        </div>
        <div className={styles.down}>
            <div className={styles.graph}>
                <div className={styles.time}>
                    <img src={time} alt="" />
                    <h3>График работы</h3>
                </div>
                <h3>ПН-ВС; 09:00-18:00</h3>
            </div>
            <div className={styles.email}>
                <img src={mail} alt="" />
                <a href='#'>ruslanjakshylykov@gmail.com</a>
            </div>
        </div>
    </div>
  )
}

export default Main