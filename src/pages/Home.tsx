import React from 'react'
import { HomeProps } from '../interfaces'
import { Advertisement } from '../components/Advertisement'
import { ProductTypes } from '../components/ProductTypes'
import '../styles/Home.css'

export const Home = ({server, setServer}:HomeProps) => {
  console.log(server)
  return (
    <section className='home'>
      <div className="home__flex">
        <Advertisement />
        <ProductTypes
        server = {server}
        setServer = {setServer}
        />
      </div>
    </section>
  )
}
