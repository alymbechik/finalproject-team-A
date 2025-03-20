import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from './test.module.css';
import failimg from '../../assets/icons/Frame.svg';
import home from "../../assets/icons/Frame (1).svg";
import again from "../../assets/icons/Frame (2).svg";
import assignment from "../../assets/icons/assignment.svg";
import { Helmet } from 'react-helmet';
import favicon from '../../assets/icons/icons8-fail-100.png'

const FailurePage = () => {
    const location = useLocation();
    const { test, currentTest, time, error, isTimeOver } = location.state || {};

    return (
       <div className={`${styles.task} ${styles.fail}`}>
            <Helmet>
                <link rel="shortcut icon" href={favicon} type="image/x-icon" />
                <title>Провалено</title>
            </Helmet>
            <div className={styles.info}>
                <h3>Билет 1</h3>
                <div>
                    <p className={styles.error}>Ошибки: {isTimeOver? error : '2'}/2</p>
                    <p>Вопрос {currentTest?.id || '??'}/{test?.length || '20'}</p>
                    <p>Время: {time || '00:00'}</p>
                </div>
            </div>
                <div className={styles.failcard}>
                    <img src={failimg} alt="😥" className={styles.failimg}/>
                    <h2>{isTimeOver? 'Время вышло' : 'Тест не пройден!'}</h2>
                    <div className={styles.text}>
                        <p>Билет 1</p>
                        <p>Время: {time || '00:00'}</p>
                        <p>Вопрос {currentTest?.id || '??'}/{test?.length || '20'}</p>
                        <p className={styles.error}>Ошибки: {isTimeOver? error : '2'}/2</p>
                    </div>
                    <div className={styles.btns2}>
                        <a href='/'>На Главную<img src={home} alt="" /></a>
                        <a href='/test/0'>Повторить<img src={again} alt="" /></a>
                        <a href='#' disabled>Больше тестов<img src={assignment} alt="" /></a>
                    </div>
                </div>
        </div>        
    );
};

export default FailurePage;
