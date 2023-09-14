import React, { useEffect, useState } from 'react';
import "./NavBar.css"

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const handleScroll = () => {
        if (window.scrollY > 10){
            setIsSticky(true)
        } else {
            setIsSticky(false)
        }
    }

    return (
        <div className={`navbar ${isOpen ? 'open' : ''} ${isSticky ? "sticky" : ""}`}>
            <div className="menu-toggle" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <div className='div-title-navbar'>
                <h1>
                    Menú Restaurante
                </h1>
            </div>
            <ul className={`nav-links ${isOpen ? 'nav-links-open' : ''}`}>
                <li><a href="#seccion1" onClick={toggleMenu}>Sección 1</a></li>
                <li><a href="#seccion2" onClick={toggleMenu}>Sección 2</a></li>
                <li><a href="#seccion3" onClick={toggleMenu}>Sección 3</a></li>
                <li><a href="#seccion4" onClick={toggleMenu}>Sección 4</a></li>
            </ul>
        </div>
    );
}

export default NavBar;
