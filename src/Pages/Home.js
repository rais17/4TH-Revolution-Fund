import React from 'react'
import HeroSection from '../Components/HeroSection';
import TechCards from '../Components/TechCards';
import CompanyStatement from '../Components/CompanyStatement';
import GetInTouch from '../Components/GetInTouch';

const Home = () => {
  return (
    
      <div className='w-full'>
        <HeroSection />
        <TechCards />
        <CompanyStatement />
        <GetInTouch />
      </div>

  );
}

export default Home