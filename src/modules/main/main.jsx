import React from 'react';
import styles from './main.module.css';
import wtspp from '../../assets/icons/Social media.svg';
import phone from '../../assets/icons/Phone.svg';
import car from '../../assets/icons/Group 97.svg';
import time from '../../assets/icons/Time.svg';
import mail from '../../assets/icons/mail.svg';
import time2 from '../../assets/icons/Time (1).svg';
import phone2 from '../../assets/icons/Phone (1).svg';
import { motion } from 'framer-motion';

const Main = ({ language }) => {
  return (
    <main>
      <div className={styles.main}>
        <div className={styles.up}>
          <motion.div
            initial={{ opacity: 0, x: -150 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className={styles.title}
          >
            {/* Проверяем язык и выводим соответствующий текст */}
            <h1>{language === 'ru' ? 'Персональные уроки по вождению' : 'Personal Driving Lessons'}</h1>
            <div className={styles.text_btns}>
              <div className={styles.text}>
                  {language === 'ru' 
                    ? <p>Практические занятия дают 80% результата в <br />обучении. Обучайтесь правильно и выгодно!</p>
                    : <p>Practical lessons provide 80% of the results in <br />learning. Learn correctly and profitably!</p>}
                <h4>{language === 'ru' ? 'Получите полную консультацию по звонку!' : 'Get a full consultation by phone!'}</h4>
              </div>
              <div className={styles.btns}>
                <a href="https://web.whatsapp.com/">
                  <button>
                    <img src={wtspp} alt="" />
                    WhatsApp
                  </button>
                </a>
                <div className={styles.phone}>
                  <img src={phone} alt="" className={styles.phone1} />
                  <img src={phone2} alt="" className={styles.phone2} />
                  <a href="/">0552 209 809</a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={car} alt="" className={styles.car} />
          </motion.div>
        </div>
        <div className={styles.down}>
          <div className={styles.graph}>
            <div className={styles.time}>
              <img src={time} alt="" className={styles.time1} />
              <img src={time2} alt="" className={styles.time2} />
              <h3>{language === 'ru' ? 'График работы' : 'Working hours'}</h3>
            </div>
            <h3>{language === 'ru' ? 'ПН-ВС; 09:00-18:00' : 'Mon-Sun; 09:00-18:00'}</h3>
          </div>
          <div className={styles.email}>
            <img src={mail} alt="" />
            <a href="/">ruslanjakshylykov@gmail.com</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
