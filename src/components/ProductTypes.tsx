import React, { useState } from 'react'
import { ProductTypesProps } from '../interfaces'
import '../styles/ProductTypes.scss'
export const ProductTypes = ({server, setServer, activeBox, setActiveBox, handleTypeBoxClick}: ProductTypesProps) => {
  const [x, setX] = useState<null | string[]>(null)
  const [style, setStyle] = useState<Object>({
    opacity: '.7',
    animation: 'skeleton-loading1 4s linear backwards alternate',
    marginTop: '2px'
  })
  const handleAnime = (y: string[]) =>{
    setX(y)
    setStyle(prev=>{
      return {
        ...prev,
        animation: y[0] === '1' ? 'skeleton-loading1 4s linear backwards alternate' : 'skeleton-loading2 4s linear backwards alternate',
      }
    })
  }
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
            {/* <button onClick={()=>handleAnime(['1','1','1','1'])}>b1</button>
            <button onClick={()=>handleAnime(['2','2','2','2'])}>b2</button>
            <div className='parent'>
              {
                x &&
                x.map((el, index)=>{
                  return (
                    <div style={style} className={`skeleton${el}`}>
                      {el}
                    </div>
                  )
                })
              }
            </div> */}
        </div>
    </section>
  )
}
