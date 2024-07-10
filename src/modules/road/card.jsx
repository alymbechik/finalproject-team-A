import React from 'react'
import styles from './cards.module.css'
import logo from '../../assets/icons/Social media.svg'
import img from '../../assets/icons/Group 33.svg'
import { motion } from 'framer-motion'

const Card = () => {
  return (
    <motion.div className={styles.card}
    initial={{ opacity: 0, x: -150}}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    animate={{ x: 0}}
    transition={{ duration: 2 }}
    >
            <img src={img} alt="" className={styles.img}/>
            <div className={styles.content}>
              <h2>Практическое вождение авто с инструктором:</h2>
              <div className={styles.text}>
              <p>Автошкола «Жакшы - Жол», этот проект для всех жителей Бишкека. Автошкола Бишкека обучают вождению по категориям “B”. Если у вас есть права, но нет практики, наш инструктор поможет вам с практикой. Первые уроки будут с инструктором на его машине Honda Jazz
              (коробка автомат). </p>
              <div className={styles.info}>
              <p>Стоимость практики можно узнать у инструктора по телефону или по </p>
                <div className={styles.whatsapp}>
                <img src={logo} alt="" />
                <a href='https://web.whatsapp.com/'>WhatsApp</a>
                </div>
              </div>
              </div>
            </div>
    </motion.div>
  )
}

export default Card