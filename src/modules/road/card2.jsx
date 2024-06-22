import React from 'react'
import styles from './road.module.css'
import img from '../../assets/icons/Group 34.svg'
import { motion } from 'framer-motion'

const Card2 = () => {
  return (
    <motion.div className={styles.card}
    initial={{ opacity: 0, x: -150}}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    animate={{ x: 0}}
    transition={{ duration: 2 }}
    >
            <button onClick={null} className={styles.button}>Пройти Тест!</button>
            <img src={img} alt="" className={styles.img}/>
            <div className={styles.content}>
                <h2>Пройти пробный тест</h2>
                <p>Проверьте свои знания ПДД вместе с нами. Вам дается 25 минут чтобы ответить на 20 вопросов с иллюстрациями и вариантами ответов, узнайте уровень ваших знаний ПДД </p>
                <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={null}
                >Пройти Тест!
                </motion.button>
            </div>
    </motion.div>
  )
}

export default Card2