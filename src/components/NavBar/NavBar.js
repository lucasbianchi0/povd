import React from 'react'

import "./NavBar.css"


const NavBar = () => {
    return (
        <div className="NavBar">
            <div className="navBar-container">
                <h1>Proveedor Digital</h1>
                
                <ul className="navBar-list">
                    <li>Catalogo</li>
                    <li>Liquidacion</li>
                    <li>Nosotros</li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
