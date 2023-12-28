import Hero from "./components/Sections/Hero";
import Skills from "./components/Sections/Skills";
import Projects from "./components/Sections/Projects";
import AboutMe from "./components/Sections/AboutMe";
import ContactMe from "./components/Sections/ContactMe";
import Footer from "./components/Sections/Footer";

export default function App() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects className="section dark-section projects" id="projects"></Projects>
      <AboutMe />
      <ContactMe />
      <Footer />
    </>
  );
}
