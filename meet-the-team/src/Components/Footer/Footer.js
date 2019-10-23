import React from "react"
import "./Footer.css"
import line from "../images/Line 1.svg"

function Footer() {
  return (
    <div className="footer">
      <div>
        <img className="lineL" src={line} alt="line" />
      </div>
      <div className="diamondDiv">&#9670;</div>
      <div>
        <img className="lineR" src={line} alt="line" />
      </div>
    </div>
  )
}

export default Footer
