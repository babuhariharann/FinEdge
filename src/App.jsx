import React from "react";
import {
  About,
  Contact,
  Footer,
  Home,
  Navbar,
  Service,
} from "./containers/index";

const App = () => {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
