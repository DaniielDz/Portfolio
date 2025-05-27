import AboutMe from "./layout/AboutMe";
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
        <AboutMe />
        <Skills />
        <Projects />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
