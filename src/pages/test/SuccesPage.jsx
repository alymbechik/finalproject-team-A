import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './test.module.css';
import successimg from '../../assets/icons/Smile.svg';
import home from "../../assets/icons/Frame (1).svg";
import again from "../../assets/icons/Frame (2).svg";
import assignment from "../../assets/icons/assignment.svg";
import { Helmet } from 'react-helmet';
import favicon from '../../assets/icons/icons8-pass-100.png'

const SuccessPage = () => {
    const location = useLocation();
    const { test, currentTest, time, error } = location.state || {};

    return (
      <div className={styles.task}>
            <Helmet>
                <link rel="shortcut icon" href={favicon} type="image/x-icon" />
                <title>Пройдено</title>
            </Helmet>
            <div className={styles.info}>
                <h3>Билет 1</h3>
                <div>
                    <p className={styles.black}>Ошибки: {error || '0'}/2</p>
                    <p>Вопрос {currentTest?.id || '??'}/{test?.length || '20'}</p>
                    <p>Время: {time || '00:00'}</p>
                </div>
            </div>
            <div className={styles.successcard}>
                <img src={successimg} alt="😥" className={styles.successimg}/>
                <h2>Тест пройден!</h2>
                <div className={styles.text}>
                    <p>Билет 1</p>
                    <p>Время: {time || '00:00'}</p>
                    <p>Вопрос {currentTest?.id || '??'}/{test?.length || '20'}</p>
                    <p className={styles.error}>Ошибки: {error || 0}/2</p>
                </div>
                <div className={styles.btns2}>
                    <a href='/'>На Главную<img src={home} alt="" /></a>
                    <a href='/test/0'>Повторить<img src={again} alt="" /></a>
                    <a href='/tests' disabled>Больше тестов<img src={assignment} alt="" /></a>
                </div>
            </div>
        </div>        
    );
};

export default SuccessPage;