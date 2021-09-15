import React from 'react'
import { Link } from 'react-router-dom'
import '../Header/Header.css'
import BrasiliaHeader from './BrasiliaHeader'

export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li><Link to = "/">Voltar</Link></li>
                    <li><Link to ="/brasiliaheader">Brasília</Link></li>
                    <li><Link to ="/vw">Fusca</Link></li>
                    <li><Link to ="/vw">Kombi</Link></li>
                    <li><Link to ="/vw">Polo</Link></li>
                    <li><Link to ="/vw">Gol</Link></li>
                </ul>
            </nav>
        </div>
    )
}