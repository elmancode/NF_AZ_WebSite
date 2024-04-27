import React from 'react'
import Logo from "../../assets/logo white.png"
import "./index.scss"

const Header = () => {
  return (
    <header>

      <div className="left">
        <img src={Logo} alt="logo" />
      </div>

      <div className="right">
        <p>  MENU  </p>
        <span> = </span>
         
        
      
      </div>


    </header>
  )
}

export default Header