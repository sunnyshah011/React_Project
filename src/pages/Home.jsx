import React from 'react'
import Hero from '../component/Hero'
import Menubar from '../component/Category_Navbar'
import P_Category from '../component/P_Category'
import R_L from '../component/R_L'
import R_D from '../component/R_D'

const Home = () => {
  return (
    <div>
      <Hero />
      <Menubar Category="Category" More="View"/>
      <P_Category />
      <Menubar Category="R_L" More="More" />
      <R_L />
      <Menubar Category="R_D" More="More" />
      <R_D />
    </div>
  )
}

export default Home