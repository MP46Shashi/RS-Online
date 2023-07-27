import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from './components/Footer/Footer'
import BottomHeader from './components/Header/Bottomheader/BottomHeader'
import MiddleHeader from './components/Header/MiddileHeader/MiddleHeader'
import TopHeader from './components/Header/Topheader/TopHeader'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Trackingoder from './pages/Trackingoder'

export default function App() {
  return (
    <div>
      {/* <Header/> */}
      
      <TopHeader/>
      <MiddleHeader/>
      <BottomHeader/>
      <BrowserRouter>
        <Routes>
          <Route path='/*' element={<Home/>} />
          <Route path='/Trackingoder' element={<Trackingoder/>} />
          <Route path='/Blogs' element={<Blog/>} />
          <Route path='/contact-us' element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  )
}
