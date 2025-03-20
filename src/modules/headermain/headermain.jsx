import React from 'react'
import Header from '../../components/header/header'
import Main from '../main/main'
import styles from './headermain.module.css'

const Header_Main = (props) => {
  const {
    toggleLanguage,
    language    
  } = props

  return (
    <section className={styles.main}>
        <Header
            toggleLanguage={toggleLanguage}
            language={language}/>
        <Main
            language={language}/>
    </section>
  )
}

export default Header_Main