import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/MobileNavbar.css'
interface Props {
    isMobileNavOpen: boolean
    setIsMobileNavOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export const MobileNavbar = ({isMobileNavOpen, setIsMobileNavOpen}: Props) => {
  return (
    <div
    className={`mobile-navbar ${isMobileNavOpen && 'active'}`}>
        <div className='mobile-navbar__flex'>

        </div>
    </div>
  )
}
