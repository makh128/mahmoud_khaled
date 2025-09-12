import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";
import Education from "./components/Education.tsx";
import Skills from "./components/Skills.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      {/* <Projects /> */}
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
