import React from 'react'
import MainBAnner from '../components/MainBAnner'
import Categories from '../components/Categories'
import BestSellers from '../components/BestSellers'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='mt-10'>
      <MainBAnner />
      <Categories />
      <BestSellers />
      <BottomBanner />
      <NewsLetter />
    </div>
  )
}

export default Home
