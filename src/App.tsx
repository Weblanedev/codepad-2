import { Route, Routes } from 'react-router-dom';
import Navbar from './navbar';
import Homepage from './homepage';
import Footer from './footer';
import About from './about';
import Contact from './contact';
import Billing from './billing';
import PrivacyPolicy from './terms-and-privacy';
import ServicesPage from './services-page';
import BlogOne from './blog-one';
import BlogTwo from './blog-two';
import BlogThree from './blog-three';
import { useState } from 'react';
import { Service, services } from './data/services';

function App() {
  const [selectedProduct, setSelectedProduct] = useState<Service>(services[1]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Homepage
            // setSelectedBook={setSelectedBook}
            />
          }
        />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route
          path="/billing"
          element={<Billing setSelectedProduct={selectedProduct} />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/products"
          element={<ServicesPage setSelectedProduct={setSelectedProduct} />}
        />
        <Route path="/blog/one" element={<BlogOne />} />
        <Route path="/blog/two" element={<BlogTwo />} />
        <Route path="/blog/three" element={<BlogThree />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
