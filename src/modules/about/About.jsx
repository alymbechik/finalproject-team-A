import React from 'react'
import styles from './About.module.css'
import ruslan from '../../assets/icons/Rectangle 23.svg'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <article className={styles.about} id='about'>
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
            <h1>Руслан Жакшылыкович</h1>
            <h4>Инструктор по вождению более 25 лет.</h4>
            </div>
            <p>Омурбеков Руслан Жакшылыкович. Водительский стаж более 25 лет. Опыт
                преподавания и инструкторский стаж более 12 лет. Индивидуально подготовил  
                практическому вождению 1500+ за 6 лет преподавания в автошколе выпустил
                более 1600+ студентов. Во время преподавания ПДД в автошколе, обнаружил 
                 ошибки и не полную информацию в ПДД Кыргызстана от 5.02.2022 года.
                  Отталкиваясь от этих ошибок, составил свою методическое пособие по ПДД.</p>
        </div>
        </motion.div>
            </article>
  )
}

export default About