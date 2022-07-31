import React, { useRef, useState } from 'react'
import { NavbarProps } from '../interfaces'
import { NavLink } from 'react-router-dom'
import { MobileNavbar } from './MobileNavbar'
import { CSSTransition } from 'react-transition-group'
import { FaBars } from 'react-icons/fa';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import '../styles/Navbar.css'
export const Navbar = ({darkMode, setDarkMode}:NavbarProps) => {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false)
    const [isSearchbarOpen, setIsSearchbarOpen] = useState<boolean>(false)
  return (
    <>
        <nav className={`navbar ${darkMode && 'dark'}`}>
            <div className='navbar__flex'>
                <div className="logo-container">
                    <NavLink to={'/'}>
                        <Logo />
                        <strong>logo</strong>
                    </NavLink>
                </div>
                <div className="links-container">
                    <NavLink to={'/e-commerce-website/'}>Home</NavLink>
                    <NavLink to={'/e-commerce-website/about'}>About Us</NavLink>
                    <NavLink to={'/e-commerce-website/shop'}>Shop</NavLink>
                    <NavLink to={'/e-commerce-website/contact'}>Contact</NavLink>
                </div>
                <div className="icons-container">
                    <NavLink to={'/'} className='icons-container__bag'>
                        <svg width="0.9375em" height="1.0625em" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.0493 14.6919L13.4942 4.84063H10.7214V4.04532C10.7214 2.0617 9.07272 0.448059 7.04616 0.448059C5.0196 0.448059 3.37096 2.06178 3.37096 4.04532V4.84063H0.478081L0.000561102 14.7345L7.77038e-05 14.7516C-0.0038423 15.1076 0.140719 15.4571 0.396479 15.7099C0.652319 15.9631 1.00776 16.1084 1.37168 16.1084H12.6798C13.0548 16.1084 13.418 15.9555 13.676 15.6887C13.9339 15.4219 14.07 15.0586 14.0493 14.6919ZM4.32952 4.04532C4.32952 2.57912 5.54816 1.38627 7.04616 1.38627C8.54408 1.38627 9.7628 2.57912 9.7628 4.04532V4.84063H4.32944V4.04532H4.32952ZM12.9798 15.0437C12.9019 15.124 12.7926 15.1701 12.6797 15.1701H1.3716C1.262 15.1701 1.15504 15.1264 1.07784 15.05C1.00248 14.9756 0.959201 14.8733 0.958481 14.7684L1.39232 5.77884H3.3708V6.96692C3.3708 7.22602 3.58536 7.43602 3.85008 7.43602C4.1148 7.43602 4.32936 7.22602 4.32936 6.96692V5.77884H9.76272V6.96692C9.76272 7.22602 9.97728 7.43602 10.242 7.43602C10.5067 7.43602 10.7212 7.22602 10.7212 6.96692V5.77884H12.5869L13.0919 14.7436C13.0984 14.854 13.0574 14.9634 12.9798 15.0437Z" fill="black"/>
                        </svg>
                    </NavLink>
                    <button
                    className='icons-container__search'
                    onClick={()=>setIsSearchbarOpen(prev=>!prev)}
                    >
                        <svg width="1em" height="1.0625em" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.4439 12.0126L15.8698 15.3658C16.0434 15.5357 16.0434 15.8111 15.8698 15.981C15.6963 16.1509 15.4149 16.1509 15.2413 15.981L11.8154 12.6278C10.5617 13.7111 8.91485 14.3684 7.11111 14.3684C3.18375 14.3684 0 11.2522 0 7.40822C0 3.56423 3.18375 0.448059 7.11111 0.448059C11.0385 0.448059 14.2222 3.56423 14.2222 7.40822C14.2222 9.17367 13.5507 10.7856 12.4439 12.0126ZM7.11111 13.4984C10.5475 13.4984 13.3333 10.7717 13.3333 7.40822C13.3333 4.04473 10.5475 1.31808 7.11111 1.31808C3.67467 1.31808 0.888889 4.04473 0.888889 7.40822C0.888889 10.7717 3.67467 13.4984 7.11111 13.4984Z" fill="black"/>
                        </svg>
                    </button>
                    <CSSTransition
                    timeout = {200}
                    unmountOnExit
                    in = {isSearchbarOpen}
                    classNames = 'main-searchbar'
                    >
                        <div className='desktop-search'>
                            <form action="/">
                                <input type="text" placeholder='Search...'/>
                                <button type='submit'>Search</button>
                            </form>
                        </div>
                    </CSSTransition>
                    <div
                    onClick={()=>setDarkMode(!darkMode)}
                    className={`toggle-dark ${darkMode && 'dark'}`}>
                        <div className='toggle-dark--circle'></div>
                    </div>
                </div>
                <div
                onClick={()=>setIsMobileNavOpen(prev=>!prev)}
                className={`menuBar-container ${darkMode && 'dark'}`}>
                    <FaBars/>
                </div>
            </div>
        </nav>
        <MobileNavbar
        setDarkMode={setDarkMode}
        darkMode = {darkMode}
        isMobileNavOpen = {isMobileNavOpen}
        setIsMobileNavOpen = {setIsMobileNavOpen}
        />
        <div
        onClick={()=>setIsMobileNavOpen(false)}
        className={`navbar-toggler ${isMobileNavOpen && 'active'}`}></div>
    </>
  )
}
