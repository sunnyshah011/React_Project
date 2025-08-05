import React from 'react'
import Hero from '../component/Hero'
import Menubar from '../component/Menubar'
import Category from '../component/Category'
import LatestProduct from '../component/LatestProduct'
import R_page from '../component/R_page'

const Home = () => {
  return (
    <div>
      <Hero />
      <Menubar Category="Category" More="View"/>
      <Category />
      <Menubar Category="Latest" More="More" />
      <LatestProduct />
      <Menubar Category="R" More="More" />
      <R_page />
    </div>
  )
}

export default Home