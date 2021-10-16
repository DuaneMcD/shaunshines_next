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
      <section className='address-box'>
        <a
          id='address'
          href='https://www.google.com/maps/place/Shaun+Shines+Automotive+Detailing/@36.8141086,-76.1014505,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xd628d231aa7bdf57!8m2!3d36.8141086!4d-76.0992618?authuser=5'
          target='_blank'
          rel='noreferrer'>
          <i className='bi bi-geo-alt-fill'></i> 1397 Taylor Farm Road, Virginia
          Beach, VA 23452
        </a>
      </section>
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
