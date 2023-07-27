import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from './components/Footer/Footer'
import BottomHeader from './components/Header/Bottomheader/BottomHeader'
import MiddleHeader from './components/Header/MiddileHeader/MiddleHeader'
import TopHeader from './components/Header/Topheader/TopHeader'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Trackingoder from './pages/Trackingoder'

import store from "./store/store"


export default function App() {
  return (
    <div>
      {/* <Header/> */}
    
      <Provider store = {store}>
      
      <BrowserRouter>
      <TopHeader/>
      <MiddleHeader/>
      <BottomHeader/>
        <Routes>
          <Route path='/*' element={<Home/>} />
          <Route path='/Trackingoder' element={<Trackingoder/>} />
          <Route path='/Blogs' element={<Blog/>} />
          <Route path='/contact-us' element={<Contact/>}/>
        </Routes>
        
      <Footer/>
      </BrowserRouter>
      </Provider>
    </div>
  )
}
