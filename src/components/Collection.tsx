import React from 'react'
import { CollectionProps } from '../interfaces'
import '../styles/Collection.scss'
export const Collection = ({darkMode}:CollectionProps) => {
  return (
    <section className='collection'>
        <div className="collection__flex">
            <div className="explore">
                <h2>Improve your well-being with Aromatherapy</h2>
                <p>Diffusing can be exactly what you need to add purpose and focus to your daily tasks. We've got tons of fun diffuser blends, with scents to suit every mood, day and situation.</p>
                <a className={`explore ${darkMode && 'dark'}`} href="#">Explore the Collection</a>
            </div>
        </div>
    </section>
  )
}
