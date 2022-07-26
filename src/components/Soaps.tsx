import React from 'react'
// import { ReactComponent as SoapImg } from '../assets/images/soaps.svg';
import SoapImg from '../assets/images/soaps.png'
import '../styles/Soaps.scss'


export const Soaps = () => {
  return (
    <section className='soaps'>
        <div className='soaps__flex'>
            <div className="soaps__flex__left">
                <h2>Our luxury soaps are 100% natural providing nourishing benefits for your skin.</h2>
                <a href="#">SHOP ALL</a>
            </div>
            <div className="soaps__flex__right">
                <img src={SoapImg} alt="Soaps" />
            </div>
        </div>
    </section>
  )
}
