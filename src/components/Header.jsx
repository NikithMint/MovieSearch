import React from 'react'
import './header.css'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <div>
      <ul className='Header'>
        <img id="logo" src='https://cdn.svgator.com/images/2021/08/logo-animation-example-conversable.gif' alt='logo'></img>
        <li><Link to ='/Home'>Home</Link></li>
        <li><Link to ='/About'>About</Link></li>
        <li><Link to ='/Contact'>Contact</Link></li>
        <li><Link to ='/Movie'>Movie</Link></li>
      </ul>
      
    </div>
  )
}

export default Header
