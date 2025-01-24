import React from "react";
import Header from "./components/Header";
import Hero from "./screens/Hero";
import Skills from "./screens/Skills";
import Projects from "./screens/Projects";
import Education from "./screens/Education";
import Contact from "./screens/Contact";
import Footer from "./components/Footer/Footer";
import ScrollTop from "./screens/ScrollTop";
// import Home from "./components/Home";
function App() {
  return (
    <div>
      <Header />
      {/* <Home /> */}
      {/* <div className="sm:h-20 flex flex-grow bg-gray-900"></div> */}
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <ScrollTop />
      <Footer />
    </div>
  );
}

export default App;
