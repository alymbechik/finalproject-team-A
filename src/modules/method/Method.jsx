import React from 'react';
import book from '../../assets/icons/image.svg';
import loc from '../../assets/icons/location_on.svg';
import styles from './method.module.css';
import phone from "../../assets/icons/Phone (2).svg";
import bookforphones from '../../assets/icons/image (1).svg';
import { TextField } from '@mui/material';
import { motion } from 'framer-motion';

const Method = (props) => {

  const {
    bookName,
    handleInputChange,
    postBook,
    language
  } = props

  return (
    <section className={styles.method} id='method'>
      <div className={styles.card}>
        <img src={book} alt="" className={styles.book} />
        <img src={bookforphones} alt="" className={styles.bookforphones} />
        <div className={styles.content}>
            {language === 'ru'? 
            <div className={styles.text}>
              <h2>Методическое пособие:</h2>
              <h3>Методическое пособие по правилам дорожного движения
                (пдд) с иллюстрациями и комментариями. методическое
                пособие составлено с дополнениями и пояснениями к 
                дорожным знакам и разметкам.</h3>
              <h3>При покупке оптом возможны скидки. за более подробной
                информацией обращаться напрямую к Руслану 
                Жакшылыковичу по телефону или WhatsApp</h3>
              <h3>Вы можете приобрести данное пособие по адресу либо
                по звонку:</h3>
            </div>
            :   
            <div className={styles.text}>
              <h2>Methodical manual:</h2>
              <h3>Methodological manual on traffic rules
                (traffic regulations) with illustrations and comments. methodical
                The manual has been compiled with additions and explanations to 
                road signs and markings.</h3>
              <h3>Discounts are possible when purchasing in bulk. for more details
                For information please contact Ruslan directly 
                Zhakshylykovich by phone or WhatsApp</h3>
              <h3>
You can purchase this manual at either
                by call: </h3>
            </div>
            }
          
          <div className={styles.info}>
            <div className={styles.loc}>
              <img src={loc} alt="" />
              <a href='https://go.2gis.com/kvstx'>{language === 'ru'? 'Сухе Ботора 26/1' : 'Suhe Botora 26/1'}</a>
            </div>
            <div className={styles.btns}>
              <div className={styles.input}>
              <TextField 
                id="outlined-search" 
                label={language === 'ru'? "Введите ваш номер телефона" : "Enter your phone number"}
                type="search" 
                value={bookName} 
                onChange={handleInputChange} 
              />
              </div>
              <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={postBook}
              >{language === 'ru'? 'КУПИТЬ': 'BUY'}
              </motion.button>
              <img src={phone} alt="" />
              <a href="/">0552 209 809</a>
            </div>
          </div>
        </div>
    </div>
    </section>
  )
}

export default Method;
