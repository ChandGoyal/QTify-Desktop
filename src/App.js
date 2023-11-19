import React from 'react';
import Navbar from './components/Navbar/Navbar.jsx';
import HeroSection from './components/HeroSection/HeroSection.jsx';

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection heading1="100 Thousand Songs, ad-free" heading2="Over thousands podcast episodes"/>
    </div>
  )
}

export default App;
