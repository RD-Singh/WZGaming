import React, { Fragment, useState, useEffect } from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar(props) {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const showButton = () => {
        if (window.innerWidth <= 1200) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <Fragment>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        <img src="SiteLogo.png" className="WZGaming-Logo" alt="WZGaming" />
                    </Link>
                    <div className="spacer" />
                    <div className="menu-icon" onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                        <span className="menu-text">Menu</span>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' id={props.home} className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about-us' id={props.aboutUs} className='nav-links' onClick={closeMobileMenu}>
                                About Us
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/initiatives' id={props.initiatives} className='nav-links' onClick={closeMobileMenu}>
                                Initiatives
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/support-us' id={props.supportUs} className='nav-links' onClick={closeMobileMenu}>
                                Support Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    )
}

export default Navbar