import React from 'react'
import Hero from '../components/Hero'
import Introduction from '../components/Introduction'
import Features from '../components/Features'
import ProductGallery from '../components/ProductGallery'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Introduction/>
      <Features/>
      <ProductGallery/>
      </div>
  )
}

export default Home