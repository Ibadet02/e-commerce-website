import React from 'react'
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/images/logo.svg';
import '../styles/Footer.css'
export const Footer = () => {
  return (
    <footer className='footer'>
        <NavLink className='footer--logo' to={'/'}>
            <Logo />
            <strong>logo</strong>
        </NavLink>
        <div className="footer__flex">
            <div className="links-container">
                <div className="links">
                    <h3>Customer Support</h3>
                    <a href="#">Shipping</a>
                    <a href="#">Free Return</a>
                    <a href="#">Track your Order</a>
                    <a href="#">Gift Cards</a>
                </div>
                <div className="links">
                    <h3>About Us</h3>
                    <a href="#">Our Values</a>
                    <a href="#">Sustainability</a>
                    <a href="#">Brand Ambassadors</a>
                    <a href="#">Fitness Professionals</a>
                </div>
                <div className="links">
                    <h3>Customer Service</h3>
                    <a href="#">Help</a>
                    <a href="#">Leader Support</a>
                    <a href="#">Pleasant Grove Product Center</a>
                    <a href="#">Recall—Important Safety Information</a>
                </div>
            </div>
            <div className="copyright">
                <p>
                    copyright © 2022 Xxxxx
                    <br />
                    all rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}
