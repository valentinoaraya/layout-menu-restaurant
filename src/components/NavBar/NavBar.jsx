import React from 'react';
import "./NavBar.css"

const NavBar = () => {
        
    return (
        <nav>
            <ul>
                <li>
                    <a href="#seccion1">
                        Sección 1
                    </a>
                </li>
                <li>
                    <a href="#seccion2">
                        Sección 2
                    </a>
                </li>
                <li>
                    <a href="#seccion3">
                        Sección 3
                    </a>
                </li>
                <li>
                    <a href="#seccion4">
                        Sección 4
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
