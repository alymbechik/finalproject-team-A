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
import Advantage from './modules/advantage/advantage';
import States from './modules/states/states';
import Road from './modules/road/road';
import Header_Main from './modules/headermain/headermain';

const App = () => {

    const [news, setNews] = useState([])
    const [Loading, setLoading] = useState(false)
    const [bookName, setBookName] = useState('');

    const handleInputChange = (event) => {
    setBookName(event.target.value);
    }

    const postBook = async () => {
        try {
            const response = await axios.post('https://codify-graduation-project.vercel.app/send-message', { message: bookName });
            console.log('Response:', response.data);
        } catch (error) {
            console.error('Error:', error);
        }
    }

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
        <div className='App'>
        {Loading?
            <CircularIndeterminate/>
            :
            <div className='App'>
                <Header_Main/>
                <Advantage/>
                <hr />
                <About/>
                <Method
                bookName={bookName}
                handleInputChange={handleInputChange}
                postBook={postBook}
                />
                <States news={news}/>
                <div>
                    <Road/>
                    <Footer/>
                </div>

            </div>
            }
        </div>
    );
};

export default App;