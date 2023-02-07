import React from 'react'
import FishGrid from '../partials/FishGrid';
import FishScreen from '../partials/FishScreen';
import Navbar from '../partials/Navbar';

const HomePage = () => {
  return (
    <div>
        <Navbar />
        <FishScreen />
        <FishGrid />
    </div>
  )
}

export default HomePage