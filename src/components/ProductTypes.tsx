import React from 'react'
import { ProductTypesProps } from '../interfaces'
export const ProductTypes = ({server, setServer}: ProductTypesProps) => {
  return (
    <section className='product-types'>
        <div className="product-types__flex">
            <button>b1</button>
            <button>b2</button>
        </div>
    </section>
  )
}
