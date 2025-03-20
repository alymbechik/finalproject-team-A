import React from 'react'
import News from '../../components/news/news'
import styles from './states.module.css'

const States = (props) => {

    const {
        news,
        language
    } = props

  return (
    news? 
    <article className={styles.states} id='states'>
        <h2>{language === 'ru'? 'Полезные статьи:': 'Useful articles:'}</h2>
        {news.map((item, idx) => {
            return (
                language === 'ru'?
                <div key={idx}>
                    <News
                        image={item.image}
                        text={item.text}
                    />
                </div>
                :
                <div key={idx}>
                    <News
                        image={item.image}
                        text={'At the intersection of Akhunbaeva / Sovetskaya streets there is a sign 14.1. There is a controversial point of view that says approximately the following: supporters of totalitarianism in science, regardless of their level, should be made public. Being just part of the overall picture, striving to displace traditional production, nanotechnology, overcoming the current difficult situation.'}
                    />
                </div>
                )
        })
        }
    </article>
    : 
    <h2 className={styles.error}>Полезных статьей пока нет.</h2>
  )
}

export default States