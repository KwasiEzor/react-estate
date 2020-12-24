import React ,{ useEffect, useState} from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import DetailsSection from './components/DetailsSection';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar'
import { InfoData } from './data/InfoData';
import { SliderData } from './data/SliderData';
import { DetailsData } from './data/DetailsData';
import GlobalStyle from './GlobalStyle';
import Footer from './components/Footer';
import { FooterData } from './data/FooterData';


function App() {
  const [isOpen, setIsOpen ] = useState (false) ;

  const toggle = () =>{
    setIsOpen (!isOpen)
  }
  return (
    <Router>
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Hero slides = {SliderData} />
      <InfoSection {...InfoData } />
      <DetailsSection  cards = {DetailsData } />
      <Footer footerData ={FooterData}/>
    </Router>
  );
}

export default App;
