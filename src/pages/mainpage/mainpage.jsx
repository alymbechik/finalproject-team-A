import React from 'react'
import Header_Main from '../../modules/headermain/headermain'
import Advantage from '../../modules/advantage/advantage'
import About from '../../modules/about/About'
import Method from '../../modules/method/Method'
import States from '../../modules/states/states'
import Road from '../../modules/road/road'
import Footer from '../../components/footer/Footer'


const MainPage = (props) => {

    const {
      bookName,
      handleInputChange,
      postBook,
      news,
      toggleLanguage,
      language
    } = props

  return (
    <div className='App'>
        <Header_Main
            toggleLanguage={toggleLanguage}
            language={language}/>
        <Advantage
            language={language}/>
        <hr id='about'/>
        <About
            language={language}/>
        <Method
          bookName={bookName}
          handleInputChange={handleInputChange}
          postBook={postBook}
          language={language}
        />
        <States news={news}
            language={language}/>
        <div>
          <Road
            language={language}/>
          <Footer
            language={language}/>
        </div>
    </div>
  )
}

export default MainPage