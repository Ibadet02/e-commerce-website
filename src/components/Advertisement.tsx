import React from 'react'
import { AdvertisementProps } from '../interfaces';
import { ReactComponent as Pharmacy } from '../assets/images/pharmacy.svg';
import '../styles/Advertisement.css'
export const Advertisement = ({darkMode}:AdvertisementProps) => {
  return (
    <section className={`advertisement ${darkMode && 'dark'}`}>
        <div className="advertisement__flex">
            <div className='ads-text'>
                <h1>Pear kiwi & Mint</h1>
                <p>
                    They say that home is where the heart is. Perhaps that’s why a feeling of loss is so apparent when you are far from the ones you love. 
                </p>
            </div>
            <div className='ads-container'>
                {/* <svg className='green-hole' viewBox="0 0 906 802" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M109.009 661.842C-281.639 215.861 486.237 -192.683 716.061 -422.506C945.884 -652.33 1318.5 -652.33 1548.33 -422.507C1778.15 -192.683 1778.15 179.935 1548.33 409.758C1318.5 639.582 539.284 1027.77 109.009 661.842Z" fill="#5FD788"/>
                </svg>
                <svg className='green-hole-mobile' width="219" height="180" viewBox="0 0 219 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.1641 160.343C-35.4255 103.73 62.0502 51.8685 91.2244 22.6943C120.399 -6.47994 167.699 -6.47998 196.874 22.6943C226.048 51.8685 226.048 99.1693 196.874 128.344C167.699 157.518 68.784 206.795 14.1641 160.343Z" fill="#5FD788"/>
                </svg> */}
                <Pharmacy />
            </div>
        </div>
    </section>
  )
}
