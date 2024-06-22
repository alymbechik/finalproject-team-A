import React from 'react'
import logo from '../../assets/icons/Logo.svg'
import title from '../../assets/icons/Logo (1).svg'
import web from '../../assets/icons/Frame 27.svg'
import styles from './header.module.css'
import menu from '../../assets/icons/menu.svg'
import title2 from '../../assets/icons/Logo (2).svg'
import logo2 from '../../assets/icons/Logo (3).svg'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.logos}>
        <div>
            <img src={logo} alt="" className={styles.logoblack} />
            <img src={title} alt="" className={styles.logoblack}/>
        </div>
        <div>
          <img src={logo2} alt=""  className={styles.logowhite}/>
          <img src={title2} alt=""  className={styles.logowhite}/>
        </div>
      </div>
        <nav>
            <a href='#about'>Обо мне</a>
            <a href='#method'>Методическое пособие</a>
            <a href='#states'>Статьи</a>
            <a href='#test'>Тест</a>
        </nav>
        <div>
        <img src={web} alt="" className={styles.web}/>
        <img src={menu} alt="" className={styles.menu} />
        </div>
    </div>
  )
}

export default Header