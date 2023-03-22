import React, { useState } from 'react';

function Navbar(){

    const [isOpen, setIsOpen] = useState(false);

    const handleMenuClick = () => {
        setIsOpen(!isOpen);
    };        
    return(
        <nav className="navbar">
            <div className="navbar-brand"><a href="#/"><img src="https://cdn.glitch.global/80835a8d-bc40-4dc6-a2c9-443c37603011/logoChento.png?v=1678803599229" alt="" /></a></div>
            <div className="navbar-toggle" onClick={handleMenuClick}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
              <a href="#/">Inicio</a>
              <a href="#/carta">Carta</a>
              <a href="#">Contacto</a>
            </div>
        </nav>
    )
}

export default Navbar