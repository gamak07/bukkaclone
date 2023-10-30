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
import Others from './components/Others'
import Headroom from 'react-headroom'

function App() {
 

  return (
    <>
      <Headroom>
        <Header />
      </Headroom>
        <CarouselSection />
        <Info />
        <ShopCategories />
        <Trending />
        <GridSection />
        <LatestNews />
        <Others />
    </>
  )
}

export default App
