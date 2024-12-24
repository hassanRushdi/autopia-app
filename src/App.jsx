import { useState } from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import OfferCard from './components/OfferCard'
import VehicleGuide from './components/VehicleGuide'
import SectionHeading from './components/SectionHeading'
import Packages from './components/Packages'

function App() {

  return (
    <main className=''>
      <Header />
      <NavBar />
      <OfferCard />
      <VehicleGuide />
      <Packages />
    </main>
  )
}

export default App
