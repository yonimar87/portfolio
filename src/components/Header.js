import React from 'react'

import Footer from './Footer'
import yoni from '../assets/images/yoni.jpeg'

const Header = () => (
  <header id="header">
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={yoni} alt="Profile Picture" />
      </a>
      <h1>
        <strong>Yoni Marlow</strong>, previous Sales Professional, current Creative Developer
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
