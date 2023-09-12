import React from 'react'
import Header from '../componemts/header/Header';
import Nav from '../componemts/nav/Nav';
import About from './componemts/about/About';
import Experience from './experience/Experience';
import Portfolio from '../componemts/portfolio/Portfolio';
import Contact from './componemts/contact/Contact';
import Footer from '../componemts/footer/Footer';

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  )
}

export default App