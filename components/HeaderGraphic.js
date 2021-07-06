import Image from 'next/image';
import heroImage from './images/IMG_0946.jpg';

export const HeaderGraphic = () => {
  return (
    <>
      <div className='headerGraphicContainer'>
        <Image
          src={heroImage}
          alt='Red Mazeratti'
          className='headerGraphics'
          priority
          placeholder='blur'
          layout='fill'
          objectFit='cover'
          objectPosition='center bottom'
        />
      </div>
    </>
  );
};

export default HeaderGraphic;
