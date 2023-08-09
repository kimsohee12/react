import React, { useEffect, useState } from 'react'
import logoImg from '../img/Netflix-Brand-Logo.png'
import profileImg from "../img/netflixpfImg.jpg";
import "./Nav.css"

const Nav = () => {
  const [show,setShow] = useState(false);

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      console.log("scroll",window.scrollY);
      if(window.scrollY > 50){
        setShow(true);
      }else{
        setShow(false);
      }
    })
    window.removeEventListener("scroll",()=>{})
  },[])
    
  return (
    <nav className={`nav ${show && "nav__black"} `}>
        <img alt='Netflix logo'width={'150px'} src={logoImg} className='nav__logo' onClick={()=>window.location.reload()}/>
        <img alt='User logged' src ={profileImg} className='nav__avatar'width={'50px'}/>
    </nav>
  )
}

export default Nav