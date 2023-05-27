import Navbar from "./Components/Navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import Experience from "./Components/Experience/Experience";
import Project from "./Components/ProjectSection/Project";
import OtherProjects from "./Components/OtherProjects/OtherProjects";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <AboutMe />
      <Skills />
      <Experience />
      <Project />
      <OtherProjects />
      <Contact />
    </div>
  );
}

export default App;
