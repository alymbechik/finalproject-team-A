import React, {useEffect, useState} from 'react';
import Advantages from "./components/advantages/advantages";
import {ADVANTAGES_DATA} from "./constants/advantages";
import axios from "axios";
import News from "./components/news/news";
import Header from './components/header/header';
import Main from './modules/main/main';
import About from './modules/about/About';
import Method from './modules/method/Method';
import Card from './modules/road/card';
import Card2 from './modules/road/card2';
import traffic from './assets/icons/image 24.svg'
import road from './assets/icons/image 24 (1).svg'
import Footer from './components/footer/Footer';
import CircularIndeterminate from './components/Loading/loading';

const App = () => {

    const [news, setNews] = useState([])
    const [Loading, setLoading] = useState(false)

    async function getNews () {
        setLoading(true)
        try {
        const response = await axios.get('https://codify-graduation-project.vercel.app/news')
        setNews(response.data)
        } catch (e) {
            if (e?.response?.status === 401) {
                alert('Неавторизованный доступ!')
              } else if(e?.response?.status === 403){
                alert('Нет доступа к получению данных', 'Проверьте токен!')
              } else{
                alert('Ошибка запроса', 'Повторите попытку позже')
              }           
        } finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getNews()
    }, []);

    return (
        Loading?
            <CircularIndeterminate/>
            :
        <div className='App'>
            <section className='main'>
                <header>
                    <Header/>
                </header>
                <main>
                    <Main/>
                </main>
            </section>
            <aside className='flex'>
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
            </aside>

            <hr />
            <article className='about' id='about'>
            <About/>
            </article>
            <section className='method' id='method'>
                <Method />
            </section>
            <article className='container' id='states'>
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
            <div>
            <section className='road' id='test'>
                <div className='text'>
                    <h2>Жакшы жол</h2>
                    <p>Научитесь водить правильно и безопасно вместе с опытным 
                        инструктором по вождению </p>
                        <img src={traffic} alt='Светофор' className='traffic'/>
                </div>
                <img src={road} alt='Road' className='roadimg'/>
                <div className='cards'>
                <Card/>
                <Card2/>
                </div>
            </section>
            <footer>
                <Footer/>
            </footer>
            </div>
        </div>
    );
};

export default App;