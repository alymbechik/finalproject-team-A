import React, { useState } from 'react';
import logo from '../../assets/icons/Logo.svg';
import title from '../../assets/icons/Logo (1).svg';
import web from '../../assets/icons/Frame 27.svg';
import styles from './header.module.css';
import title2 from '../../assets/icons/Logo (2).svg';
import logo2 from '../../assets/icons/Logo (3).svg';

const Header = (props) => {
  
  const {
    toggleLanguage,
    language    
  } = props

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
        <div className={styles.logos}>
          <div>
            <img src={logo} alt="" className={styles.logoblack} />
            <img src={title} alt="" className={styles.logoblack}/>
          </div>
          <div>
            <img src={logo2} alt="" className={styles.logowhite}/>
            <img src={title2} alt="" className={styles.logowhite}/>
          </div>
        </div>
        <nav className={isMenuOpen ? styles.open : ''}>
          <ul>
            <li><a href='#about'> {language === 'ru' ? 'Обо мне' : 'About me'} </a></li>
            <li><a href='#method'> {language === 'ru' ? 'Методическое пособие' : 'Method Guide'} </a></li>
            <li><a href='#states'> {language === 'ru' ? 'Статьи' : 'Articles'} </a></li>
            <li><a href='#test'> {language === 'ru' ? 'Тест' : 'Test'} </a></li>
          </ul>
        </nav>
        <div>
          <img src={web} alt="" title={language === 'ru' ? 'Поменять язык' : 'Change language '} className={styles.web} onClick={toggleLanguage}/>
          <div className={`${styles.burger} ${isMenuOpen ? styles.open : ''}`} onClick={toggleMenu}>
            <span></span>
          </div>
        </div>
    </header>
  );
}

export default Header;
