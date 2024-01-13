import { useEffect } from 'react';
import Header from './components/Header';
import './style.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'animate.css';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Clients from './components/Clients';
import Blogs from './components/Blogs';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = ()  => {
  useEffect(() => {
    AOS.init({duration: 1000});
  })
  return (
    <>
      <Header />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Clients />
      <Blogs />
      <Contact />
      <Footer />
    </>
  );
}

export default App
