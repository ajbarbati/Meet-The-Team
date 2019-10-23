import React from "react"
import "./Header.css"
import line from "../images/Line 1.svg"

function Header() {
  return (
    <div className="header">
      <div>
        <img className="lineL" src={line} alt="line" />
      </div>
      <div className="diamondDiv">&#9670; MEET THE TEAM &#9670;</div>
      <div>
        <img className="lineR" src={line} alt="line" />
      </div>
    </div>
  )
}

export default Header
