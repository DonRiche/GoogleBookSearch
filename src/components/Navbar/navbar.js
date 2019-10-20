import React from 'react';
import './navbar.css'

export default function navbar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <ul>
                <li className="nav-link"><a href="/search">Search</a></li>
                <li className="nav-link"><a href="/saved">Saved</a></li>
                <li className="nav-link"><a href="/">Google Books</a></li>
            </ul>

        </nav>


    )
}
