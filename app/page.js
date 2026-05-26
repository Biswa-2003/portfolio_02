import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Footer from './components/Footer';

export default function Page() {
  return (
    <main style={{ backgroundColor: 'var(--bg)' }}>
      <Navbar />
      <Hero />
      <div className="position-relative" style={{ zIndex: 1, backgroundColor: 'var(--bg)' }}>
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
