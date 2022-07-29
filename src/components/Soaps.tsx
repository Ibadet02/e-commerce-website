import React from 'react'
import { SoapsProps } from '../interfaces'
// import { ReactComponent as SoapImg } from '../assets/images/soaps.svg';
import SoapImg from '../assets/images/soaps.png'
import '../styles/Soaps.scss'


export const Soaps = ({darkMode}:SoapsProps) => {
  return (
    <section className='soaps'>
        <div className='soaps__flex'>
            <div className="soaps__flex__left">
                <h2
                className={`soaps__flex__left--text ${darkMode && 'dark'}`}
                >Our luxury soaps are 100% natural providing nourishing benefits for your skin.</h2>
                <a className={`soaps__flex__left--link ${darkMode && 'dark'}`} href="#">SHOP ALL</a>
            </div>
            <div className="soaps__flex__right">
                <img src={SoapImg} alt="Soaps" />
            </div>
        </div>
    </section>
  )
}
