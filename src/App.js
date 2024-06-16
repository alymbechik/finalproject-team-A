import React, {useEffect, useState} from 'react';
import './App.css'
import Advantages from "./components/advantages/advantages";
import {ADVANTAGES_DATA} from "./constants/advantages";
import axios from "axios";
import News from "./components/news/news";
import Header from './components/header/header';
import Main from './modules/main/main';
import background from './assets/icons/Main.svg'

const App = () => {

    const [news, setNews] = useState([])

    async function getNews () {
        const response = await axios.get('https://codify-graduation-project.vercel.app/news')
        console.log(response.data)
        setNews(response.data)
    }

    useEffect(() => {
        getNews()
    });

    return (
        <div className='App'>
            <div className='main'>
            <Header/>
            <Main/>
            </div>
            {/* <img src={background} alt=''/> */}
            <div className='flex'>
                {ADVANTAGES_DATA.map((item, idx) => {
                    return (
                        <div key={idx}>
                            <Advantages
                                icon={item.icon}
                                title={item.title}
                            />
                        </div>
                    )
                })}
            </div>

            <div className='container'>
                <h2 style={{textAlign: 'center', marginTop: '50px'}}>Полезные статьи:</h2>
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
            </div>
        </div>
    );
};

export default App;