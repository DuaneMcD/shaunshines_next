import Image from 'next/image';

export const HomeContent = () => {
  return (
    <>
      <main className='homeContent'>
        <section id='quote' className='card'>
          <div id='card'>
            <h2 id='shaunQuote' className='textSeperator'>
              {`"I'll Make It Shine, Like It's Mine!"`}
            </h2>
            <h3>
              It’s not just the Shaun Shine’s promise. It’s our purpose.
              <br />
              We believe every car & owner have a special connection. We can
              help maintain appearance, cleanliness and enjoyability.
            </h3>
          </div>
        </section>
        <section id='features' className='card'>
          <div className='cleaning'>
            {/* <Image src='' alt='' /> */}
            <h4>Cleaning</h4>
            <h5>
              We Offer Several Levels of Vehicle Cleaning From Simple Hand Wash
              Up to Showroom finish
            </h5>
          </div>
          <div className='interior'>
            {/* <Image src='' alt='' /> */}
            <h4>Interior</h4>
            <h5>
              Shampoo, Steam Clean and Vacuum You Spend a Lot of Time in the
              Interior It Deserves to be Meticulously Cared for
            </h5>
          </div>
          <div className='paintCorrection'>
            {/* <Image src='' alt='' /> */}
            <h4>Paint Correction</h4>
            <h5>
              {` Swirls, Scratches and Oxidation We'll Repair your Surface Paint
              Damage`}
            </h5>
          </div>
          <div className='quality'>
            {/* <Image src='' alt='' /> */}
            <h4>Quality</h4>
            <h5>
              No Cut Corners, Rush Jobs or Damage The Best Products on Every Job
              A Proper Detail Everytime
            </h5>
          </div>
          <div className='location'>
            {/* <Image src='' alt='' /> */}
            <h4>Location</h4>
            <h5>
              Schedule Service at Our Location, Online at Your Convenience; Ask
              Us About Mobile Detailing!
            </h5>
          </div>
          <div className='advancedProtection'>
            {/* <Image src='' alt='' /> */}
            <h4>Advanced Protection</h4>
            <h5>
              Exterior Polish, Ceramic Treatment, Tire CareLeather, Cloth and
              Glass Protection Ask Us How to Protect Your Vehicle
            </h5>
          </div>
        </section>
        <section id='weAre' className='card'>
          <h4 className='shaunShinesIs textSeperator'>
            Shaun Shines Detailing is...
          </h4>
          <div className='listContainer'>
            <ul className='list1'>
              <li>Veteran Owned & Operated</li>
              <li>Pet Friendly</li>
              <li>Locally Owned & Operated</li>
              <li>Community Oriented</li>
            </ul>
            <ul className='list2'>
              <li>Fully Insured</li>
              <li>Skilled Service Provider</li>
              <li>Online Payments, Cards or Cash</li>
              <li>Eco Friendly(lowest impact!)</li>
            </ul>
          </div>
          <h4 className='askUsAbout textSeperator'>Ask Us About...</h4>
          <div className='listContainer'>
            <ul className='list1'>
              <li>Fleet Vehcile Rates</li>
              <li>Veteran Discounts</li>
              <li>Getting Race Ready</li>
              <li>Show Rooms & Show Cars</li>
            </ul>
            <ul className='list2'>
              <li>Advanced Protection</li>
              <li>Road Salt & Undercarraige Cleaning</li>
              <li>Restoration Projects</li>
              <li>...Any Service! Big or small!</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default HomeContent;
