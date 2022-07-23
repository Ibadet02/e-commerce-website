import React, { useState } from 'react'
import { HomeProps } from '../interfaces'
import { Advertisement } from '../components/Advertisement'
import { ProductTypes } from '../components/ProductTypes'
import { BestSeller } from '../components/BestSeller'
import '../styles/Home.scss'

export const Home = ({server, setServer}:HomeProps) => {
  const [activeBox, setActiveBox] = useState<number>(0)
  const handleTypeBoxClick = (el: string, index: number) : void =>{
    setActiveBox(index)
  }
  return (
    <section className='home'>
      <div className="home__flex">
        <Advertisement />
        <ProductTypes
        server = {server}
        setServer = {setServer}
        activeBox = {activeBox}
        setActiveBox = {setActiveBox}
        handleTypeBoxClick = {(el, index)=>handleTypeBoxClick(el,index)}
        />
        <BestSeller
        server = {server}
        setServer = {setServer}
        activeBox = {activeBox}
        />
      </div>
    </section>
  )
}
