import React, { useEffect, useState } from 'react'
import logoImg from '../img/Netflix-Brand-Logo.png'
import profileImg from "../img/netflixpfImg.jpg";
import "./Nav.css"
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [show,setShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const nav = useNavigate();

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY > 50){
        setShow(true);
      }else{
        setShow(false);
      }
    })
    window.removeEventListener("scroll",()=>{})
  },[]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    nav(`/search?q=${e.target.value}`);
  };
    
  const clickLogo =()=>{
    nav('/')
    setSearchValue("")
  }
  return (
    <nav className={`nav ${show && "nav__black"} `}>
        <img alt='Netflix logo'width={'150px'} src={logoImg} className='nav__logo' onClick={()=>clickLogo()}/>
        <input value={searchValue} onChange={handleChange} className="nav__input" type="text" placeholder=" 영화를 검색해주세요."/>
        <img alt='User logged' src ={profileImg} className='nav__avatar'width={'50px'}/>
    </nav>
  )
}

export default Nav