import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// importing the components
import HeroSection from './HeroSection'
import Illustration from './Illustration'
import Manufacturing from './Manufacturing'
import ClassicCollection from './ClassicCollection'
import ContemporaryCollection from './ContemporaryCollection'
import Gallery from './Gallery'
import Testimonial from './Testimonial'
import FAQsection from './FAQsection'
import FoundersNote from './FoundersNote'
import Footer from './Footer'

function App() {
  return (
    <>
      <HeroSection/>
      <Illustration/>
      <Manufacturing/>
      <ClassicCollection/>
      <ContemporaryCollection/>
      <Gallery/>
      <Testimonial/>
      <FAQsection/>
      <FoundersNote/>
      <Footer/>
    </>
  )
}

export default App
