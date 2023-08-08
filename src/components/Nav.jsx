import React from 'react'
import logoImg from '../img/Netflix-Brand-Logo.png'
import profileImg from "../img/netflixpfImg.jpg";
import "./Nav.css"

const Nav = () => {
    
  return (
    <nav className='nav'>
        <img alt='Netflix logo'width={'150px'} src={logoImg} className='nav_log' onClick={()=>window.location.reload()}/>
        <img alt='User logged' src ={profileImg} className='nav_avatar'width={'50px'}/>
    </nav>
  )
}

export default Nav