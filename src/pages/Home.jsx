import React from 'react'
import Hero from '../component/Hero'
import P_Category from '../component/P_Category'
import R_L from '../component/R_L'
import R_D from '../component/R_D'
import R_A from '../component/R_A'
import R_C from '../component/R_C'
import Footer from '../component/Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <P_Category />
      <R_L />
      <R_D />
      <R_A />
      <R_C />
      <Footer />
    </div>
  )
}

export default Home