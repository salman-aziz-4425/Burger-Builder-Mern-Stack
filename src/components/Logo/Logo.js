import React from "react"
import burgerLogo from '../../assets/Images/27.1 burger-logo.png.png'
import './Logo.css'
const logo=(props)=>(
<div className="Logo" style={{height:props.height}}>
    <img src={burgerLogo} alt="Myburger"></img>
</div>
)

export default logo