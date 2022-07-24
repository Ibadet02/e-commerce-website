import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { BestSellerProps } from '../interfaces'
import { productData } from '../interfaces'
import '../styles/BestSeller.scss'
export const BestSeller = ({server, setServer, activeBox}:BestSellerProps) => {
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
    <section className='bestseller'>
        <div className='bestseller__flex'>
            <div className='bestseller__flex--left'>
                <h2>Bestsellers</h2>
                <a href="#">SHOP ALL</a>
            </div>
            <div className='bestseller__flex--right'>
            <Swiper
            spaceBetween={10}
            slidesPerView={slidesPerView}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                {
                    server[Object.keys(server)[activeBox]].filter((e: productData) => e.bestSeller)
                    .map((el: productData, index: number)=>{
                        return (
                            <SwiperSlide key={index}>
                                <div className='bestseller-box'>
                                    <img className='bestseller-box--img' src="https://source.unsplash.com/random" alt={el.name} />
                                    <div className='bestseller-box--blur'>
                                        <div className='blur-top'>
                                            <span className='name'>{el.name}</span>
                                            <span className='price'>{el.price}</span>
                                        </div>
                                        <div className='blur-bottom'>
                                            <span className='comment'>{el.comment}</span>
                                            <span className='add-cart'></span>
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
