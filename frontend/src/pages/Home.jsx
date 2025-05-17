import React from 'react'
import Main from '../components/Main'
import Featured from '../components/featured/Featured'
import ExclusiveOffer from '../components/ExclusiveOffer'
import Testimonial from '../components/testimonial/Testimonial'
import NewsLetter from '../components/NewsLetter'
const Home = () => {
  return (
    <>
      <Main/>
      <Featured/>
      <ExclusiveOffer/>
      <Testimonial/>
      <NewsLetter/>
    </>
  )
}

export default Home
