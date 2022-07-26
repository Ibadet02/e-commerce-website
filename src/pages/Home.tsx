import React, { useState } from 'react'
import { animation } from '../interfaces'
import { HomeProps } from '../interfaces'
import { Advertisement } from '../components/Advertisement'
import { ProductTypes } from '../components/ProductTypes'
import { BestSeller } from '../components/BestSeller'
import { Collection } from '../components/Collection'
import { Soaps } from '../components/Soaps'
import '../styles/Home.scss'

export const Home = ({server, setServer}:HomeProps) => {
  const [style, setStyle] = useState<animation>({
    text: {animation: 'skeleton-loading1 2s linear backwards alternate'},
    image: {animation: 'skeleton-loading1 2s linear backwards alternate'},
  })
  const [activeBox, setActiveBox] = useState<number>(0)
  const handleTypeBoxClick = (el: string, index: number) : void =>{
    setActiveBox(index)
    setStyle(prev=>{
      return {
        ...prev,
        text:{animation: `skeleton-loading${index+1} 2s linear backwards alternate`},
        image:{animation: `skeleton-loading${index+1} 2s linear backwards alternate`},
      }
    })
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
        handleTypeBoxClick = {(el:string, index:number)=>handleTypeBoxClick(el,index)}
        />
        <BestSeller
        server = {server}
        setServer = {setServer}
        activeBox = {activeBox}
        componentType = 'bestSeller'
        style = {style}
        />
        <Collection />
        <Soaps />
        <BestSeller
        server = {server}
        setServer = {setServer}
        activeBox = {activeBox}
        componentType = 'trend'
        style = {style}
        />
      </div>
    </section>
  )
}
