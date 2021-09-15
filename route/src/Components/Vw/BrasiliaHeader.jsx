import React from 'react'
import {Link} from 'react-router-dom'
import '../Header/Header.css'
import MecanicaHeader from '../Vw/MecanicaHeader.jsx'

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li><Link to = "/">Menu</Link></li>
                    <li><Link to = "/vw">Voltar</Link></li>  
                    <li><Link to = "/mecanicaheader">Mecânica</Link></li> 
                    <li><Link to = "/brasiliaheader">Elétrica</Link></li>
                    <li><Link to = "/brasiliaheader">Eletrônica</Link></li>
                    <li><Link to = "/brasiliaheader">Suspensão</Link></li>   
                </ul>
            </nav>
        </div>
    )
}