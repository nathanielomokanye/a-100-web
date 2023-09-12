import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages';
import {
  NavBar,
  MarQuee,
  Services,
  Offer,
  Testimonials,
  FAQ,
  Connect,
  Contact,
  Footer
} from './components';

const Site = () => {
  return (
    <>
      <NavBar />
      <Home />
      <MarQuee />
      <Services />
      <Offer />
      <Testimonials />
      <FAQ />
      <Connect />
      <Contact />
      <Footer />
    </>
  );
};

function App () {
  return (
    <HashRouter>
      <Routes>
        <Route path='' element={<Site />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
