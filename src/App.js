
import React, { Component } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
// import News from './components/News'
import NewsList from './components/NewsList'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsTwo from './components2/NewsTwo'
import NewsProvider from './context/NewsProvider';

export default class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API


  render() {
    return (
      <>
        <NewsProvider>
          <BrowserRouter>
            <Navbar />
            <NewsList />
            <Routes>
              <Route exact path='/' element={<NewsTwo key="general" category="general" apiKey ={this.apiKey}/>} />
             
              <Route exact path='/business' element={<NewsTwo key="business" category="business" apiKey ={this.apiKey}/>} />
              <Route exact path='/science' element={<NewsTwo key="science" category="science" apiKey ={this.apiKey}/>} />
              <Route exact path='/health' element={<NewsTwo key="health" category="health" apiKey ={this.apiKey}/>} />
              <Route exact path='/sports' element={<NewsTwo key="sports" category="sports" apiKey ={this.apiKey}/>} />
              <Route exact path='/technology' element={<NewsTwo key="technology" category="technology" apiKey ={this.apiKey}/>} />
              <Route exact path='/entertainment' element={<NewsTwo key="entertainment" category="entertainment" apiKey ={this.apiKey}/>} />

            </Routes>
            <Footer />
          </BrowserRouter>
        </NewsProvider>
      </>
    )
  }
}



