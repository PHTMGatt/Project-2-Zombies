import React from 'react'
import { Link } from 'react-router-dom'
import './Layout.css'

const Header = () => {
    return (
        
        <header className='header_container'>
            <div className='page_container'>
            <h1 className="header_1">Origins Easter Egg</h1>
            <h1 className="header_2">Little Lost Girl</h1>
            </div>
            <nav className='nav_container'>
                <ul>
                    <Link to="/">Main Guide</Link>
                    <Link to="/FireStaff">Fire Staff</Link>
                    <Link to="/IceStaff">Ice Staff</Link>
                    <Link to="/WindStaff">Wind Staff</Link>
                    <Link to="/LightningStaff">Lightning Staff</Link>
                </ul>
            </nav>
        </header>
    )
}

export default Header