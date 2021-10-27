import React from 'react'
import { Link } from 'react-router-dom'

import "./NavBar.css"

const NavBar = () => {
    return (
     
            <div className="NavBar">
                <div className="navBar-container">
                    <h1>Proveedor Digital</h1>
                    <ul className="navBar-Linkst">
                        <Link to="/">Home</Link>
                        <Link to="/About" >About</Link>
                        <Link to="/Contact">Contact</Link>
                    </ul>
                </div>
            </div>
     
    )
}

export default NavBar
