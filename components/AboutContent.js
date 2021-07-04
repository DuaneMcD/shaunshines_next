import Image from 'next/image';
import shaun from '../components/images/shaun.jpg';

export const AboutContent = () => {
  return (
    <>
      <section className='aboutQuote'>
        <h2 id='shaunBelieve' className='textSeperator'>
          You Become What You Believe
        </h2>
        <h3 id='shaunStory'>The Shaun Shines Story</h3>
      </section>
      <main className='aboutContent'>
        <section className='meetShaun'>
          <div className='card'>
            <Image
              src={shaun}
              alt='Shaun Dugan'
              className='meetShaun-Image'
              placeholder='blur'
              quality={100}
              // layout='fixed'
              // objectFit='contain'
              // objectPosition='bottom center'
              priority
            />
            <h3>{`Shaun Dugan
            Owner/Operator`}</h3>
            <h4 className='imShaun'>{`Hey! I’m Shaun,`}</h4>
            <h4 className='imShaun-text'>
              {` Owner Of Shuan Shines Detailing. I started detailing my own vehicles out of passion. Thats the same passion that I detail every car with.`}
            </h4>
          </div>
        </section>

        <div className='part-two'>
          <section className='iLoveAutomobiles'>
            <div className='card'>
              <h4>
                {`  I Love Automobiles.
              I’m happy when I see someone lay eyes on their freshly detailed car. Love at first sight. It’s the best part of being a detailer. I also like detailing show room cars and new
              cars! Really anything that helps appreciate vehicular beauty. I started early, as a child. My father had classic cars and even built a few of his own. Cars were always around. He still has his Chevelle! I served in the Navy for 11 years. Afterwards I decide to do something new but familar… I Started Shaun Shines! I like using the navy degree of attention to detail to make cars shine.`}
              </h4>
            </div>
          </section>

          <section className='makeItShine'>
            <div className='card'>
              <h4>
                {` I started detailing from home. Shortly after I went mobile. In 2020 Shaun Shines got a proper garage.
              Come say Hi!

              “Make it Shine, like it’s mine!“
              -Shaun 
              
              (…Ask me about my WRX STI!)`}
              </h4>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default AboutContent;
