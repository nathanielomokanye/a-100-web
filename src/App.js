import React from 'react';
import { Home } from './pages';
import { NavBar, MarQuee, Services, Offer, Testimonials } from './components';

function App () {
  return (
    <>
      <NavBar />
      <Home />
      <MarQuee />
      <Services />
      <Offer />
      <Testimonials />
    </>
  );
}

export default App;
