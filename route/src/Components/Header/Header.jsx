import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'


export default function Header() {
    return (
        <div className="menu">
            <nav className="navMenu">
                <ul>
                    <li> <Link to="/fiat"> Fiat </Link></li>
                    <li> <Link to="/ford"> Ford </Link></li>
                    <li> <Link to="/chevrolet"> Chevrolet </Link></li>
                    <li> <Link to="/vw"> Vw </Link></li>
                    <li> <Link to="/hyundai"> Hyundai </Link></li>
                </ul>
            </nav>
        </div>
    )
}