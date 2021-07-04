import Image from 'next/image';
import thoseWhoServe from './images/honoringthosewhoserve.svg';
import logo from './images/shaun-shines-detailing-logo-optimized.png';

export const Footer = () => {
  return (
    <div className='footer'>
      <a
        className='hours'
        href='https://www.google.com/maps/place/Shaun+Shines+Automotive+Detailing/@36.8141086,-76.1014505,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xd628d231aa7bdf57!8m2!3d36.8141086!4d-76.0992618?authuser=5'>
        <p id='hours'>
          Monday - Friday
          <br />
          9:00AM | 7:00pm
          <br />
          <br />
          Saturday
          <br />
          9:30AM | 5:30pm
          <br />
          <br />
          Sunday
          <br />
          10:30AM | 3:30pm
          <br />
        </p>
      </a>
      <div className='centerCol'>
        <Image
          src={logo}
          alt='Shaun Shines Detailing'
          width='300'
          objectFit='scale-down'
          objectPosition='top center'
          placeholder='blur'
        />
        <p>
          © 2021 Shaun Shines Detailing <br />
          All Rights Reserved
        </p>
      </div>
      <div>
        <div id='socialIcons'>
          <a href='https://www.facebook.com/ShaunShinesDetailing/'>
            <i className='bi bi-facebook'></i>
          </a>
          <a href='https://www.instagram.com/shaun_shines_detailing/'>
            <i className='bi bi-instagram'></i>
          </a>
          <a href='https://www.youtube.com/ShaunShinesDetailing/'>
            <i className='bi bi-youtube'></i>
          </a>
        </div>
        <Image
          src={thoseWhoServe}
          alt='american flag'
          id='thoseWhoServe'
          layout='responsive'
          objectFit='inherit'
          objectPosition='bottom center'
        />
      </div>
    </div>
  );
};

export default Footer;
