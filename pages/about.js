import Navbar from '../components/Navbar';
import AboutContent from '../components/AboutContent';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export function Home() {
  return (
    <>
      <Navbar />
      <AboutContent />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
