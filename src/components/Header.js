import React from 'react'
import logo from "../assets/netflix_logo.png";


const Header = () => {
  return (
    <div className="header">
            <img src={logo} alt="Logo" width={150}></img>
        </div>
  )
}

export default Header