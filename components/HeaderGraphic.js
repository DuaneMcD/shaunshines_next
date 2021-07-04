import Image from 'next/image';
import heroImage from './images/IMG_0946.jpg';

export const HeaderGraphic = () => {
  return (
    <>
      <div className='header'>
        <Image
          src={heroImage}
          alt='Red Mazeratti'
          className='headerGraphics'
          priority
          placeholder='blur'
          layout='fill'
          objectFit='cover'
          objectPosition='bottom left'
        />
      </div>
    </>
  );
};

export default HeaderGraphic;
