import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { FaCartPlus } from 'react-icons/fa';
import { BestSellerProps } from '../interfaces'
import { productData } from '../interfaces'
import '../styles/BestSeller.scss'
export const BestSeller = ({server, setServer, activeBox, componentType, style, darkMode}:BestSellerProps) => {
    const [slidesPerView, setSlidesPerView] = useState<number>(2)
    useEffect(()=>{
        if(window.innerWidth<1245){
            setSlidesPerView(1)
        }else{
            setSlidesPerView(2)
        }
        window.addEventListener('resize',()=>{
            if(window.innerWidth<1245){
                setSlidesPerView(1)
            }else{
                setSlidesPerView(2)
            }
        })
    }, [])
  return (
    <section
    // style={{backgroundImage: `URL(${componentType === 'bestSeller' ? "../assets/images/flower.svg" : "../assets/images/chamomile.svg"})`}}
    className='bestseller'>
        <div className='bestseller__flex'>
            <div className='bestseller__flex--left'>
                <div>
                    <h2>
                        {
                            componentType === 'bestSeller' ?
                            'Bestsellers' :
                            'Trends'
                        }
                    </h2>
                    <a className={`shop-all ${darkMode && 'dark'}`} href="#">SHOP ALL</a>
                </div>
            </div>
            <div className='bestseller__flex--right'>
            <Swiper
            spaceBetween={20}
            slidesPerView={slidesPerView}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    server[Object.keys(server)[activeBox]].filter((e: any) => e[componentType])
                    .map((el: productData, index: number)=>{
                        return (
                            <SwiperSlide key={index}>
                                <div className='bestseller-box'>
                                    <img
                                    style={style.image}
                                    className='bestseller-box--img skeleton skeleton-img' src="https://source.unsplash.com/random" alt={el.name} />
                                    <div className='bestseller-box--blur'>
                                        <div className='blur-top'>
                                            <span
                                            className='name skeleton skeleton-text'
                                            style={style.text}
                                            >{el.name}</span>
                                            <span
                                            className='price skeleton skeleton-text'
                                            style={style.text}
                                            >{el.price}</span>
                                        </div>
                                        <div className='blur-bottom'>
                                            <span
                                            className='comment skeleton skeleton-text'
                                            style={style.text}
                                            >{el.comment}</span>
                                            <button
                                            style={style.text}
                                            className='add-cart'><FaCartPlus /></button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            </div>
        </div>
    </section>
  )
}
