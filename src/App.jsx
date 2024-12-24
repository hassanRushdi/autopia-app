import { useState } from 'react'
import NavBar from './components/NavBar'
import Header from './components/Header'
import OfferCard from './components/OfferCard'
import VehicleGuide from './components/VehicleGuide'
import Packages from './components/Packages'
import AdditionalServices from './components/AdditionalServices'
import BranchSection from './components/BranchSection'

function App() {

  return (
    <main className=''>
      <Header />
      <NavBar />
      <OfferCard />
      <VehicleGuide />
      <Packages />
      <AdditionalServices />
      <BranchSection />
    </main>
  )
}

export default App
