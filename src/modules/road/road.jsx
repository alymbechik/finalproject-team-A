import React from 'react'
import Card from './card'
import Card2 from './card2'
import traffic from '../../assets/icons/image 24.svg'
import road from '../../assets/icons/image 24 (1).svg'
import styles from './road.module.css'

const Road = ({ language }) => {
  return (
    <section className={styles.road}>
        <div className={styles.text}>
            <h2>{language === 'ru'? 'Жакшы жол': 'Zhakshy Zhol'}</h2>
            {language === 'ru'? 
            <p>Научитесь водить правильно и безопасно вместе с опытным 
            инструктором по вождению </p>
            :
            <p width='70%'>Learn to drive correctly and safely with an experienced 
            driving instructor ㅤㅤㅤㅤㅤ</p>
          }
            
            <img src={traffic} alt='Светофор' className={styles.traffic}/>
        </div>
        <img src={road} alt='Здесь должна было быть картинка Дороги' className={styles.roadimg}/>
        <div className={styles.cards}>
            <Card
            language={language}
            />
            <Card2
            language={language}
            />
        </div>
    </section>
  )
}

export default Road