import React from 'react'
import '../style/navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className='text-center'>
            <ul>
                <li>
                    <Link to='/' className='link'><i className="bi bi-house-door-fill"></i> Inicio</Link>
                </li>
                <li>
                    <Link to='/users' className='link'><i className="bi bi-people-fill"></i> Usuarios</Link>
                </li>
            </ul>
        </nav>
    )
}
