import AboutMe from "./layout/AboutMe";
import Education from "./layout/Education";
import Header from "./layout/Header";
import Hero from "./layout/Hero";
import Projects from "./layout/Projects";
import Skills from "./layout/Skills";

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <AboutMe />
        <Skills />
        <Education />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
