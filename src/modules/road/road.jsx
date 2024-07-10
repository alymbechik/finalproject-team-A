import React from 'react'
import Card from './card'
import Card2 from './card2'
import traffic from '../../assets/icons/image 24.svg'
import road from '../../assets/icons/image 24 (1).svg'
import styles from './road.module.css'

const Road = () => {
  return (
    <section className={styles.road} id='test'>
        <div className={styles.text}>
            <h2>Жакшы жол</h2>
            <p>Научитесь водить правильно и безопасно вместе с опытным 
            инструктором по вождению </p>
            <img src={traffic} alt='Светофор' className={styles.traffic}/>
        </div>
        <img src={road} alt='Здесь должна было быть картинка Дороги' className={styles.roadimg}/>
        <div className={styles.cards}>
            <Card/>
            <Card2/>
        </div>
    </section>
  )
}

export default Road