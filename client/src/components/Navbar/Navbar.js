import React, {useState} from 'react'
import {Button} from '../Button/Button'
import './Navbar.css'
import {Link} from 'react-router-dom'
import Dropdown from '../Dropdown/Dropdown'

function Navbar() {
    const [click, setClick] = useState(false);

    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(true);
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960) {
            setDropdown(false);
        } else {
            setDropdown(false);
        }
    };

    return(
        <>
            <nav className='navbar'>
                <Link to = "/" className='navbar-logo'>Flameal</Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to = "/transfer" className='nav-links' onClick={closeMobileMenu}>
                            Transfer
                        </Link>
                    </li>

                    <li className='nav-item'>
                        <Link to = "/myinventory" className='nav-links' onClick={closeMobileMenu}>
                            My Inventory
                        </Link>
                    </li>

                    <li className='nav-item'
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                    >
                        <Link to = "/stats" className='nav-links' onClick={closeMobileMenu}>
                            Stats <i className = 'fas fa-caret-down' />
                        </Link>
                        {dropdown && <Dropdown/>}
                    </li>

                    <li className='nav-item'>
                        <Link to = "/signup" className='nav-links-mobile' onClick={closeMobileMenu}>
                            Sign Up
                        </Link>
                    </li>
                </ul>
                <Button />
            </nav>
        </>
        )
}

export default Navbar;
