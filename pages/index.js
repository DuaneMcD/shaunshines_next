import Navbar from '../components/Navbar';
import HeaderGraphic from '../components/HeaderGraphic';
import HeaderContact from '../components/HeaderContact';
import HomeContent from '../components/HomeContent';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HeaderContact />
      <HeaderGraphic />
      <HomeContent />
      <Contact />
      <Footer />
    </>
  );
}
