import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
const Navbar = () => {
  return (
    <div>
      <img src={assets.logo} alt="" srcset="" />
      <div>
        <ul>
            <li>HOME</li>
            <li>ALL DOCTORS</li>
            <li>ABOUT</li>
            <li>CONTACT</li>
        </ul>
      </div>
      <button>Create Account</button>
    </div>
  )
}

export default Navbar
