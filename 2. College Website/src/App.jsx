import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Program from './components/program/Program'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contact/Contact'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

const App = () => {

  const [play, setPlay] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle="Our Programs" title="What we offer"/>
        <Program />
        <About setPlay={setPlay}/>
        <Title subtitle="Gallery" title="Campus Photos"/>
        <Campus />
        <Title subtitle="TESTIMONIALS" title="What Students Says"/>
        <Testimonial />
        <Title subtitle="Contact Us" title="Get In Touch"/>
        <Contact />
      </div>

      <VideoPlayer play={play} setPlay={setPlay}/>
    </div>
  )
}

export default App
