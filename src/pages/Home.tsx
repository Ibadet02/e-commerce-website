import React from 'react'
import { Advertisement } from '../components/Advertisement'
import { ProductTypes } from '../components/ProductTypes'
import '../styles/Home.css'
export const Home: React.FC = () => {
  return (
    <section className='home'>
      <div className="home__flex">
        <Advertisement />
        <ProductTypes />
      </div>
    </section>
  )
}
