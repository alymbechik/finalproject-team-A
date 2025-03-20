import React from 'react'
import styles from './About.module.css'
import ruslan from '../../assets/icons/Rectangle 23.svg'
import { motion } from 'framer-motion'

const About = ({ language }) => {
  return (
    <article className={styles.about}>
    <motion.div className={styles.container}
    initial={{ opacity: 0, x: -150}}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    animate={{ x: 0}}
    transition={{ duration: 2 }}
    >
        <img src={ruslan} alt="" />
        <div className={styles.info}>
            <div className={styles.title}>
            <h1>{language === 'ru'? 'Руслан Жакшылыкович' : 'Ruslan Zhakshylykovich'}</h1>
            <h4>{language === 'ru'? 'Инструктор по вождению более 25 лет.' : 'Driving instructor for over 25 years.'}</h4>
            </div>
            <p>{language === 'ru'?'Омурбеков Руслан Жакшылыкович. Водительский стаж более 25 лет. Опыт преподавания и инструкторский стаж более 12 лет. Индивидуально подготовил практическому вождению 1500+ за 6 лет преподавания в автошколе выпустил более 1600+ студентов. Во время преподавания ПДД в автошколе, обнаружил ошибки и не полную информацию в ПДД Кыргызстана от 5.02.2022 года. Отталкиваясь от этих ошибок, составил свою методическое пособие по ПДД.': 'Omurbekov Ruslan Zhakshylykovich. Driving experience over 25 years. Experience teaching and instructor experience for more than 12 years. Individually prepared Practical driving 1500+ in 6 years of teaching at a driving school more than 1600+ students. While teaching traffic rules at a driving school, I discovered errors and incomplete information in the traffic rules of Kyrgyzstan dated February 5, 2022. Based on these mistakes, I compiled my own manual on traffic rules.'}</p>
        </div>
        </motion.div>
            </article>
  )
}

export default About