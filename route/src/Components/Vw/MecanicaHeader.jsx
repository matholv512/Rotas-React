import React from 'react'
import {Link} from 'react-router-dom'
import '../Header/Header.css'


export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li><Link to="/">Menu</Link></li>
                    <li><Link to="/brasiliaheader">Voltar</Link></li>
                    <li><Link to="/mecanicaheader">Motor</Link></li>
                    <li><Link to="/mecanicaheader">Pedais</Link></li>
                    <li><Link to="/mecanicaheader">Câmbio</Link></li>
                    <li><Link to="/mecanicaheader">Volante</Link></li>
                    <li><Link to="/mecanicaheader">Sensores</Link></li>
                </ul>
            </nav>
        </div>
    )
}