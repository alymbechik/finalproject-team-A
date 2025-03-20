import React from 'react'
import styles from './cards.module.css'
import img from '../../assets/icons/Group 34.svg'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const Card2 = ({ language }) => {

  const navigate = useNavigate();

  const clickHandler = () => navigate("/test/0");

  return (
    <motion.div 
    className={styles.card}
    initial={{ opacity: 0, x: -150}}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    animate={{ x: 0}}
    transition={{ duration: 2 }}
    id='test'
    >
            <button onClick={null} className={styles.button}>Пройти Тест!</button>
            <img src={img} alt="" className={styles.img}/>
            <div className={styles.content}>
                <h2>{language === 'ru'? 'Пройти пробный тест' : 'Take a practice test'}</h2>
                <p>{language === 'ru'? 'Проверьте свои знания ПДД вместе с нами. Вам дается 25 минут чтобы ответить на 20 вопросов с иллюстрациями и вариантами ответов, узнайте уровень ваших знаний ПДД ': 'Test your knowledge of traffic rules with us. You are given 25 minutes to answer 20 questions with illustrations and answer options, find out your level of knowledge of traffic rules'}</p>
                <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={clickHandler}
                >
                  {language === 'ru'? 'Пройти Тест!': 'Take the test!'}
                </motion.button>
            </div>
    </motion.div>
  )
}

export default Card2