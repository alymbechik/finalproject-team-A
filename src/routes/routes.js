import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import MainPage from '../pages/mainpage/mainpage';
import Test from '../pages/test/test';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import SuccessPage from '../pages/test/SuccesPage';
import FailurePage from '../pages/test/Failure';
import Answers from '../pages/test/answers';

const MainRoutes = (props) => {
  const {
    toggleLanguage,
    language,
    bookName,
    handleInputChange,
    postBook,
    news,
    test,
  } = props;

  return (
    <div>
      <Routes>
        <Route path='/' element={
          <MainPage
            bookName={bookName}
            handleInputChange={handleInputChange}
            postBook={postBook}
            news={news}
            toggleLanguage={toggleLanguage}
            language={language}
          />
        } />
        <Route path='/test' element={<Navigate to='/test/0' />} />
        <Route path='/test/:id' element={
          <Test 
            test={test}
          />
        } />
        <Route path='/*' element={<ErrorPage />} />
        <Route path='/test/success' element={<SuccessPage/>}/>
        <Route path='/test/failure' element={<FailurePage/>}/>
        <Route path='/test/answers' element={
          <Answers 
          test={test} 
          />} />
      </Routes>
    </div>
  );
};

export default MainRoutes;