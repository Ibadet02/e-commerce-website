import React, { useState } from 'react'
import { ProductTypesProps } from '../interfaces'
import '../styles/ProductTypes.scss'
export const ProductTypes = ({server, setServer, activeBox, setActiveBox, handleTypeBoxClick}: ProductTypesProps) => {
  return (
    <section className='product-types'>
        <div className="product-types__flex">
          {
            Object.keys(server).map((el, index)=>{
              return (
                <div
                key={index}
                className={`type-box ${activeBox === index && 'active'}`}
                onClick={()=>handleTypeBoxClick(el, index)}
                >
                  <div className="type-box--img-div">
                    <img src="https://source.unsplash.com/random" alt={el}/>
                  </div>
                  <div className="type-box--name-div">
                    <span>
                      {
                        el === "oils" ? "Essential oils" : el === "cosmetics" ? "Natural cosmetics" : el === "diffusers" ? "Diffusers" : el === "aromatherapy" ? "Aromatherapy" : ''
                      }
                    </span>
                  </div>
                </div>
              )
            })
          }
        </div>
    </section>
  )
}
