import {useEffect} from 'react'
import '../components/CarPicker.css';
import '../components/Button.css';
import '../components/Contact.css';
import '../components/HeaderGraphic.css';
import '../components/HomeContent.css';
import '../components/Footer.css';
import '../components/ModelSelect.css';
import '../components/Navbar.css';
import '../components/MakeSelect.css';
import '../components/YearSelect.css';
import '../components/TrimSelect.css';
import '../components/Schedule.css';
import '../components/PurchaseButton.css';
import '../components/HeaderContact.css';
import '../components/AboutContent.css';

import '../styles/globals.css';
import '../styles/App.css';


 

function MyApp({ Component, pageProps }) {

//// Chatra widget
  useEffect(() => {

  (function(d, w, c) {
          w.ChatraID = '39oMWcbRD5SfacNen';
          var s = d.createElement('script');
          w[c] = w[c] || function() {
              (w[c].q = w[c].q || []).push(arguments);
          };
          s.async = true;
          s.src = 'https://call.chatra.io/chatra.js';
          if (d.head) d.head.appendChild(s);
      })(document, window, 'Chatra');

  }, [])

  return <Component {...pageProps} />;
}

export default MyApp;
