import React from 'react'
import { MobileNavbarProps } from '../interfaces'
import { NavLink } from 'react-router-dom'
import '../styles/MobileNavbar.css'
export const MobileNavbar = ({isMobileNavOpen, setIsMobileNavOpen}: MobileNavbarProps) => {
  return (
    <div
    className={`mobile-navbar ${isMobileNavOpen && 'active'}`}>
        <div className='mobile-navbar__flex'>
          
        </div>
    </div>
  )
}
