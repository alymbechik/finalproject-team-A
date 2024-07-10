import React from 'react'
import { ADVANTAGES_DATA } from '../../constants/advantages'
import Advantages from '../../components/advantages/advantages'
import styles from './advantage.module.css'

const Advantage = () => {
  return (
    <aside className={styles.flex}>
      {ADVANTAGES_DATA.map((item, idx) => {
        return (
          <div key={idx}>
            <Advantages
              icon={item.icon}
              title={item.title}
            />
          </div>
        )
      })}
    </aside>
  )
}

export default Advantage