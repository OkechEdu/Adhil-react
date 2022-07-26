import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closedMobileMenu = () => setClick(false);
  return (
    <>
       <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo'>
                    ADHIL CONSULTANCY <i className='fab fa-duotone fa-arrows-to-eye' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ?'fas fa-times': 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active': 'nav-menu'}>
                    <li className='nav-item'>
                       <Link to='/' className='nav-links' onClick={closedMobileMenu}>
                            Home
                        </Link>
                    </li>
                </ul>
            </div>
       </nav>
    </>
  )
}

export default Navbar
