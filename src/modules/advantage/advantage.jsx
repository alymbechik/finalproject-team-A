import React from 'react'
import { ADVANTAGES_DATA_ru, ADVANTAGES_DATA_en } from '../../constants/advantages'
import Advantages from '../../components/advantages/advantages'
import styles from './advantage.module.css'

const Advantage = ({ language }) => {
  return (
    <aside className={styles.flex}>
      {language === 'ru' ? 
      ADVANTAGES_DATA_ru.map((item, idx) => {
        return (
          <div key={idx}>
            <Advantages
              icon={item.icon}
              title={item.title}
            />
          </div>
        )
      })
      :
      ADVANTAGES_DATA_en.map((item, idx) => {
        return (
          <div key={idx}>
            <Advantages
              icon={item.icon}
              title={item.title}
            />
          </div>
        )
      })
      }
    </aside>
  )
}

export default Advantage