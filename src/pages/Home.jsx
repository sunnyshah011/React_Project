import React from 'react'
import Hero from '../component/Hero'
import P_Category from '../component/P_Category'
import R_L from '../component/R_L'
import R_D from '../component/R_D'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <P_Category />
      <R_L />
      <R_D />
      <Footer />
    </div>
  )
}

export default Home