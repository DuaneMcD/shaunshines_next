import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from './images/shaun-shines-detailing-logo-optimized.png';

export function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <Link
          href='/'
          className='navbar-logo'
          onClick={closeMobileMenu}
          passHref>
          <Image
            className='shaunShinesLogo'
            src={logo}
            objectFit='scale-down'
            objectPosition='4%'
            alt='Shaun Shines Logo'
            placeholder='blur'
            priority
          />
        </Link>
        <a id='address' href='#' target='_blank' rel='noreferrer'>
          <i className='bi bi-geo-alt-fill'></i> New Location Coming Soon!
        </a>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link href='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              href='/schedule-online'
              className='nav-links'
              onClick={closeMobileMenu}>
              Request Quote
            </Link>
          </li>
          {/* <li className='nav-item'>
            <Link
              href='/services'
              className='nav-links'
              onClick={closeMobileMenu}>
              Services
            </Link>
          </li> */}
          <li className='nav-item'>
            <Link href='/about' className='nav-links' onClick={closeMobileMenu}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
