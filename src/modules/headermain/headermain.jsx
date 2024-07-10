import React from 'react'
import Header from '../../components/header/header'
import Main from '../main/main'
import styles from './headermain.module.css'

const Header_Main = () => {
  return (
    <section className={styles.main}>
        <Header/>
        <Main/>
    </section>
  )
}

export default Header_Main