import React from 'react'
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import CarouselSection from './components/CarouselSection'
import Info from './components/Info'
import ShopCategories from './components/ShopCategories'
import Trending from './components/Trending'
import GridSection from './components/GridSection'
import LatestNews from './components/LatestNews'

function App() {
 

  return (
    <>
        <Header />
        <CarouselSection />
        <Info />
        <ShopCategories />
        <Trending />
        <GridSection />
        <LatestNews />
    </>
  )
}

export default App
