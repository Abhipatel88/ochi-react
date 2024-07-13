import React from 'react'
import Navbar from './components/Navbar';
import Landingpage from './components/Landingpage';
import Marqee from './components/Marqee';
import About from './components/About';
import Eyes from './components/Eyes';
import Feature from './components/Feature';
import Cards from './components/Cards';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';
function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen text-white bg-zinc-800'>
      <Navbar/>
      <Landingpage/>
      <Marqee/>
      <About/>
      <Eyes/>
      <Feature/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
