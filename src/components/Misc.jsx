import React from 'react'

import logo from "../assets/logo.png"

const Misc = () => {
  return (
    <>
    <div className="cursor"></div>
      <a href="/" className="logo">
        <img src={logo} alt="Logo"/>
      </a>
      <a href="/franchise" className="franchiseBtn">
        GET A FRANCHISE
      </a>
    </>
  )
}

export default Misc