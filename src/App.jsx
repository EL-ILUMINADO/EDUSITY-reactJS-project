import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Programs from "./components/Programs/Programs";
import Title from "./components/Title/Title";
import "./App.css";
import Campus from "./components/Campus/Campus";
import Testimonials from "./components/Testimonials/Testimonials";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import { useState } from "react";

function App() {
  const [playState, setPlayState] = useState(false);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section>
          <Title subtitle="Our Program" title="What We Offer" />
          <Programs />
        </section>
        <section className="section-about">
          <div className="section-about-container">
            <About setPlayState={setPlayState} />
          </div>
        </section>
        <section className="section-about">
          <div className="section-about-container">
            <Title subtitle="Gallery" title="Check Our Campus Photos" />
            <Campus />
          </div>
        </section>
        {/* <section className="section-about">
          <div className="section-about-container">
            <Title subtitle="Testimonials" title="What Our Students Say" />
            <Testimonials />
          </div>
        </section> */}
        <section className="section-about section-contact">
          <div className="section-about-container">
            <Title subtitle="Contact us" title="Get in Touch With Edusity" />
            <Contact />
          </div>
        </section>
      </main>
      <footer>
        <div className="footer-container">
          <Footer />
        </div>
      </footer>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>
  );
}

export default App;
