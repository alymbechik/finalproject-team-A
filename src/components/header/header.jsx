import React from 'react'
import logo from '../../assets/icons/Logo.svg'
import title from '../../assets/icons/Logo (1).svg'
import web from '../../assets/icons/Frame 27.svg'
import styles from './header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
        <div>
            <img src={logo} alt="" />
            <img src={title} alt="" className={styles.title}/>
        </div>
        <nav>
            <a href='#'>Обо мне</a>
            <a href='#'>Методическое пособие</a>
            <a href='#'>Статьи</a>
            <a href='#'>Тест</a>
        </nav>
        <img src={web} alt="" />
    </div>
  )
}

export default Header