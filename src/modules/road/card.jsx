import React from 'react'
import styles from './cards.module.css'
import logo from '../../assets/icons/Social media.svg'
import img from '../../assets/icons/Group 33.svg'
import { motion } from 'framer-motion'

const Card = ({ language }) => {
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
              <h2>{language ==='ru'? 'Практическое вождение авто с инструктором:': 'Practical driving with an instructor:'}</h2>
              <div className={styles.text}>
                {language ==='ru'?
              <p>Автошкола «Жакшы - Жол», этот проект для всех жителей Бишкека. 
                Автошкола Бишкека обучают вождению по категориям “B”. 
                Если у вас есть права, но нет практики, наш инструктор поможет вам с практикой. 
                Первые уроки будут с инструктором на его машине Honda Jazz
              (коробка автомат). </p>
              :
              <p>Driving school “Zhakshy-Zhol”, this project is for all residents of Bishkek. 
              Bishkek driving school teaches driving in category “B”. 
              If you have a license but no practice, our instructor will help you with practice. 
              The first lessons will be with an instructor in his Honda Jazz car
            (automatic transmission).</p>
              }
              <div className={styles.info}>
              <p>{language ==='ru'?'Стоимость практики можно узнать у инструктора по телефону или по '
            :
            'The cost of practice can be found out from the instructor by phone or by '  
            }</p>
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