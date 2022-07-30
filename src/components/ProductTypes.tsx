import React, { useState, useId } from 'react'
import { ProductTypesProps } from '../interfaces'
import '../styles/ProductTypes.scss'

const images: string[] = 
[
  'https://upload.wikimedia.org/wikipedia/commons/5/56/SandalwoodEssOil.png',
  'https://e7.pngegg.com/pngimages/71/441/png-clipart-cosmetics-alt-attribute-graphy-liquid-natural-cosmetic-cosmetics-essential-oil.png',
  'https://img.favpng.com/25/7/0/humidifier-aromatherapy-essential-oil-diffuser-aroma-compound-png-favpng-FDGssQNapUC3pbB1x6J6FwfAn.jpg',
  'https://w7.pngwing.com/pngs/659/864/png-transparent-spa-and-aromatherapy-oils-aromatherapy-spa-oil-spa-beauty-thumbnail.png'
]

export const ProductTypes = ({server, setServer, activeBox, setActiveBox, handleTypeBoxClick, darkMode}: ProductTypesProps) => {
  return (
    <section className={`product-types`}>
        <div className="product-types__flex">
          {
            Object.keys(server).map((el, index)=>{
              return (
                <div
                key={index}
                className={`type-box ${darkMode && 'dark'} ${activeBox === index && 'active'}`}
                onClick={()=>handleTypeBoxClick(el, index)}
                >
                  <div className="type-box--img-div">
                    <img src={images[index]} alt={el}/>
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
