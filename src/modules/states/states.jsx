import React from 'react'
import News from '../../components/news/news'
import styles from './states.module.css'

const States = (props) => {

    const {
        news
    } = props

  return (
    <article className={styles.states} id='states'>
        <h2>Полезные статьи:</h2>
        {news.map((item, idx) => {
            return (
                <div key={idx}>
                    <News
                        image={item.image}
                        text={item.text}
                    />
                </div>
                )
        })}
    </article>
  )
}

export default States