import React from "react";
import { Home } from "./pages";
import {
  NavBar,
  MarQuee,
  Services,
  Offer,
  Testimonials,
  FAQ,
  Connect,
} from "./components";

function App() {
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
    </>
  );
}

export default App;
