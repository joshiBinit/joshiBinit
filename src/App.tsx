import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Experience from "./pages/Experience";
import Hire from "./pages/Hire";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Routes>
          <Route
            path="/"
            element={
              <main>
                <Header />

                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
              </main>
            }
          />

          <Route path="/experience" element={<Experience />} />
          <Route path="/hire" element={<Hire />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
