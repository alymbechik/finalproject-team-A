import React, { useState } from 'react'
import styles from './test.module.css'

const Answers = (props) => {

    const { test } = props

    const [isShortly, setIsShortly] = useState(false)

    const handleSubmit = () => {
        setIsShortly(!isShortly)
        isShortly ? console.log('Успешно изменено на короткую версию') : console.log('Успешно изменено на обычную версию');
    }

  return (
    <div className={styles.answers__container}>
        <h1>Ответы на вопросы:</h1>
        <button className={`${styles.submit} ${styles.margin}`} onClick={handleSubmit}>{isShortly? 'Смотреть полную версию' : 'Смотреть короткую версию'}</button>
        { test.map((item, idx) => {
            return (
                isShortly ? 
                <div id={idx}>
                    <hr />
                    <h2>№{item.id}.</h2>
                    {item.answers.map((item, idx) => {
                        return (
                            <p>
                               {idx + 1}. {item.answer} - <span className={item.correctly? styles.correct__answer : styles.incorrect__answer }>{item.correctly ? 'Правильный ответ' : 'Неправильный ответ'}</span>
                            </p>
                        )
                    })}
                    <hr />
                </div>
                :
                <div id={idx} className={styles.answers__card}>
                    <hr />
                    <h2>№{item.id}. {item.question}</h2>
                    <img src={item.image} alt="" />
                    {item.answers.map((item, idx) => {
                        return (
                            <p>
                                {idx + 1}. {item.answer} - <span className={item.correctly? styles.correct__answer : styles.incorrect__answer }>{item.correctly ? 'Правильный ответ' : 'Неправильный ответ'}</span>
                            </p>
                        )
                    })}
                    <br />
                    <p>
                        Объяснение: <br />
                        {item.explanation}
                    </p>
                    <br />
                    <hr />
                </div>
            )
        })
        }
    </div>
  )
}

export default Answers