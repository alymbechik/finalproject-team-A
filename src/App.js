import React, {useEffect, useState} from 'react';
import axios from "axios";
import CircularIndeterminate from './components/Loading/loading';
import MainRoutes from './routes/routes';
import { showError } from './utils/alert/alert';

const App = () => {
    const [language, setLanguage] = useState('ru');
    const [news, setNews] = useState([])
    const [Loading, setLoading] = useState(false)
    const [bookName, setBookName] = useState('');
    const [test, setTest] = useState([])

    const toggleLanguage = () => {
        setLanguage((prevLanguage) => (prevLanguage === 'ru' ? 'en' : 'ru')); 
    };

    const handleInputChange = (event) => {
        setBookName(event.target.value);
    }

    const postBook = async () => {
        try {
            const response = await axios.post('https://codify-graduation-project.vercel.app/send-message', { message: bookName });
            console.log('Response:', response);
        } catch (error) {
            showError('Ошибка запроса', 'Повторите попытку позже')
        }
    }

    async function getNews () {
        setLoading(true)
        try {
            const response = await axios.get('https://codify-graduation-project.vercel.app/news')
            setNews(response.data)
        } catch (e) {
            if (e?.response?.status === 401) {
                showError('Неавторизованный доступ!')
            } 
            else if(e?.response?.status === 403){
                showError('Нет доступа к получению данных', 'Проверьте токен!')
            } 
            else{
                showError('Ошибка запроса', 'Повторите попытку позже')
            }           
        } 
        finally{
            setLoading(false)
        }
    }

    const getTest = async () => {
        setLoading(true)
        try{
            const response = await axios.get('https://codify-graduation-project.vercel.app/test')
            setTest(response.data.questions);
            console.log(response.data.questions);
        }
        catch (e) {
            if (e?.response?.status === 401) {
                showError('Неавторизованный доступ!')
            } 
            else if(e?.response?.status === 403){
                showError('Нет доступа к получению данных', 'Проверьте токен!')
            } 
            else{
                showError('Ошибка запроса', 'Повторите попытку позже')
            }  
        } 
        finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getNews()
        getTest()
    }, []);

    return (
        <div className='App'>
        {Loading?
            <CircularIndeterminate/>
            :
                <MainRoutes
                    bookName={bookName}
                    handleInputChange={handleInputChange}
                    postBook={postBook}
                    news={news}
                    test={test}
                    toggleLanguage={toggleLanguage}
                    language={language}
                />
            }
        </div>
    );
};

export default App;