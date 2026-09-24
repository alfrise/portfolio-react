import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#080b18] px-3 py-3 sm:px-4 sm:py-4 md:px-8 md:py-6">

      <div className="max-w-7xl mx-auto overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl">

        <Navbar />

        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>

      </div>

    </div>
  );
}

export default App;