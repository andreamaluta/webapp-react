import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <nav className='navbar'>
                <div className="container-fluid">
                    <Link className='navbar-brand' to='/'>
                        Movie
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Header
