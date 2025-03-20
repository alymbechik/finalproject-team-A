import React, { useEffect, useState } from 'react';
import styles from './test.module.css';
import img1 from '../../assets/icons/Img.svg';
import { useParams, useNavigate } from 'react-router-dom';
import { showError } from '../../utils/alert/alert';
import { Helmet } from 'react-helmet';
import favicon from '../../assets/icons/icons8-test-results-100.png'

const Test = ({ test }) => { 
    const { id } = useParams();
    const navigate = useNavigate();
    const [error, setError] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isPressed, setIsPressed] = useState(false);
    const [isCorrect, setIsCorrect] = useState(null);
    const [isIncorrect, setIsIncorrect] = useState(false);
    let minute = 29;
    let second = 60;
    const [time, setTime] = useState('');
    const [intervalId, setIntervalId] = useState(null);
    const [isTimeOver, setIsTimeOver] = useState(false);
    const [isAnswer, setIsAnswer] = useState('')
    const [isSOrE, setIsSOrE] = useState(false)
    const [isSecretOn, setIsSecretOn] = useState(false)

    const handleRadioChange = (e) => {
        setSelectedAnswer(e.target.value);
        setIsAnswer(e.target.alt);      
    } 

    const handleSubmit = () => {
        if (!selectedAnswer){
            showError('Выберите действие!');
        } else {
            setIsPressed(true);
            if (selectedAnswer === 'false') {
                setError(error => error + 1);
                setIsCorrect(false);
                if (error === 1) {
                    setError(2)
                    setIsIncorrect(true);
                    clearInterval(intervalId);
                    navigate('/test/failure', { state: { test, currentTest, time, error, isTimeOver } });
                }
            } else {
                setIsCorrect(true);
            }
        }
    };

    const nextQuestion = () => {
        if (currentTest === test[test.length - 1]) {
            return navigate('/test/success', { state: { test, currentTest, time, error } });
        } else {
            setSelectedAnswer(null);  
            setIsPressed(false);
            setIsCorrect(null);

            setTimeout(() => {
                navigate(`/test/${parseInt(id) + 1}`);
            }, 0);
        }
    };
    

    const secondTimer = () => {
        second--;
        if (!minute) {
            setIsTimeOver(true);
            setIsIncorrect(true);
            clearInterval(intervalId);
            navigate('/test/failure', { state: { test, currentTest, time, error, isTimeOver, isIncorrect } });
        } else if (second === 0 && minute >= 0) {
            second = 59;
            minute--;
        }
        setTime(`${minute < 10 ? '0' : ''}${minute}:${second < 10 ? '0' : ''}${second}`);
    };

    useEffect(() => {
        if (test) {
            console.log(test);
            
            const id = setInterval(secondTimer, 1000);
            setIntervalId(id);
            return () => clearInterval(id);
        }
    }, []);

    const currentTest = test[id];
    
    useEffect(() => {
        setSelectedAnswer(null);
        setIsPressed(false);
        setIsCorrect(null);
        if (currentTest?.id === 8 || currentTest?.id === 16) {
            setIsSOrE(true)
        } else {
            setIsSOrE(false)
        }
    }, [id]);
    
    const handleKeyPress = (e) => {
        if (e.key === 'Ё' || e.key === '`') {
          const userInput = prompt('Кто самый лучший?');
          if (userInput == 'Алымбек' || userInput == 'Alymbek') {
            setIsSecretOn(!isSecretOn)
          }
        }
      };
    
      useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
    
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      }, []);

    if (!test) {
        return <div>Теста нет</div>;
    }
    // else if(test){
    //     if (!currentTest) {
    //         return navigate('/test/success', { state: { test, currentTest, time, error } });
    //     }
    // }

    return (
        <div className={isIncorrect ? `${styles.task} ${styles.fail}` : styles.task}>
            <Helmet>
                <link rel="shortcut icon" href={favicon} type="image/x-icon" />
                <title>{`Задание - ${currentTest?.id}#`}</title>
            </Helmet>
            <div className={styles.info}>
                <h3>Билет 1</h3>
                <div>
                    <p className={isIncorrect ? styles.black : styles.error}>Ошибки: {error}/2</p>
                    <p>Вопрос {currentTest?.id}/{test.length}</p>
                    <p>Время: {time}</p>
                </div>
            </div>
            <div className={styles.card}>
                <div className={styles.title}>
                    <h3>{currentTest?.id}. {currentTest?.question}</h3>
                    <div>
                        <img src={currentTest?.image || img1} alt="" className={isSOrE? styles.taskimglong : styles.taskimg} />
                    </div>
                </div>
                <div className={styles.answers}>
                    {currentTest?.answers.map((item, idx) => (
                        <label key={idx} className={styles.label}>
                            <input
                                type="radio"
                                name={`radio-${currentTest?.id}`}
                                value={item.correctly.toString()}
                                alt={item.answer}
                                onChange={handleRadioChange}
                                checked={isAnswer === item.answer}
                                disabled={isPressed}
                            />
                            {item.answer} {isSecretOn? item.correctly? '✔' : '❌' : ''}
                        </label>
                    ))}
                </div>
                {isPressed ?
                    <div>
                        {currentTest?.explanation}
                        <div className={styles.btns}>
                            {isCorrect ?
                                <button className={styles.correct}>Ответ Верный!</button>
                                :
                                <button className={styles.incorrect}>Не верный ответ</button>
                            }
                            <hr className={styles.hr}/>
                            <button className={styles.submit} onClick={nextQuestion}>Следующий</button>
                        </div>
                    </div>
                    :
                    <div className={styles.enter}>
                        <hr className={styles.hr}/>
                        <button className={styles.submit} onClick={handleSubmit}>Отправить</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Test;
