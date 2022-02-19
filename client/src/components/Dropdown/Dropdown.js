import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './Dropdown.css';

const MenuItems = [
    {
        title: 'Food banks',
        path: '/foodbanks',
        cName: 'dropdown-link'
    },
    {
        title: 'User statiscics',
        path: '/userstats',
        cName: 'dropdown-link'
    },
    {
        title: 'Top contributors',
        path: '/topcont',
        cName: 'dropdown-link'
    }

];

function Dropdown() {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <>
            <ul onClick={handleClick} className = {click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>)
                }) }
            </ul>
        </>
    );
}
export default Dropdown;